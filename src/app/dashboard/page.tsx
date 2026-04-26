'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { PageTransition } from '@/components/layout/PageTransition';

export default function DashboardPage() {
  const { country } = useAppContext();

  return (
    <PageTransition>
      <div className="flex-1 py-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Policymaker <span className="gradient-text">Signals</span></h1>
            <p className="text-text-muted text-lg">
              Aggregate labor market intelligence for {country.name}.
            </p>
          </div>
          <div className="bg-primary/20 border border-primary/30 px-4 py-2 rounded-xl text-primary text-xs font-bold uppercase">
            Live: {country.laborMarket.dataSource}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard label="Youth Reach (Target)" value="12.5k" sub="↑ 12% MoM" />
          <StatCard label="Skills Gaps Identified" value="42" sub="Across 8 sectors" />
          <StatCard label="Automation Sensitivity" value={country.automation.digitalPenetration.toFixed(2)} sub="Infrastructure Limit" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card glass">
            <h3 className="font-bold mb-6 text-xl">Skills Distribution</h3>
            <div className="space-y-4">
              <ProgressBar label="Technical Repair" value={65} color="bg-primary" />
              <ProgressBar label="Digital Services" value={42} color="bg-blue-500" />
              <ProgressBar label="Agricultural Logistics" value={28} color="bg-green-500" />
              <ProgressBar label="Hospitality" value={15} color="bg-purple-500" />
            </div>
          </div>

          <div className="card glass">
            <h3 className="font-bold mb-6 text-xl">Economic Impact Forecast</h3>
            <div className="h-[200px] flex items-end gap-2 px-2">
              {[40, 65, 45, 80, 55, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/20 border border-primary/40 rounded-t-lg transition-all duration-700 hover:bg-primary/40" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="card glass">
                <p className="text-xs text-text-muted uppercase font-bold mb-1">Youth Skill Gaps</p>
                <p className="text-3xl font-bold text-error">24%</p>
                <p className="text-[8px] text-text-muted mt-2 uppercase tracking-tighter">Ref: World Bank WDI 2024</p>
              </div>
              <div className="card glass">
                <p className="text-xs text-text-muted uppercase font-bold mb-1">AI Exposure Index</p>
                <p className="text-3xl font-bold text-primary">0.68</p>
                <p className="text-[8px] text-text-muted mt-2 uppercase tracking-tighter">Ref: Frey-Osborne Calibration</p>
              </div>
              <div className="card glass">
                <p className="text-xs text-text-muted uppercase font-bold mb-1">Matched Outcomes</p>
                <p className="text-3xl font-bold text-success">8.4k</p>
                <p className="text-[8px] text-text-muted mt-2 uppercase tracking-tighter">Real-time Matching Signal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

const StatCard = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div className="card glass">
    <p className="text-xs text-text-muted uppercase font-bold mb-1">{label}</p>
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-xs text-success font-medium mt-1">{sub}</p>
  </div>
);

const ProgressBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs">
      <span>{label}</span>
      <span className="font-mono">{value}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);
