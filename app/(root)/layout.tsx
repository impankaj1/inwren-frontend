import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Inwren - Email Marketing Platform',
  description:
    'Inwren is a powerful email marketing platform that helps you create, manage, and track your email campaigns.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <div>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
