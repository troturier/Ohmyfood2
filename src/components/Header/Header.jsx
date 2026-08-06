'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isRestaurantPage = pathname?.startsWith('/restaurant/');

  return (
    <header className="header">
      {isRestaurantPage && (
        <Link href="/" className="backButton">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"/>
          </svg>
        </Link>
      )}
      <div className="logoContainer">
        <Link href="/" className="logo">
          ohmyfood
        </Link>
      </div>
    </header>
  );
} 