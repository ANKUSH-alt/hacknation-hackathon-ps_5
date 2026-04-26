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
    opportunities: [
      { title: 'Agri-Tech Field Officer', type: 'Formal Employment', company: 'Bharat Agri', wage: '18000 - 22000 INR', distance: '12km' },
      { title: 'Solar Pump Technician', type: 'Training Program', company: 'Skill India', wage: 'Stipend: 5000 INR', distance: '4km' },
      { title: 'Rural Fintech Agent', type: 'Self-employment', company: 'PayVillage', wage: 'Commission based', distance: 'Local' },
    ],
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
