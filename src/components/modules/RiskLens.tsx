'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext';

const RISK_DATA: Record<string, { risk: number; durability: number; outlook: 'Growing' | 'Stable' | 'Declining' }> = {
  'Electronics Repair': { risk: 0.45, durability: 0.7, outlook: 'Stable' },
  'Hardware Maintenance': { risk: 0.55, durability: 0.6, outlook: 'Stable' },
  'Mobile Device Diagnostics': { risk: 0.35, durability: 0.8, outlook: 'Growing' },
  'Web Development': { risk: 0.25, durability: 0.9, outlook: 'Growing' },
  'Software Engineering': { risk: 0.15, durability: 0.95, outlook: 'Growing' },
  'Sales & Marketing': { risk: 0.40, durability: 0.75, outlook: 'Stable' },
  'Business Management': { risk: 0.20, durability: 0.85, outlook: 'Growing' },
  'Multilingual Communication': { risk: 0.30, durability: 0.80, outlook: 'Growing' },
  'General Labor': { risk: 0.85, durability: 0.2, outlook: 'Declining' },
};

export const RiskLens = () => {
  const { country } = useAppContext();
  
  // Example skills for visualization
  const activeSkills = ['Electronics Repair', 'Web Development', 'General Labor'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="card glass relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32 rounded-full transition-all duration-700 group-hover:bg-primary/10" />
        <h2 className="text-3xl font-heading font-bold mb-4 gradient-text">AI Readiness & Risk</h2>
        <p className="text-text-muted mb-6">
          Calibrated for {country.name} (<span className="capitalize">{country.automation.infrastructureContext.replace(/_/g, ' ')}</span>). 
          Showing skill value trajectory from 2026 to 2035.
        </p>

        <div className="space-y-6">
          {activeSkills.map((skillName) => {
            const data = RISK_DATA[skillName];
            const riskPercent = Math.round(data.risk * 100 * (1 / (country.automation.digitalPenetration + 0.5)));
            
            return (
              <div key={skillName} className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-semibold text-white">{skillName}</span>
                    <span className={`ml-3 text-[10px] px-2 py-0.5 rounded-full ${
                      data.outlook === 'Growing' ? 'bg-green-500/20 text-green-400' :
                      data.outlook === 'Stable' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {data.outlook}
                    </span>
                  </div>
                  <span className="text-xs text-text-muted">Automation Risk: {riskPercent}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      riskPercent < 40 ? 'bg-green-500' : riskPercent < 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${riskPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-white/5 border-white/10 glow-border">
          <h3 className="font-heading font-bold mb-2">Skill Durability Index</h3>
          <p className="text-3xl font-bold text-primary">0.72</p>
          <p className="text-xs text-text-muted mt-2">Based on current task composition in {country.region}.</p>
        </div>
        <div className="card bg-white/5 border-white/10 glow-border">
          <h3 className="font-heading font-bold mb-2">Upskilling Pathway</h3>
          <p className="text-sm">Transition to <span className="text-primary font-bold">Mobile App Development</span></p>
          <p className="text-xs text-text-muted mt-2">Recommended for your repair + coding background.</p>
        </div>
      </div>
    </div>
  );
};
