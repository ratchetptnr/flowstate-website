import { google } from 'googleapis';

const calendar = google.calendar('v3');

export async function getGoogleAuthClient() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return oauth2Client;
}

export async function getAvailableSlots(date: Date) {
  try {
    const auth = await getGoogleAuthClient();

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const result = await calendar.events.list({
      auth,
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = result.data.items || [];
    const slots = [
      { time: '10:00', end: '13:00', label: '10 AM - 1 PM' },
      { time: '14:00', end: '17:00', label: '2 PM - 5 PM' },
    ];

    const availableSlots = slots.filter((slot) => {
      return !events.some((event) => {
        const eventStart = new Date(event.start?.dateTime || event.start?.date || '');
        const eventEnd = new Date(event.end?.dateTime || event.end?.date || '');
        const slotStart = new Date(date);
        const slotEnd = new Date(date);

        const [hours, mins] = slot.time.split(':');
        slotStart.setHours(parseInt(hours), parseInt(mins));

        const [endHours, endMins] = slot.end.split(':');
        slotEnd.setHours(parseInt(endHours), parseInt(endMins));

        return eventStart < slotEnd && eventEnd > slotStart;
      });
    });

    return availableSlots;
  } catch (error) {
    console.error('Error fetching available slots:', error);
    // Return default slots if there's an error
    return [
      { time: '10:00', end: '13:00', label: '10 AM - 1 PM' },
      { time: '14:00', end: '17:00', label: '2 PM - 5 PM' },
    ];
  }
}

export async function createCalendarEvent(params: {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  attendeeEmail: string;
}) {
  try {
    const auth = await getGoogleAuthClient();

    const event = {
      summary: params.title,
      description: params.description,
      start: {
        dateTime: params.startTime.toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: params.endTime.toISOString(),
        timeZone: 'Asia/Kolkata',
      },
      attendees: [
        {
          email: params.attendeeEmail,
          responseStatus: 'needsAction',
        },
      ],
      reminders: {
        useDefault: true,
      },
    };

    const result = await calendar.events.insert({
      auth,
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
      sendNotifications: true,
    });

    return result.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}
