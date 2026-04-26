'use client';

import React from 'react';
import Link from 'next/link';
import { Limitations } from './Limitations';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center font-bold text-xs italic">U</div>
            <span className="font-heading font-bold text-sm tracking-tight text-white">UNMAPPED</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
            <Link href="/methodology" className="hover:text-primary transition-colors">Methodology</Link>
            <Link href="/data-sources" className="hover:text-primary transition-colors">Data Sources</Link>
            <Link href="/skills" className="hover:text-primary transition-colors">Skills Engine</Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">Policymaker</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest">
            © 2026 UNMAPPED • Infrastructure for Economic Visibility
          </p>
          <div className="flex items-center gap-6">
            <Limitations />
            <span className="text-[10px] text-text-muted/30">|</span>
            <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest italic">ILOSTAT & World Bank Powered</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
