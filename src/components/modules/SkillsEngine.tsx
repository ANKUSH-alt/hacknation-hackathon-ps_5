'use client';

import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

const SKILL_MAP: Record<string, { label: string; code: string; type: 'technical' | 'business' | 'soft' }> = {
  repair: { label: 'Electronics Repair', code: '7422', type: 'technical' },
  fix: { label: 'Hardware Maintenance', code: '7422', type: 'technical' },
  phone: { label: 'Mobile Device Diagnostics', code: 'ESCO-123', type: 'technical' },
  code: { label: 'Web Development', code: '2512', type: 'technical' },
  build: { label: 'Software Engineering', code: '2512', type: 'technical' },
  sell: { label: 'Sales & Marketing', code: '5223', type: 'business' },
  manage: { label: 'Business Management', code: '1219', type: 'business' },
  speak: { label: 'Multilingual Communication', code: 'ESCO-LANG', type: 'soft' },
};

import { AnimatePresence } from 'framer-motion';
import { SkillsPassport } from './SkillsPassport';

export const SkillsEngine = () => {
  const { country } = useAppContext();
  const [input, setInput] = useState('');
  const [isMapping, setIsMapping] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const [mounted, setMounted] = useState(false);
  const [passportId, setPassportId] = useState('');

  useEffect(() => {
    setMounted(true);
    setPassportId(Math.random().toString(36).substr(2, 6).toUpperCase());
  }, []);

  const handleMapSkills = () => {
    setIsMapping(true);
    setTimeout(() => {
      const detected = Object.keys(SKILL_MAP)
        .filter(key => input.toLowerCase().includes(key))
        .map(key => SKILL_MAP[key].label);
      
      setSkills(detected.length > 0 ? detected : ['General Technical Support']);
      setIsMapping(false);
    }, 1500);
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="card glass relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32 rounded-full transition-all duration-700 group-hover:bg-primary/10" />
        <h2 className="text-4xl font-heading font-bold mb-4 gradient-text text-center">What can you do?</h2>
        <p className="text-text-muted mb-8 text-center max-w-xl mx-auto">
          Describe your informal experience in your own words. Our AI translates it into global signals recognized by the World Bank and ILO.
        </p>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <textarea
            className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 min-h-[160px] focus:outline-none focus:border-primary/50 transition-colors text-lg"
            placeholder="e.g., I run a phone repair shop and I've been learning how to build simple websites..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          
          <button
            onClick={handleMapSkills}
            disabled={isMapping || !input.trim()}
            className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3"
          >
            {isMapping ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Mapping to {country.education.taxonomy}...
              </>
            ) : (
              'Generate Skills Passport'
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {skills.length > 0 && !isMapping && (
          <div className="py-12">
            <SkillsPassport 
              profile={{ id: passportId, skills, vouchCount: 15 }} 
              country={country} 
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
