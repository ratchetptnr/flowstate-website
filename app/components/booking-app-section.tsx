'use client';

import { useState, useEffect } from 'react';
import { BookingForm } from './booking-form';
import Script from 'next/script';

interface BookingData {
  name: string;
  email: string;
  date: string;
  slot: string;
}

export function BookingAppSection() {
  const [isLoading, setIsLoading] = useState(false);
  const SESSION_PRICE = 600; // ₹600 per session

  useEffect(() => {
    // Load Razorpay script
    if (typeof window !== 'undefined' && !(window as any).Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleBooking = async (data: BookingData) => {
    setIsLoading(true);
    try {
      // Check if environment variables are set
      if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
        alert('Payment configuration not set up yet. Please add your Razorpay credentials to .env.local');
        return;
      }

      // Step 1: Create order
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: SESSION_PRICE,
          userName: data.name,
          userEmail: data.email,
          sessionTime: data.slot,
        }),
      });

      if (!orderResponse.ok) {
        const error = await orderResponse.text();
        throw new Error(`Failed to create order: ${error}`);
      }

      const order = await orderResponse.json();

      // Step 2: Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: SESSION_PRICE * 100, // in paise
        currency: 'INR',
        name: 'FlowState',
        description: 'Coworking Session Booking',
        order_id: order.id,
        method: {
          upi: true,
          netbanking: true,
          card: true,
          wallet: true,
        },
        handler: async (response: any) => {
          // Step 3: Verify payment
          const verifyResponse = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: order.id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              userName: data.name,
              userEmail: data.email,
              sessionTime: data.slot,
              amount: SESSION_PRICE,
            }),
          });

          if (!verifyResponse.ok) {
            throw new Error('Payment verification failed');
          }

          // Show success message or redirect
          alert('Booking successful! Check your email for confirmation.');
          window.location.reload();
        },
        prefill: {
          name: data.name,
          email: data.email,
        },
        theme: {
          color: '#0f172a', // slate-900
        },
      };

      const Razorpay = (window as any).Razorpay;
      if (Razorpay) {
        const rzp = new Razorpay(options);
        rzp.open();
      } else {
        throw new Error('Razorpay script not loaded');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert(`Booking failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="upcoming-sessions" className="w-full bg-slate-50 px-6 py-24">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Book Your Session
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Select your preferred date and time. Sessions are available Monday to Friday.
          </p>
          <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full font-semibold">
            ₹{SESSION_PRICE} per session
          </div>
        </div>

        <BookingForm onSubmit={handleBooking} isLoading={isLoading} />
      </div>
    </section>
  );
}
