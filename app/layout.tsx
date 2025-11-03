import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FlowState - Coworking Sessions at Chennai Cafés',
  description:
    '3-hour coworking sessions at Chennai best cafés. Book a session, work with focus, actually get shit done.',
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
      <body>{children}</body>
    </html>
  );
}
