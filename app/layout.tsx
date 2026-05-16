import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deepanshu Jangid | Full Stack Developer',
  description: 'A modern portfolio for Deepanshu Jangid focused on full stack development, creative UI, and real-world projects.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Deepanshu Jangid | Full Stack Developer',
    description: 'A modern portfolio for Deepanshu Jangid.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
