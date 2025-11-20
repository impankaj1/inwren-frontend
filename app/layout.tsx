import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inwren - Email Marketing Platform',
  description:
    'Inwren is a powerful email marketing platform that helps you create, manage, and track your email campaigns.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
