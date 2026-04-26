'use context';
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CountryConfig, countries, defaultCountry } from '@/lib/config';

interface AppContextType {
  country: CountryConfig;
  setCountry: (id: string) => void;
  isLoading: boolean;
  isRecalibrating: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countryId, setCountryId] = useState(defaultCountry);
  const [isLoading, setIsLoading] = useState(true);
  const [isRecalibrating, setIsRecalibrating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const value = {
    country: countries[countryId] || countries[defaultCountry],
    setCountry: (id: string) => {
      setIsRecalibrating(true);
      setTimeout(() => {
        setCountryId(id);
        setTimeout(() => setIsRecalibrating(false), 800);
      }, 400);
    },
    isLoading,
    isRecalibrating,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
