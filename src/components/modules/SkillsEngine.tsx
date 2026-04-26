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

export const SkillsEngine = () => {
  const { country } = useAppContext();
  const [input, setInput] = useState('');
  const [isMapping, setIsMapping] = useState(false);
  const [skills, setSkills] = useState<typeof SKILL_MAP[string][]>([]);

  const [mounted, setMounted] = useState(false);
  const [passportId, setPassportId] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setPassportId(`UNM-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
  }, []);

  const handleMapSkills = () => {
    setIsMapping(true);
    setTimeout(() => {
      const detected = Object.keys(SKILL_MAP)
        .filter(key => input.toLowerCase().includes(key))
        .map(key => SKILL_MAP[key]);
      
      setSkills(detected.length > 0 ? detected : [{ label: 'General Labor', code: '9333', type: 'technical' }]);
      setIsMapping(false);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="card glass relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32 rounded-full transition-all duration-700 group-hover:bg-primary/10" />
        <h2 className="text-3xl font-heading font-bold mb-4 gradient-text">Skills Signal Engine</h2>
        <p className="text-text-muted mb-6">
          Describe what you do in your own words. Our AI will map your informal experience to global standards ({country.education.taxonomy}).
        </p>
        
        <textarea
          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 min-h-[120px] focus:outline-none focus:border-primary/50 transition-colors"
          placeholder="e.g., I run a phone repair shop in Accra and I've been learning how to build simple websites..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button
          onClick={handleMapSkills}
          disabled={isMapping || !input.trim()}
          className="btn-primary mt-6 w-full flex items-center justify-center gap-2"
        >
          {isMapping ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Mapping to {country.education.taxonomy}...
            </>
          ) : (
            'Generate Skills Passport'
          )}
        </button>
      </div>

      <div className={`card glass border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-fade-in relative overflow-hidden transition-opacity duration-500 ${skills.length > 0 && !isMapping ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 rounded-full" />
        
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white tracking-tight">Skills Passport</h3>
            <p className="text-xs text-text-muted font-medium tracking-widest uppercase mt-1">Verified via {country.laborMarket.dataSource}</p>
          </div>
          <div className="bg-primary/20 border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
            {country.id} CONTEXT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {skills.map((skill, i) => (
            <div key={i} className="bg-black/60 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-primary/40 transition-colors">
              <div>
                <div className="font-bold text-sm text-white group-hover:text-primary transition-colors">{skill.label}</div>
                <div className="text-[10px] text-text-muted font-mono mt-1 opacity-60">{skill.code}</div>
              </div>
              <div className={`text-[9px] px-2 py-0.5 rounded-md uppercase font-bold tracking-tighter ${
                skill.type === 'technical' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                skill.type === 'business' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
              }`}>
                {skill.type}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center group hover:border-success/50 transition-colors">
              <span className="text-[10px] text-success font-bold">15</span>
              <span className="text-[8px] text-text-muted uppercase font-bold tracking-tighter">VOUCHES</span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-tighter text-white/80">{mounted ? passportId : 'UNM-...'}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <p className="text-[9px] text-text-muted uppercase font-bold tracking-widest">Community Verified</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
              onClick={() => alert('Opening WhatsApp to share your Skills Passport with local employers...')}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <span>SHARE ON WHATSAPP</span>
            </button>
            <button 
              onClick={() => alert('Exporting high-resolution certificate for offline sharing...')}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all font-bold text-[10px] tracking-widest uppercase"
            >
              EXPORT PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
