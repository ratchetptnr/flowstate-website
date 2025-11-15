'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  availableSeats: number;
  totalSeats: number;
  price: number;
  cafe_name: string;
  cafe_address: string;
  cafe_maps_link: string;
}

export function WhatWeOffer() {
  const [dates, setDates] = useState<Array<{ day: number; weekday: string; isToday: boolean; fullDate: Date; dateString: string }>>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [today, setToday] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get today's date from the user's device
    const now = new Date();
    setToday(now);

    // Generate the week starting from Sunday
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    // Calculate the start of the week (Sunday)
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - currentDay);

    // Generate 7 days starting from Sunday
    const weekDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);

      const isToday = date.toDateString() === now.toDateString();

      // Format as YYYY-MM-DD for backend
      const dateString = date.toISOString().split('T')[0];

      return {
        day: date.getDate(),
        weekday: weekDays[i],
        isToday,
        fullDate: date,
        dateString,
      };
    });

    setDates(weekDates);

    // Set selected date to today by default
    const todayString = now.toISOString().split('T')[0];
    setSelectedDate(todayString);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Filter events for the selected date
  const selectedDateEvents = events.filter(event => event.date === selectedDate);

  return (
    <section
      className="relative min-h-screen flex flex-col p-16"
      style={{ backgroundColor: '#E8F5E9' }}
    >
      {/* Top section with heading */}
      <div className="mb-2">
        <motion.h2
          className="font-inter text-[28px] font-normal leading-[36px] max-w-3xl"
          style={{ color: '#1C1C1C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to enter flowstate?
        </motion.h2>
      </div>

      {/* Center area for calendar and events (instead of blob) */}
      <div className="flex-1 flex flex-col items-center justify-center my-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl flex flex-col items-center"
        >
          {/* Calendar date selector */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-4">
              {dates.length > 0 && dates.map((date, index) => (
                <motion.button
                  key={`${date.day}-${date.weekday}`}
                  onClick={() => setSelectedDate(date.dateString)}
                  className="relative flex flex-col items-center px-6 py-4 rounded-lg transition-colors"
                  style={{
                    backgroundColor: selectedDate === date.dateString ? '#111111' : 'transparent',
                    color: selectedDate === date.dateString ? '#E8F5E9' : '#1C1C1C',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                >
                  {date.isToday && (
                    <div
                      className="absolute -top-2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#1C1C1C' }}
                    />
                  )}
                  <span className="font-inter text-[28px] font-normal">{date.day}</span>
                  <span className="font-inter text-sm font-normal mt-1">{date.weekday}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sessions list */}
          <div className="max-w-3xl w-full space-y-4">
            {loading ? (
              <p className="text-center font-inter text-[18px]" style={{ color: '#1C1C1C' }}>
                Loading sessions...
              </p>
            ) : selectedDateEvents.length === 0 ? (
              <p className="text-center font-inter text-[18px]" style={{ color: '#1C1C1C' }}>
                No sessions available for this date.
              </p>
            ) : (
              selectedDateEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="flex items-center justify-between py-6 border-b cursor-pointer hover:bg-white/50 transition-colors px-4 rounded-lg"
                  style={{ borderColor: '#1C1C1C20' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onClick={() => {
                    // Scroll to booking section
                    const element = document.getElementById('upcoming-sessions');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="font-inter text-[18px] font-normal" style={{ color: '#1C1C1C' }}>
                    {formatTime(event.start_time)} - {formatTime(event.end_time)}
                  </span>
                  <span className="font-inter text-[18px] font-normal" style={{ color: '#1C1C1C' }}>
                    {event.cafe_name}
                  </span>
                  <span className="font-inter text-[18px] font-normal" style={{ color: '#1C1C1C' }}>
                    {event.availableSeats} seats left
                  </span>
                  <span className="font-inter text-[18px]" style={{ color: '#1C1C1C' }}>→</span>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
