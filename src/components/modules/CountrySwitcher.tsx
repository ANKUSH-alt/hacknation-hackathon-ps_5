'use client';

import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { countries } from '@/lib/config';

export const CountrySwitcher = () => {
  const { country, setCountry, isLoading } = useAppContext();

  return (
    <div className="flex items-center gap-4 bg-black/40 border border-white/10 p-2 rounded-2xl glass">
      {Object.values(countries).map((c) => (
        <button
          key={c.id}
          onClick={() => setCountry(c.id)}
          disabled={isLoading}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
            country.id === c.id 
              ? 'bg-white/10 text-white shadow-lg border border-white/10' 
              : 'text-text-muted hover:text-white hover:bg-white/5'
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
};
