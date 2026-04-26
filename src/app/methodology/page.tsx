'use client';

import React from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { FileText, Shield, Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <PageTransition>
      <main className="flex-1 py-12 px-6 md:px-12 max-w-4xl mx-auto w-full space-y-12">
        <Link href="/" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Technical <span className="gradient-text">Methodology</span></h1>
          <p className="text-text-muted text-lg">
            How UNMAPPED calibrates global econometric signals for local infrastructure.
          </p>
        </div>

        <div className="grid gap-8">
          <section className="card glass space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Shield size={24} />
              <h2 className="text-xl font-bold">Automation Calibration</h2>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              We apply an Infrastructure Adjustment Factor (IAF) to Frey-Osborne scores. Logic: Automation is delayed by "Infrastructure Friction" (bandwidth, power, hardware costs) in LMICs.
            </p>
            <div className="p-4 bg-black/20 rounded-xl font-mono text-xs text-primary">
              Adjusted Risk = Base Probability + (Digital Penetration × Infrastructure Maturity)
            </div>
          </section>

          <section className="card glass space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Database size={24} />
              <h2 className="text-xl font-bold">Wage Indexing</h2>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Derived from ILOSTAT 2024 reports, adjusted for Purchasing Power Parity (PPP) and Informal Sector Multipliers from World Bank Enterprise Surveys.
            </p>
          </section>

          <section className="card glass space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <FileText size={24} />
              <h2 className="text-xl font-bold">Taxonomy Cross-walk</h2>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              We map informal experience using a multi-standard bridge between ISCO-08 (ILO), ESCO (EU), and ISCED 2011 (UNESCO).
            </p>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
