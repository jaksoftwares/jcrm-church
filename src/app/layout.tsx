import './globals.css';
import '@/styles/globals.css';
import { ReactNode } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer1';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';


export const metadata = {
  title: 'JCRM Church',
  description: 'Welcome to the official JCRM Church website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
          {/* <Header /> */}
        </div>

        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
