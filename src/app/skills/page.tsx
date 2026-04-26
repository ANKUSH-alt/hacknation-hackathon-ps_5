'use client';

import React from 'react';
import { SkillsEngine } from '@/components/modules/SkillsEngine';
import { useAppContext } from '@/context/AppContext';
import { PageTransition } from '@/components/layout/PageTransition';

export default function SkillsPage() {
  const { country } = useAppContext();

  return (
    <PageTransition>
      <div className="flex-1 py-12 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Skills Signal <span className="gradient-text">Engine</span></h1>
          <p className="text-text-muted text-lg">
            The infrastructure layer that makes invisible skills visible. Calibrated for {country.name}&apos;s informal economy.
          </p>
        </div>
        
        <div className="space-y-12">
          <SkillsEngine />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="card glass">
              <h3 className="font-bold mb-2">Taxonomy Standard</h3>
              <p className="text-sm text-text-muted">{country.education.taxonomy} • ISCO-08 Compatibility</p>
            </div>
            <div className="card glass">
              <h3 className="font-bold mb-2">Verification Source</h3>
              <p className="text-sm text-text-muted">{country.laborMarket.dataSource}</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
