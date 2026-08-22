import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AU·RA — Artist Intelligence',
  description: 'Know where you stand. Know what to do next.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
