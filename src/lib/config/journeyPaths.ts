import { CountryConfig } from './index';

export interface JourneyNodeData {
  id: string;
  type: 'start' | 'milestone' | 'destination';
  year: number;
  title: string;
  icon: string;
  wage: {
    amount: number;
    currency: string;
  };
  automationRisk: number;
  requiredSkills: Array<{ name: string; current: boolean }>;
  pathway: Array<{ action: string; duration: string; cost: number }>;
  opportunities: Array<{ title: string; company: string; distance: number; whatsapp: string }>;
  successStory: { name: string; age: number; quote: string; timeframe: string };
  position: { x: number; y: number };
}

export const generateJourneyData = (country: CountryConfig) => {
  const currency = country.localization.currency;
  const multiplier = country.id === 'india' ? 15 : 1; // Basic wage scaling for demo purposes

  return {
    nodes: [
      {
        id: 'current',
        type: 'start',
        data: {
          year: 2026,
          title: 'Amara (Today)',
          icon: '🔧',
          wage: { amount: 1000 * multiplier, currency },
          automationRisk: 0.42,
          requiredSkills: [{ name: 'Manual Repair', current: true }, { name: 'Basic Coding', current: true }],
          pathway: [],
          opportunities: [],
          successStory: { name: 'Amara', age: 22, quote: 'I have the skills. Now I see the path.', timeframe: 'Starting today' }
        },
        position: { x: 400, y: 600 }
      },
      // Path 1: Tech Lead Track
      {
        id: 'path1-2030',
        type: 'milestone',
        data: {
          year: 2030,
          title: 'Full Stack Dev',
          icon: '💻',
          wage: { amount: 18000 * multiplier, currency },
          automationRisk: 0.14,
          requiredSkills: [{ name: 'React Native', current: false }, { name: 'Node.js', current: false }],
          pathway: [{ action: 'Complete Open-Source Bootcamp', duration: '12 weeks', cost: 0 }],
          opportunities: [{ title: 'Junior Dev', company: 'TechHub', distance: 3.2, whatsapp: '233501234567' }],
          successStory: { name: 'Kwame', age: 26, quote: 'Infrastructure opened the door.', timeframe: '2 years' }
        },
        position: { x: 150, y: 350 }
      },
      {
        id: 'path1-2035',
        type: 'destination',
        data: {
          year: 2035,
          title: 'Senior Tech Lead',
          icon: '🏢',
          wage: { amount: 45000 * multiplier, currency },
          automationRisk: 0.08,
          requiredSkills: [{ name: 'System Design', current: false }, { name: 'Leadership', current: false }],
          pathway: [{ action: 'Lead 3+ Regional Projects', duration: '3 years', cost: 0 }],
          opportunities: [{ title: 'CTO', company: 'Fintech Startup', distance: 12, whatsapp: '233501111111' }],
          successStory: { name: 'Ama', age: 31, quote: 'I lead a team of 50 now.', timeframe: '9 years' }
        },
        position: { x: 150, y: 100 }
      },
      // Path 2: Entrepreneur Track
      {
        id: 'path2-2030',
        type: 'milestone',
        data: {
          year: 2030,
          title: 'Shop Owner',
          icon: '🚀',
          wage: { amount: 12000 * multiplier, currency },
          automationRisk: 0.35,
          requiredSkills: [{ name: 'Management', current: false }, { name: 'Scaling', current: false }],
          pathway: [{ action: 'Secure Micro-loan', duration: '6 months', cost: 500 * multiplier }],
          opportunities: [{ title: 'Business Partner', company: 'Co-op', distance: 0.5, whatsapp: '233502222222' }],
          successStory: { name: 'Kofi', age: 28, quote: 'Scaling is about people.', timeframe: '4 years' }
        },
        position: { x: 650, y: 350 }
      },
      {
        id: 'path2-2035',
        type: 'destination',
        data: {
          year: 2035,
          title: 'Regional Enterprise',
          icon: '🌍',
          wage: { amount: 80000 * multiplier, currency },
          automationRisk: 0.28,
          requiredSkills: [{ name: 'Strategic Planning', current: false }, { name: 'Operations', current: false }],
          pathway: [{ action: 'Franchise Model Rollout', duration: '2 years', cost: 5000 * multiplier }],
          opportunities: [{ title: 'CEO', company: 'Amara Repairs Ltd', distance: 0, whatsapp: 'self' }],
          successStory: { name: 'Akua', age: 33, quote: 'We serve 3 regions now.', timeframe: '11 years' }
        },
        position: { x: 650, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-1', source: 'current', target: 'path1-2030', animated: true, style: { stroke: '#3b82f6', strokeWidth: 3 } },
      { id: 'e1-2', source: 'path1-2030', target: 'path1-2035', animated: true, style: { stroke: '#3b82f6', strokeWidth: 3 } },
      { id: 'e2-1', source: 'current', target: 'path2-2030', animated: true, style: { stroke: '#10b981', strokeWidth: 3 } },
      { id: 'e2-2', source: 'path2-2030', target: 'path2-2035', animated: true, style: { stroke: '#10b981', strokeWidth: 3 } }
    ]
  };
};
