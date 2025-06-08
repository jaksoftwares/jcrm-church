'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/jcrm-logo.png"
            alt="JCRM Logo"
            width={64}
            height={64}
            className="object-contain"
          />
          <p className="mt-4 text-sm text-gray-300">
            Jesus Come Revival Ministries is a spirit-filled church committed to spreading the gospel and transforming lives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/ministries" className="hover:text-white">Ministries</Link></li>
            <li><Link href="/gems" className="hover:text-white">Gems</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contacts</Link></li>
            <li><Link href="/media" className="hover:text-white">Watch | Read | Listen</Link></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get Involved</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/give" className="hover:text-white">Give & Support</Link></li>
            <li><Link href="/join" className="hover:text-white">Join a Ministry</Link></li>
            <li><Link href="/prayer" className="hover:text-white">Prayer Requests</Link></li>
          </ul>
        </div>

        {/* Contacts & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contacts & Socials</h3>
          <p className="text-gray-400 text-sm">
            JekSolstice Jair, KPCU Building, Chain 1, 5th Floor,
            P.O Box 8388-00100, Nairobi, Kenya
          </p>
          <p className="text-gray-400 text-sm mt-2">
            📞 +254 722 945183<br />
            ✉️ <a href="mailto:chaos@jcrm.org" className="hover:text-white">chaos@jcrm.org</a>
          </p>

          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        <p>© 2025 Jesus Come Revival Ministries. All Rights Reserved.</p>
        <p>
          <Link href="#" className="hover:text-white">Privacy Policy</Link> |{' '}
          <Link href="#" className="hover:text-white">Terms of Use</Link> |{' '}
          <Link href="#" className="hover:text-white">Refund Policy</Link>
        </p>
        <p className="mt-2 text-gray-600">Powered by DDS</p>
      </div>
    </footer>
  );
};

export default Footer;
