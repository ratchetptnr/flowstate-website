import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export interface OrderCreateParams {
  amount: number; // in paise (e.g., 50000 for ₹500)
  currency?: string;
  receipt: string;
  notes?: Record<string, any>;
}

export async function createOrder(params: OrderCreateParams) {
  try {
    const order = await razorpay.orders.create({
      amount: params.amount,
      currency: params.currency || 'INR',
      receipt: params.receipt,
      notes: params.notes || {},
    });

    return order;
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
}

export function verifyPaymentSignature(params: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!);
  const data = `${params.orderId}|${params.paymentId}`;
  hmac.update(data);
  const generatedSignature = hmac.digest('hex');

  return generatedSignature === params.signature;
}

export async function fetchPaymentDetails(paymentId: string) {
  try {
    const payment = await razorpay.payments.fetch(paymentId);
    return payment;
  } catch (error) {
    console.error('Error fetching payment details:', error);
    throw error;
  }
}
