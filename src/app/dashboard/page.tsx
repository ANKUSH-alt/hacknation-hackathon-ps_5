'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { PageTransition } from '@/components/layout/PageTransition';
import { motion } from 'framer-motion';
import { Users, Target, Activity, BarChart3, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
  const { country } = useAppContext();

  return (
    <PageTransition>
      <div className="flex-1 py-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <BarChart3 size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Institutional Intelligence</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Policymaker <span className="gradient-text">Signals</span></h1>
            <p className="text-text-muted text-lg">
              Aggregate labor market intelligence for {country.name}.
            </p>
          </div>
          <div className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-xl text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Live: {country.laborMarket.dataSource}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            label="Youth Reach (Target)" 
            value="12,500" 
            sub="↑ 12% MoM" 
            icon={<Users className="text-primary" size={20} />}
            trend="success"
          />
          <StatCard 
            label="Skills Gaps Identified" 
            value="42" 
            sub="Across 8 sectors" 
            icon={<Target className="text-blue-400" size={20} />}
          />
          <StatCard 
            label="Automation Sensitivity" 
            value={country.automation.digitalPenetration.toFixed(2)} 
            sub="Infrastructure Limit" 
            icon={<Activity className="text-purple-400" size={20} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 card glass relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full -mr-16 -mt-16" />
            <h3 className="font-bold mb-8 text-xl flex items-center gap-2">
              <Activity size={20} className="text-primary" />
              Skills Distribution
            </h3>
            <div className="space-y-6">
              <ProgressBar label="Technical Repair" value={65} color="from-primary to-orange-500" glow="shadow-primary/20" />
              <ProgressBar label="Digital Services" value={42} color="from-blue-500 to-cyan-400" glow="shadow-blue-500/20" />
              <ProgressBar label="Agricultural Logistics" value={28} color="from-green-500 to-emerald-400" glow="shadow-green-500/20" />
              <ProgressBar label="Hospitality" value={15} color="from-purple-500 to-pink-500" glow="shadow-purple-500/20" />
            </div>
          </div>

          <div className="lg:col-span-3 card glass relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <TrendingUp size={20} className="text-success" />
                Economic Impact Forecast
              </h3>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-[10px] font-bold uppercase outline-none">
                <option>2026 - 2035</option>
                <option>Q1 2026</option>
              </select>
            </div>
            
            <div className="h-[200px] relative flex items-end gap-3 px-2 mb-8 group/chart">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-0.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="w-full border-t border-white/5" />
                ))}
              </div>

              {/* Bars */}
              {[40, 65, 45, 80, 55, 95, 75].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-primary/10 via-primary/30 to-primary/60 rounded-t-lg transition-all duration-500 hover:to-primary relative group/bar cursor-help shadow-[0_-4px_20px_-10px_rgba(59,130,246,0.5)]" 
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-xl translate-y-2 group-hover/bar:translate-y-0">
                    {h}%
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <MiniStat 
                label="Youth Skill Gaps" 
                value="24%" 
                icon={<AlertTriangle size={12} className="text-error" />} 
                refText="World Bank WDI" 
                color="text-error"
              />
              <MiniStat 
                label="AI Exposure" 
                value="0.68" 
                icon={<Activity size={12} className="text-primary" />} 
                refText="Frey-Osborne" 
                color="text-primary"
              />
              <MiniStat 
                label="Matched Jobs" 
                value="8.4k" 
                icon={<CheckCircle2 size={12} className="text-success" />} 
                refText="Matching Signal" 
                color="text-success"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

const StatCard = ({ label, value, sub, icon, trend }: { label: string; value: string; sub: string; icon: React.ReactNode; trend?: string }) => (
  <div className="card glass relative overflow-hidden group hover:border-primary/30 transition-all">
    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <p className="text-[10px] text-text-muted uppercase font-bold mb-1 tracking-widest">{label}</p>
    <p className="text-3xl font-bold">{value}</p>
    <p className={`text-[10px] font-bold mt-2 flex items-center gap-1 ${trend === 'success' ? 'text-success' : 'text-text-muted'}`}>
      {sub}
    </p>
  </div>
);

const MiniStat = ({ label, value, icon, refText, color }: { label: string; value: string; icon: React.ReactNode; refText: string; color: string }) => (
  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
    <div className="mb-1">{icon}</div>
    <p className="text-[8px] text-text-muted uppercase font-bold tracking-tighter mb-1">{label}</p>
    <p className={`text-xl font-bold ${color}`}>{value}</p>
    <p className="text-[6px] text-text-muted/50 uppercase mt-1 tracking-tighter">{refText}</p>
  </div>
);

const ProgressBar = ({ label, value, color, glow }: { label: string; value: number; color: string; glow: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
      <span className="text-text font-bold uppercase">{label}</span>
      <span className="font-mono text-primary">{value}%</span>
    </div>
    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg ${glow}`} 
      />
    </div>
  </div>
);
