'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CountrySwitcher } from '@/components/modules/CountrySwitcher';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5 py-3 px-6 md:px-12 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-heading font-bold text-white italic transition-transform group-hover:rotate-12">U</div>
        <span className="font-heading font-bold text-xl tracking-tighter">UNMAPPED</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <NavLink href="/skills" label="Skills Engine" />
        <NavLink href="/risk" label="AI Risk Lens" />
        <NavLink href="/opportunities" label="Opportunities" />
        <NavLink href="/dashboard" label="Policymaker" />
      </div>

      {/* Language & Country */}
      <div className="flex items-center gap-2 md:gap-4">
        <select className="bg-transparent border-none text-[10px] font-bold text-text-muted hover:text-white transition-colors cursor-pointer outline-none uppercase tracking-widest">
          <option value="en">EN</option>
          <option value="tw">TW</option>
          <option value="hi">HI</option>
        </select>
        <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
        <CountrySwitcher />
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
        isActive ? 'text-primary' : 'text-text-muted'
      }`}
    >
      {label}
    </Link>
  );
};
