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
      <body>
        <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(124,58,237,0.06),transparent)]">
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
