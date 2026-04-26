'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext';

interface Opportunity {
  title: string;
  company: string;
  type: string;
  wage: string;
  distance: string;
}

const OPPORTUNITIES: Record<string, Opportunity[]> = {
  ghana: [
    { title: 'Mobile Repair Technician', type: 'Formal Employment', company: 'TechSolutions Accra', wage: '1200 - 1500 GHS', distance: '3.2km' },
    { title: 'Junior Web Developer', type: 'Apprenticeship', company: 'Digital Ghana Hub', wage: '800 - 1000 GHS', distance: '5.1km' },
    { title: 'Customer Support Lead', type: 'Gig Work', company: 'RemoteGlobal', wage: '15 GHS / hr', distance: 'Remote' },
  ],
  india: [
    { title: 'Agri-Tech Field Officer', type: 'Formal Employment', company: 'Bharat Agri', wage: '18000 - 22000 INR', distance: '12km' },
    { title: 'Solar Pump Technician', type: 'Training Program', company: 'Skill India', wage: 'Stipend: 5000 INR', distance: '4km' },
    { title: 'Rural Fintech Agent', type: 'Self-employment', company: 'PayVillage', wage: 'Commission based', distance: 'Local' },
  ]
};

import { motion } from 'framer-motion';

export const OpportunityMatching = () => {
  const { country } = useAppContext();
  const list = OPPORTUNITIES[country.id] || [];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="card glass relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32 rounded-full transition-all duration-700 group-hover:bg-primary/10" />
        <h2 className="text-3xl font-heading font-bold mb-4 gradient-text">Opportunity Matching</h2>
        <p className="text-text-muted mb-6">
          Connecting your skills to reachable opportunities. Surface signals: Wage floors & sector density.
        </p>

        <div className="space-y-4">
          {list.map((op, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div>
                <h3 className="font-bold text-lg">{op.title}</h3>
                <p className="text-sm text-text-muted">{op.company} • {op.type}</p>
              </div>
              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <div className="text-right">
                  <p className="font-bold text-primary">{op.wage}</p>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider">{op.distance}</p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-primary hover:text-white transition-all text-xs font-bold"
                >
                  CONTACT
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="card bg-primary/5 border-primary/20 glow-border">
        <h3 className="font-heading font-bold mb-4">Econometric Signals (Local)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <p className="text-[10px] text-text-muted uppercase font-bold">Wage Floor</p>
            <p className="text-lg font-bold">{country.localization.currencySymbol}{Math.round(country.laborMarket.signals.averageWage * 0.7)}</p>
          </div>
          <div>
            <p className="text-[10px] text-text-muted uppercase font-bold">Sector Growth</p>
            <p className="text-lg font-bold text-success">+{country.laborMarket.signals.growthRate}%</p>
          </div>
          <div>
            <p className="text-[10px] text-text-muted uppercase font-bold">Skill Premium</p>
            <p className="text-lg font-bold">1.4x</p>
          </div>
        </div>
      </div>
    </div>
  );
};
