import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const nunitoSans = localFont({
  src: '../public/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf',
  display: 'swap',
  variable: '--font-nunito-sans',
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
      </head>
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
