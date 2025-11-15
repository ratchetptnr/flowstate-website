import type { Metadata } from 'next';
import { Shrikhand, Inter } from 'next/font/google';
import './globals.css';

const shrikhand = Shrikhand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shrikhand',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'FlowState - Coworking Sessions at Chennai Cafés',
  description:
    '3-hour coworking sessions at Chennai best cafés. Book a session, work with focus, actually get shit done.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'FlowState - Coworking Sessions at Chennai Cafés',
    description:
      '3-hour coworking sessions at Chennai best cafés. Book a session, work with focus, actually get shit done.',
    url: 'https://theflow.state',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body className={`${inter.variable} ${shrikhand.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
