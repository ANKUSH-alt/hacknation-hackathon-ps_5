export interface CountryConfig {
  id: string;
  name: string;
  region: string;
  economyType: string;
  localization: {
    language: string;
    currency: string;
    currencySymbol: string;
    script: string;
  };
  laborMarket: {
    dataSource: string;
    wageIndices: string;
    sectorClassifications: string;
    signals: {
      averageWage: number;
      growthRate: number;
      informalSectorSize: string;
    };
    opportunities: Array<{
      title: string;
      type: string;
      company: string;
      wage: string;
      distance: string;
    }>;
  };
  education: {
    taxonomy: string;
    credentialMapping: Record<string, string>;
  };
  automation: {
    digitalPenetration: number;
    infrastructureContext: string;
    taskCompositionAdjustment: string;
  };
}

import { ghanaConfig } from './countries/ghana';
import { indiaConfig } from './countries/india';

export const countries: Record<string, CountryConfig> = {
  ghana: ghanaConfig,
  india: indiaConfig,
};

export const defaultCountry = 'ghana';
