import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, userName, userEmail, sessionTime } = body;

    if (!amount || !userName || !userEmail || !sessionTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert amount to paise (multiply by 100)
    const amountInPaise = Math.round(amount * 100);

    const order = await createOrder({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `booking_${Date.now()}`,
      notes: {
        userName,
        userEmail,
        sessionTime,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
