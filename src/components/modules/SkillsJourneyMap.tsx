'use client';

import React, { useState, useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap, NodeProps, Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import { generateJourneyData } from '@/lib/config/journeyPaths';

const JourneyNode = ({ data }: NodeProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const riskColor = data.automationRisk < 0.2 ? 'text-success' : data.automationRisk < 0.4 ? 'text-yellow-500' : 'text-error';
  const riskBg = data.automationRisk < 0.2 ? 'bg-success/10' : data.automationRisk < 0.4 ? 'bg-yellow-500/10' : 'bg-error/10';

  return (
    <div className="relative group" onClick={() => setExpanded(!expanded)}>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className={`w-48 p-4 rounded-2xl glass border-2 transition-all duration-500 cursor-pointer ${expanded ? 'border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'border-white/10 hover:border-white/30'}`}
      >
        <Handle type="target" position={Position.Bottom} className="!opacity-0" />
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{data.icon}</span>
          <div className="flex flex-col">
            <span className="text-[10px] text-text-muted font-bold uppercase">{data.year}</span>
            <span className="font-bold text-xs truncate">{data.title}</span>
          </div>
        </div>
        
        <div className="text-sm font-bold text-success mb-1">
          {data.wage.currency} {data.wage.amount.toLocaleString()}
        </div>
        
        <div className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full inline-block ${riskBg} ${riskColor}`}>
          {(data.automationRisk * 100).toFixed(0)}% Risk
        </div>

        <Handle type="source" position={Position.Top} className="!opacity-0" />
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-72 z-50 card glass border-primary/30 p-6 shadow-2xl pointer-events-none"
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-white/10">
                <h3 className="font-bold text-lg">{data.title}</h3>
                <p className="text-xs text-text-muted italic">"{data.successStory.quote}"</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase text-primary mb-2">Pathway Steps</h4>
                {data.pathway.map((step: any, i: number) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[8px] font-bold">{i+1}</div>
                    <p className="text-[10px]">{step.action} ({step.duration})</p>
                  </div>
                ))}
              </div>

              {data.opportunities.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-success mb-2">Real Opportunities</h4>
                  {data.opportunities.map((opp: any, i: number) => (
                    <div key={i} className="p-2 bg-white/5 rounded-lg mb-1">
                      <p className="text-[10px] font-bold">{opp.title}</p>
                      <p className="text-[8px] text-text-muted">{opp.company}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0d0d0d] rotate-45 border-r border-b border-primary/30" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const nodeTypes = {
  start: JourneyNode,
  milestone: JourneyNode,
  destination: JourneyNode
};

export const SkillsJourneyMap = () => {
  const { country } = useAppContext();
  const journeyData = useMemo(() => generateJourneyData(country), [country]);

  return (
    <div className="w-full h-[700px] card glass !p-0 overflow-hidden relative border-primary/20">
      <div className="absolute top-6 left-6 z-10 space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">2026 → 2035 <span className="gradient-text">Future Map</span></h2>
        <p className="text-xs text-text-muted max-w-xs">
          Interactive pathways based on {country.name}&apos;s economic growth and automation exposure. Click nodes to explore milestones.
        </p>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
          <div className="w-3 h-3 rounded-full bg-blue-500" /> Tech Lead Track
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
          <div className="w-3 h-3 rounded-full bg-emerald-500" /> Entrepreneur Track
        </div>
      </div>

      <ReactFlow
        nodes={journeyData.nodes}
        edges={journeyData.edges}
        nodeTypes={nodeTypes}
        fitView
        className="bg-[#050505]"
        minZoom={0.5}
        maxZoom={1.5}
      >
        <Background color="#111" gap={20} size={1} />
        <Controls className="!bg-black/50 !border-white/10" />
      </ReactFlow>
    </div>
  );
};
