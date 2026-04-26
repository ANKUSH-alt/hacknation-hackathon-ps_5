'use client';

import React from 'react';
import { OpportunityMatching } from '@/components/modules/OpportunityMatching';
import { useAppContext } from '@/context/AppContext';
import { PageTransition } from '@/components/layout/PageTransition';

export default function OpportunitiesPage() {
  const { country } = useAppContext();

  return (
    <PageTransition>
      <div className="flex-1 py-12 px-6 md:px-12 max-w-6xl mx-auto w-full">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Reachable <span className="gradient-text">Opportunities</span></h1>
          <p className="text-text-muted text-lg">
            Connecting skills to realistic outcomes in {country.name}. Data powered by ILOSTAT & Enterprise Surveys.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <OpportunityMatching />
          </div>
          
          <div className="space-y-6">
            <div className="card glass">
              <h3 className="font-bold mb-4">Filter by Context</h3>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs text-text-muted uppercase font-bold">Commute Radius</span>
                  <input type="range" className="w-full accent-primary mt-2" />
                </label>
                <label className="block">
                  <span className="text-xs text-text-muted uppercase font-bold">Min Wage</span>
                  <input type="range" className="w-full accent-primary mt-2" />
                </label>
              </div>
            </div>

            <div className="card bg-white/5 border-white/10">
              <h3 className="font-bold mb-2">Did you know?</h3>
              <p className="text-sm text-text-muted">
                {country.id === 'ghana' 
                  ? 'Mobile technicians in Accra see a 25% wage increase when verified through ESCO standards.'
                  : 'Solar pump maintenance is the fastest growing vocational sector in rural India for 2026.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
