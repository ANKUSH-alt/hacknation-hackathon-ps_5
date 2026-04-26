'use client';

import React from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { Database, Link as LinkIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DataSourcesPage() {
  return (
    <PageTransition>
      <main className="flex-1 py-12 px-6 md:px-12 max-w-4xl mx-auto w-full space-y-12">
        <Link href="/" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Official <span className="gradient-text">Data Sources</span></h1>
          <p className="text-text-muted text-lg">
            UNMAPPED pulls from primary institutional datasets to ensure econometric accuracy.
          </p>
        </div>

        <div className="grid gap-6">
          <SourceItem 
            name="ILOSTAT (ILO)" 
            desc="Primary source for wage floors, employment growth, and labor force participation."
            url="https://ilostat.ilo.org/"
          />
          <SourceItem 
            name="World Bank WDI" 
            desc="World Development Indicators for secondary education rates and economic growth."
            url="https://databank.worldbank.org/source/world-development-indicators"
          />
          <SourceItem 
            name="Wittgenstein Centre" 
            desc="Human Capital projections to 2035 used for skill trajectory modeling."
            url="https://www.wittgensteincentre.org/"
          />
          <SourceItem 
            name="ITU Digital Database" 
            desc="Mobile and internet penetration data used for automation calibration."
            url="https://www.itu.int/en/ITU-D/Statistics/Pages/default.aspx"
          />
        </div>
      </main>
    </PageTransition>
  );
}

const SourceItem = ({ name, desc, url }: { name: string; desc: string; url: string }) => (
  <div className="card glass flex justify-between items-center group">
    <div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-text-muted max-w-md">{desc}</p>
    </div>
    <a href={url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-primary text-white transition-all">
      <LinkIcon size={18} />
    </a>
  </div>
);
