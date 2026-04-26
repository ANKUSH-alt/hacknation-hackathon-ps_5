'use client';

import React from 'react';
import { RiskLens } from '@/components/modules/RiskLens';
import { useAppContext } from '@/context/AppContext';
import { PageTransition } from '@/components/layout/PageTransition';

export default function RiskPage() {
  const { country } = useAppContext();

  return (
    <PageTransition>
      <div className="flex-1 py-12 px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">AI Readiness & <span className="gradient-text">Displacement Risk</span></h1>
          <p className="text-text-muted text-lg">
            Honest automation assessment for {country.name}. Calibrated for {country.automation.infrastructureContext} infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RiskLens />
          </div>
          
          <div className="space-y-6">
            <div className="card border-primary/20 bg-primary/5">
              <h3 className="font-bold mb-4">Infrastructure Calibration</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Connectivity</span>
                  <span className="font-mono">{country.automation.infrastructureContext}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Digital Penetration</span>
                  <span className="font-mono">{Math.round(country.automation.digitalPenetration * 100)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Adjustment Factor</span>
                  <span className="font-mono">{country.automation.taskCompositionAdjustment}</span>
                </div>
              </div>
            </div>

            <div className="card glass">
              <h3 className="font-bold mb-4">Data Sources</h3>
              <ul className="text-xs text-text-muted space-y-2">
                <li>• Frey & Osborne (2013)</li>
                <li>• ILO Future of Work Datasets</li>
                <li>• ITU Digital Development Indicators</li>
                <li>• Wittgenstein Centre 2035 Projections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
