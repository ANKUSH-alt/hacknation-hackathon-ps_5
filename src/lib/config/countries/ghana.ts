import { CountryConfig } from '../index';

export const ghanaConfig: CountryConfig = {
  id: 'ghana',
  name: 'Ghana',
  region: 'Sub-Saharan Africa',
  economyType: 'Urban informal',
  localization: {
    language: 'en-GH',
    currency: 'GHS',
    currencySymbol: 'GH₵',
    script: 'Latin',
  },
  laborMarket: {
    dataSource: 'ILO ILOSTAT Ghana 2024',
    wageIndices: 'Ghana Statistical Service',
    sectorClassifications: 'ISIC Rev.4',
    signals: {
      averageWage: 1200,
      growthRate: 4.5,
      informalSectorSize: '85%',
      techSectorGrowth: 18.2,
      skillsPremium: 35,
      digitalPenetration: 43,
    },
    opportunities: [
      { title: 'Mobile Repair Technician', type: 'Formal Employment', company: 'TechSolutions Accra', wage: '1200 - 1500 GHS', distance: '3.2km' },
      { title: 'Junior Web Developer', type: 'Apprenticeship', company: 'Digital Ghana Hub', wage: '800 - 1000 GHS', distance: '5.1km' },
      { title: 'Customer Support Lead', type: 'Gig Work', company: 'RemoteGlobal', wage: '15 GHS / hr', distance: 'Remote' },
    ],
  },
  education: {
    taxonomy: 'ISCED 2011',
    credentialMapping: {
      WASSCE: 'ISCED Level 3',
      HND: 'ISCED Level 5',
    },
  },
  automation: {
    digitalPenetration: 0.43,
    infrastructureContext: 'low_bandwidth',
    taskCompositionAdjustment: 'manual_intensive',
  },
};
