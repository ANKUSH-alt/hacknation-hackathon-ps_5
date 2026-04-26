import { CountryConfig } from '../index';

export const indiaConfig: CountryConfig = {
  id: 'india',
  name: 'India',
  region: 'South Asia',
  economyType: 'Rural agricultural',
  localization: {
    language: 'hi-IN',
    currency: 'INR',
    currencySymbol: '₹',
    script: 'Devanagari',
  },
  laborMarket: {
    dataSource: 'ILO ILOSTAT India 2024',
    wageIndices: 'Ministry of Statistics',
    sectorClassifications: 'NIC 2008',
    signals: {
      averageWage: 15000,
      growthRate: 6.2,
      informalSectorSize: '90%',
    },
  },
  education: {
    taxonomy: 'ISCED 2011',
    credentialMapping: {
      SSLC: 'ISCED Level 2',
      ITI: 'ISCED Level 3',
    },
  },
  automation: {
    digitalPenetration: 0.48,
    infrastructureContext: 'intermittent_connectivity',
    taskCompositionAdjustment: 'agricultural_cognitive',
  },
};
