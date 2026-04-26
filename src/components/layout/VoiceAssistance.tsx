'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, MessageSquareText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VoiceAssistance = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const text = document.querySelector('main')?.innerText || 'Welcome to UNMAPPED. We help you map your skills to opportunity.';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for clarity
    
    utterance.onend = () => setIsPlaying(false);
    
    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-primary/90 text-white px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-2xl backdrop-blur-md border border-white/20"
          >
            Reading Page Aloud...
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={speak}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border-2 ${isPlaying ? 'bg-error border-white/20 text-white animate-pulse' : 'bg-primary border-white/20 text-white hover:scale-110'}`}
        title="Voice Assistance for Low-Literacy Access"
      >
        {isPlaying ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-[#0a0a0a]" />
    </div>
  );
};
