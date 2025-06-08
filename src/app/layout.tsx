import './globals.css';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '../components/Footer';


export const metadata = {
  title: 'JCRM Church',
  description: 'Welcome to the official JCRM Church website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <Header />

        {/* Main content grows to fill space */}
        <main className="">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
