'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { Limitations } from '@/components/layout/Limitations';
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
            <div className="relative card glass p-2 overflow-hidden aspect-square md:aspect-video rounded-3xl">
              {/* Using a placeholder if the image isn't moved yet, but assuming it will be served from public */}
              <img 
                src="/amara.png" 
                alt="Amara Persona" 
                className="w-full h-full object-cover rounded-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                <p className="text-sm font-bold">MEET AMARA</p>
                <p className="text-xs text-text-muted">22, {country.name} • Self-taught Technician & Coder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Signals */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
          <div className="card glass">
            <p className="text-xs text-text-muted uppercase font-bold mb-1">Avg. Monthly Wage</p>
            <p className="text-2xl font-bold">{country.localization.currencySymbol}{country.laborMarket.signals.averageWage}</p>
          </div>
          <div className="card glass">
            <p className="text-xs text-text-muted uppercase font-bold mb-1">Growth Rate</p>
            <p className="text-2xl font-bold text-success">+{country.laborMarket.signals.growthRate}%</p>
          </div>
          <div className="card glass">
            <p className="text-xs text-text-muted uppercase font-bold mb-1">Informal Economy</p>
            <p className="text-2xl font-bold">{country.laborMarket.signals.informalSectorSize}</p>
          </div>
          <div className="card glass">
            <p className="text-xs text-text-muted uppercase font-bold mb-1">Digital Readiness</p>
            <p className="text-2xl font-bold">{Math.round(country.automation.digitalPenetration * 100)}%</p>
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
