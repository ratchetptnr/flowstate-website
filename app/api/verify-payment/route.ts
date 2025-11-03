import { NextRequest, NextResponse } from 'next/server';
import { verifyPaymentSignature } from '@/lib/razorpay';
import { sendPaymentConfirmationWithCalendar } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      orderId,
      paymentId,
      signature,
      userName,
      userEmail,
      sessionTime,
      amount,
    } = body;

    if (
      !orderId ||
      !paymentId ||
      !signature ||
      !userName ||
      !userEmail ||
      !sessionTime ||
      !amount
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify payment signature
    const isSignatureValid = verifyPaymentSignature({
      orderId,
      paymentId,
      signature,
    });

    if (!isSignatureValid) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // Parse session time and create calendar event
    const [dateStr, timeStr] = sessionTime.split(' | ');
    const sessionDate = new Date(dateStr);
    const [startHour, startMin] = timeStr.split(':').slice(0, 2);

    const startTime = new Date(sessionDate);
    startTime.setHours(parseInt(startHour), parseInt(startMin), 0);

    const endTime = new Date(startTime);
    // Determine end time based on session slot
    if (startHour === '10') {
      endTime.setHours(13, 0, 0);
    } else if (startHour === '14') {
      endTime.setHours(17, 0, 0);
    } else {
      endTime.setHours(startTime.getHours() + 1, 0, 0);
    }

    // Send payment confirmation email with calendar invite
    await sendPaymentConfirmationWithCalendar({
      to: userEmail,
      userName,
      sessionTime,
      orderId,
      amount,
      startTime,
      endTime,
    });

    return NextResponse.json({
      success: true,
      message: 'Payment verified and session booked successfully',
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
