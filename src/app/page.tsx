'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { Limitations } from '@/components/layout/Limitations';
import Image from 'next/image';
import Link from 'next/link';

import { PageTransition } from '@/components/layout/PageTransition';

export default function Home() {
  const { country, isLoading } = useAppContext();

  return (
    <PageTransition>
      <main className="flex-1 overflow-y-auto">

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              World Bank Youth Summit 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] tracking-tighter mb-6">
              Mapping <br /><span className="gradient-text">Invisible</span> <br />Skills.
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-xl font-medium leading-relaxed">
              An open infrastructure layer connecting 600M+ youth in LMICs to global economic opportunity.
              Designed for {country.name}&apos;s {country.economyType.toLowerCase()} economy.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 glass shadow-2xl">
              <Image 
                src="/amara.png" 
                alt="Amara, Phone Repair Specialist"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-bold text-lg">Amara, 22</p>
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Accra, Ghana • Phone Repair Specialist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Signals - Priority 1.1 Implementation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="card glass border-primary/20">
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Tech Growth</p>
            <p className="text-3xl font-bold">+{country.laborMarket.signals.techSectorGrowth}%</p>
            <p className="text-[8px] text-text-muted mt-2 uppercase">Source: ILO ILOSTAT 2024</p>
          </div>
          <div className="card glass border-primary/20">
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Avg Wage (Informal)</p>
            <p className="text-3xl font-bold">{country.localization.currencySymbol}{country.laborMarket.signals.averageWage}</p>
            <p className="text-[8px] text-text-muted mt-2 uppercase">Source: World Bank WDI</p>
          </div>
          <div className="card glass border-primary/20">
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Skills Premium</p>
            <p className="text-3xl font-bold">+{country.laborMarket.signals.skillsPremium}%</p>
            <p className="text-[8px] text-text-muted mt-2 uppercase">Vocational Increment</p>
          </div>
          <div className="card glass border-primary/20">
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Digital Ready</p>
            <p className="text-3xl font-bold">{country.laborMarket.signals.digitalPenetration}%</p>
            <p className="text-[8px] text-text-muted mt-2 uppercase">Source: ITU 2024</p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ModuleTeaser 
            title="Skills Engine" 
            desc="Map informal experience to global standards." 
            href="/skills"
            icon="🎯"
          />
          <ModuleTeaser 
            title="Journey Map" 
            desc="Predictive 2026→2035 career pathways." 
            href="/journey"
            icon="🗺️"
          />
          <ModuleTeaser 
            title="AI Risk Lens" 
            desc="Honest automation risk assessments." 
            href="/risk"
            icon="⚖️"
          />
          <ModuleTeaser 
            title="Opportunities" 
            desc="Connect to realistic, reachable outcomes." 
            href="/opportunities"
            icon="🚀"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 card glass border-primary/20 py-16">
          <h2 className="text-3xl font-bold">Ready to map your future?</h2>
          <p className="text-text-muted max-w-xl mx-auto">
            UNMAPPED is an open protocol. Join governments and NGOs globally using our data to bridge the skills gap.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/skills" className="btn-primary">Get Started</Link>
            <Link href="/dashboard" className="px-6 py-3 rounded-xl border border-white/10 font-semibold hover:bg-white/5 transition-all text-white">View Dashboard</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center space-y-4">
        <p className="text-text-muted text-sm">© 2026 UNMAPPED • Infrastructure for Economic Visibility</p>
        <p className="text-text-muted text-sm">Powered by ILOSTAT & World Bank Data Signals</p>
        <div className="pt-4">
          <Limitations />
        </div>
      </footer>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-in">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="text-primary font-mono tracking-widest uppercase text-xs animate-pulse">
              Calibrating {country.name} Data...
            </p>
          </div>
        </div>
      )}
      </main>
    </PageTransition>
  );
}



const ModuleTeaser = ({ title, desc, href, icon }: { title: string; desc: string; href: string; icon: string }) => (
  <Link href={href} className="card glass hover:border-primary/50 group transition-all duration-500 block">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-sm text-text-muted">{desc}</p>
    <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Open Module <span>→</span>
    </div>
  </Link>
);
