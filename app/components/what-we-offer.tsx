'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { EggCrack, CaretLeft, CaretRight, CircleNotch, CheckCircle } from '@phosphor-icons/react';

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

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function WhatWeOffer() {
  const [dates, setDates] = useState<Array<{ day: number; weekday: string; isToday: boolean; fullDate: Date; dateString: string }>>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [today, setToday] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [weekOffset, setWeekOffset] = useState(0);
  const [bookingData, setBookingData] = useState<{name: string; email: string; phone: string} | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const generateWeekDates = (offset: number) => {
    const now = new Date();
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    // Calculate the start of the current week (Sunday)
    const currentDay = now.getDay();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - currentDay);

    // Apply week offset
    startOfWeek.setDate(startOfWeek.getDate() + (offset * 7));

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

    return weekDates;
  };

  useEffect(() => {
    const now = new Date();
    setToday(now);

    const weekDates = generateWeekDates(weekOffset);
    setDates(weekDates);

    // Set selected date to today by default only on first load
    if (selectedDate === null) {
      const todayString = now.toISOString().split('T')[0];
      setSelectedDate(todayString);
    }
  }, [weekOffset]);

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

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setShowBookingForm(true);
    setPaymentSuccess(false);
    setIsProcessingPayment(false);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !bookingData) return;

    const { name, email, phone } = bookingData;

    try {
      setIsProcessingPayment(true);

      // Create Razorpay order
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: selectedEvent.price,
          userName: name,
          userEmail: email,
          sessionTime: `${selectedEvent.date} | ${selectedEvent.start_time}`,
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        setIsProcessingPayment(false);
        alert('Failed to create order');
        return;
      }

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'FlowState',
        description: `${selectedEvent.title} at ${selectedEvent.cafe_name}`,
        order_id: orderData.id,
        handler: async function (response: any) {
          // Verify payment
          const verifyResponse = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              userName: name,
              userEmail: email,
              userPhone: phone,
              sessionTime: `${selectedEvent.date} | ${selectedEvent.start_time}`,
              amount: selectedEvent.price,
              eventId: selectedEvent.id,
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyResponse.ok) {
            setIsProcessingPayment(false);
            setPaymentSuccess(true);
            fetchEvents(); // Refresh events to update available seats
          } else {
            setIsProcessingPayment(false);
            alert('Payment verification failed: ' + verifyData.error);
          }
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: {
          color: '#2CAAC9',
        },
        modal: {
          ondismiss: function() {
            setIsProcessingPayment(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      setIsProcessingPayment(false);
      alert('Failed to initiate payment');
    }
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
          <div className="flex justify-center items-center mb-12 gap-6">
            {/* Previous week button */}
            <button
              onClick={() => setWeekOffset(weekOffset - 1)}
              className="p-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Previous week"
            >
              <CaretLeft size={24} color="#1C1C1C" />
            </button>

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

            {/* Next week button */}
            <button
              onClick={() => setWeekOffset(weekOffset + 1)}
              className="p-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Next week"
            >
              <CaretRight size={24} color="#1C1C1C" />
            </button>
          </div>

          {/* Sessions list */}
          <div className="max-w-3xl w-full space-y-4">
            {loading ? (
              <p className="text-center font-inter text-[18px]" style={{ color: '#1C1C1C' }}>
                Loading sessions...
              </p>
            ) : selectedDateEvents.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <EggCrack size={32} color="#1C1C1C" />
                <p className="text-center font-inter text-[18px]" style={{ color: '#1C1C1C' }}>
                  No sessions available for this date.
                </p>
              </div>
            ) : (
              selectedDateEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="flex items-center justify-between py-6 border-b cursor-pointer hover:bg-white/50 transition-colors px-4 rounded-lg"
                  style={{ borderColor: '#1C1C1C20' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onClick={() => handleEventClick(event)}
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

      {/* Booking Form Modal */}
      {showBookingForm && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => !isProcessingPayment && !paymentSuccess && setShowBookingForm(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Processing State */}
            {isProcessingPayment && (
              <div className="flex flex-col items-center justify-center py-8">
                <CircleNotch size={48} color="#2CAAC9" className="animate-spin mb-4" />
                <p className="font-inter text-[18px] font-medium" style={{ color: '#1C1C1C' }}>
                  Processing payment...
                </p>
                <p className="font-inter text-[14px] mt-2" style={{ color: '#1C1C1C80' }}>
                  Please complete the payment in the Razorpay window
                </p>
              </div>
            )}

            {/* Success State */}
            {paymentSuccess && (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle size={64} color="#2CAAC9" weight="fill" className="mb-4" />
                <h3 className="font-inter text-[24px] font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                  Booking Confirmed!
                </h3>
                <p className="font-inter text-[16px] text-center mb-6" style={{ color: '#1C1C1C' }}>
                  Check your email for the session details and confirmation.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 w-full mb-6">
                  <p className="font-inter text-[14px] font-medium mb-1" style={{ color: '#1C1C1C' }}>
                    {selectedEvent.cafe_name}
                  </p>
                  <p className="font-inter text-[14px]" style={{ color: '#1C1C1C80' }}>
                    {formatTime(selectedEvent.start_time)} - {formatTime(selectedEvent.end_time)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowBookingForm(false);
                    setBookingData(null);
                    setPaymentSuccess(false);
                  }}
                  className="w-full px-6 py-3 rounded-lg font-inter text-[16px] font-medium text-white transition-colors"
                  style={{ backgroundColor: '#111111' }}
                >
                  Done
                </button>
              </div>
            )}

            {/* Form State */}
            {!isProcessingPayment && !paymentSuccess && (
              <>
                <h3 className="font-inter text-[24px] font-semibold mb-2" style={{ color: '#1C1C1C' }}>
                  Book Your Session
                </h3>
                <p className="font-inter text-[14px] mb-6" style={{ color: '#1C1C1C' }}>
                  {selectedEvent.cafe_name} • {formatTime(selectedEvent.start_time)} - {formatTime(selectedEvent.end_time)}
                </p>

                <form onSubmit={handleBookingSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="font-inter text-[14px] block mb-2" style={{ color: '#1C1C1C' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-inter text-[16px]"
                        style={{ borderColor: '#1C1C1C20' }}
                        value={bookingData?.name || ''}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value, email: bookingData?.email || '', phone: bookingData?.phone || '' })}
                      />
                    </div>

                    <div>
                      <label className="font-inter text-[14px] block mb-2" style={{ color: '#1C1C1C' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-inter text-[16px]"
                        style={{ borderColor: '#1C1C1C20' }}
                        value={bookingData?.email || ''}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value, name: bookingData?.name || '', phone: bookingData?.phone || '' })}
                      />
                    </div>

                    <div>
                      <label className="font-inter text-[14px] block mb-2" style={{ color: '#1C1C1C' }}>
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border font-inter text-[16px]"
                        style={{ borderColor: '#1C1C1C20' }}
                        value={bookingData?.phone || ''}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value, name: bookingData?.name || '', email: bookingData?.email || '' })}
                      />
                    </div>

                    <div className="pt-4 border-t" style={{ borderColor: '#1C1C1C20' }}>
                      <div className="flex justify-between mb-4">
                        <span className="font-inter text-[16px]" style={{ color: '#1C1C1C' }}>
                          Total
                        </span>
                        <span className="font-inter text-[20px] font-semibold" style={{ color: '#1C1C1C' }}>
                          ₹{selectedEvent.price}
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowBookingForm(false)}
                          className="flex-1 px-6 py-3 rounded-lg font-inter text-[16px] font-medium transition-colors"
                          style={{ backgroundColor: '#E8F5E9', color: '#1C1C1C' }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex-1 px-6 py-3 rounded-lg font-inter text-[16px] font-medium text-white transition-colors"
                          style={{ backgroundColor: '#111111' }}
                        >
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
