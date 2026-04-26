'use client';

import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, CloudSync } from 'lucide-react';

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-500 shadow-lg ${isOnline ? 'bg-success/10 border-success/30 text-success' : 'bg-error/10 border-error/30 text-error'}`}>
      {isOnline ? (
        <>
          <Wifi size={10} className="animate-pulse" />
          Infrastructure Online
          <div className="w-[1px] h-3 bg-success/30 mx-1" />
          <CloudSync size={10} />
          Synced
        </>
      ) : (
        <>
          <WifiOff size={10} />
          Offline Mode • Local Cache Active
        </>
      )}
    </div>
  );
};
