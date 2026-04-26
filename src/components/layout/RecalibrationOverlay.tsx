'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

export const RecalibrationOverlay = () => {
  const { isRecalibrating, country } = useAppContext();

  return (
    <AnimatePresence>
      {isRecalibrating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-xl flex items-center justify-center"
        >
          <div className="text-center space-y-8">
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-b-2 border-primary rounded-full blur-[2px]"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-primary/40 rounded-full blur-[4px]"
              />
            </div>
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-mono tracking-[0.3em] uppercase text-xs font-bold"
              >
                Recalibrating Infrastructure
              </motion.p>
              <p className="text-text-muted text-[10px] font-mono">Syncing {country.name} Labor Data...</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
