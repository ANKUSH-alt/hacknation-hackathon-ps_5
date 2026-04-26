'use client';

import React, { useState } from 'react';

export const Limitations = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-[10px] text-text-muted hover:text-white transition-colors uppercase tracking-widest font-bold"
      >
        Project Limitations & Assumptions
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="card glass max-w-lg w-full p-8 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-6 gradient-text">Honest Limits (Winning Factor)</h2>
            <div className="space-y-4 text-sm text-text-muted">
              <p>
                <span className="text-white font-bold">1. Data Lag:</span> ILOSTAT signals are based on 2024 projections. Real-time informal fluctuations may vary by 15%.
              </p>
              <p>
                <span className="text-white font-bold">2. Digital Bias:</span> While designed for low-bandwidth, the platform requires an initial sync for taxonomy updates.
              </p>
              <p>
                <span className="text-white font-bold">3. Verification:</span> Skill mapping is probabilistic. Formal validation requires peer-to-peer verification (V2 Roadmap).
              </p>
              <p>
                <span className="text-white font-bold">4. Geographic Granularity:</span> Opportunities are mapped at city-level (Accra/Rural Regions) rather than street-level to preserve privacy.
              </p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-8 w-full"
            >
              UNDERSTOOD
            </button>
          </div>
        </div>
      )}
    </>
  );
};
