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
    },
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
