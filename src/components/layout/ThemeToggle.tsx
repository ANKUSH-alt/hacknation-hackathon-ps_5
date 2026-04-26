'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-9 h-9 rounded-xl glass flex items-center justify-center text-text-muted hover:text-primary transition-colors border border-white/5"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="animate-in fade-in zoom-in duration-500" />
      ) : (
        <Moon size={18} className="animate-in fade-in zoom-in duration-500" />
      )}
      
      <div className="absolute inset-0 bg-primary/5 rounded-xl blur-md opacity-0 hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}
