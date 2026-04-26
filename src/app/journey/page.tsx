'use client';

import React from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { SkillsJourneyMap } from '@/components/modules/SkillsJourneyMap';
import { useAppContext } from '@/context/AppContext';

export default function JourneyPage() {
  const { country } = useAppContext();

  return (
    <PageTransition>
      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Killer Feature: Predictive Pathways
          </div>
          <h1 className="text-4xl font-bold tracking-tight">The 10-Year <span className="gradient-text">Trajectory</span></h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Where could Amara be in 2035? UNMAPPED analyzes her current skills, {country.name}&apos;s digital infrastructure, and global automation data to project reachable futures.
          </p>
        </div>

        <SkillsJourneyMap />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card glass">
            <h3 className="font-bold mb-2">Honest Trajectories</h3>
            <p className="text-xs text-text-muted">Unlike aspirational tools, we show the real investment (time/cost) required to transition from informal to formal sectors.</p>
          </div>
          <div className="card glass">
            <h3 className="font-bold mb-2">Automation Calibrated</h3>
            <p className="text-xs text-text-muted">Pathways are color-coded by automation risk. Skills like &quot;Management&quot; remain green as AI resilience increases.</p>
          </div>
          <div className="card glass">
            <h3 className="font-bold mb-2">Regional Precision</h3>
            <p className="text-xs text-text-muted">Wages and opportunities are indexed to localized ILO signals, ensuring every path is grounded in reality.</p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
