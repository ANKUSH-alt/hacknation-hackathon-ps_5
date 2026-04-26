'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Shield, CheckCircle } from 'lucide-react';
import { CountryConfig } from '@/lib/config';

interface SkillsPassportProps {
  profile: {
    id: string;
    skills: string[];
    vouchCount: number;
  };
  country: CountryConfig;
}

export const SkillsPassport = ({ profile, country }: SkillsPassportProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto bg-card border-2 border-primary/30 rounded-3xl overflow-hidden shadow-2xl relative"
    >
      {/* Decorative Stamp */}
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-primary/20 rounded-full flex items-center justify-center -rotate-12 pointer-events-none">
        <span className="text-[10px] font-bold text-primary/30 uppercase text-center">Infrastructure<br/>Verified<br/>2026</span>
      </div>

      {/* Header */}
      <div className="p-8 border-b border-border bg-white/[0.02]">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold gradient-text">SKILLS PASSPORT</h2>
            <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1">
              International Standard Classification (ISCO-08)
            </p>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-text-muted font-bold uppercase">Passport ID</div>
            <div className="text-xl font-mono font-bold text-primary">{country.id.toUpperCase()}-{profile.id}</div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-8 space-y-8">
        <div className="flex items-center gap-6 pb-8 border-b border-border">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h3 className="text-xl font-bold">Amara Mensah</h3>
            <p className="text-sm text-text-muted">{country.name} • Accra Regional District</p>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-0.5 bg-success/10 text-success text-[8px] font-bold rounded-full uppercase tracking-widest border border-success/20 flex items-center gap-1">
                <CheckCircle size={8} /> Verified Skills
              </span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                {profile.vouchCount} Community Vouches
              </span>
            </div>
          </div>
        </div>

        {/* Mapped Skills */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
            <Shield size={10} /> Validated Infrastructure Signals
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.skills.map((skill, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-border hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-sm">{skill}</span>
                  <span className="text-[8px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-text-muted">ISCO-7422</span>
                </div>
                <p className="text-[10px] text-text-muted">Standardized competency mapped for {country.economyType.toLowerCase()} markets.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Footnote */}
        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="flex gap-3">
            <div className="text-lg">🌍</div>
            <div>
              <p className="text-[10px] font-bold uppercase">Cross-Border Portability</p>
              <p className="text-[10px] text-text-muted">
                This profile is mapped to ILO standards. It is portable across all UNMAPPED-compatible infrastructure nodes globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-8 pt-0 flex flex-wrap gap-4">
        <button 
          onClick={() => alert('Exporting Official Skills Passport as PDF with ISCO-08 Verification...')}
          className="btn-primary flex items-center gap-2 !px-6"
        >
          <Download size={16} /> Export to PDF
        </button>
        <button 
          onClick={() => alert('Opening WhatsApp to share your verified credentials with local tech co-operatives...')}
          className="px-6 py-3 rounded-xl border border-border font-bold text-sm flex items-center gap-2 hover:bg-white/5 transition-colors text-text"
        >
          <Share2 size={16} /> Share via WhatsApp
        </button>
      </div>

      {/* Footer Branding */}
      <div className="p-4 text-center border-t border-border bg-white/[0.01]">
        <p className="text-[8px] text-text-muted font-bold uppercase tracking-tighter">
          Infrastructure for Economic Visibility • Powered by World Bank STEP Data
        </p>
      </div>
    </motion.div>
  );
};
