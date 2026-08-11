// Sudan-focused variant - sudan.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';

// Re-export base config
export * from './base';

// Re-export news/intel/africa-relevant sub-configs (subset of full.ts)
export * from '../feeds';
export * from '../geo';
export * from '../entities';

// Panel configuration for Sudan-focused intelligence
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Map', enabled: true, priority: 1 },
  'live-news': { name: 'Live News', enabled: true, priority: 1 },
  intel: { name: 'Intel Feed', enabled: true, priority: 1 },
  'gdelt-intel': { name: 'Live Intelligence', enabled: true, priority: 1 },
  cii: { name: 'Country Instability', enabled: true, priority: 1 },
  africa: { name: 'Africa', enabled: true, priority: 1 },
  'strategic-risk': { name: 'Strategic Risk Overview', enabled: true, priority: 1 },
  cascade: { name: 'Infrastructure Cascade', enabled: true, priority: 1 },
  politics: { name: 'World News', enabled: true, priority: 1 },
  us: { name: 'United States', enabled: false, priority: 3 },
  europe: { name: 'Europe', enabled: false, priority: 3 },
  middleeast: { name: 'Middle East', enabled: false, priority: 3 },
  latam: { name: 'Latin America', enabled: false, priority: 3 },
  asia: { name: 'Asia-Pacific', enabled: false, priority: 3 },
  energy: { name: 'Energy & Resources', enabled: false, priority: 3 },
  gov: { name: 'Government', enabled: false, priority: 3 },
  thinktanks: { name: 'Think Tanks', enabled: false, priority: 3 },
  polymarket: { name: 'Predictions', enabled: false, priority: 3 },
  commodities: { name: 'Commodities', enabled: false, priority: 3 },
  markets: { name: 'Markets', enabled: false, priority: 3 },
  'stock-analysis': { name: 'Stock Analysis', enabled: false, priority: 3 },
  'stock-backtest': { name: 'Backtesting', enabled: false, priority: 3 },
  'daily-market-brief': { name: 'Daily Market Brief', enabled: false, priority: 3 },
  economic: { name: 'Economic Indicators', enabled: false, priority: 3 },
  finance: { name: 'Financial', enabled: false, priority: 3 },
  tech: { name: 'Technology', enabled: false, priority: 3 },
  crypto: { name: 'Crypto', enabled: false, priority: 3 },
  heatmap: { name: 'Sector Heatmap', enabled: false, priority: 3 },
  ai: { name: 'AI/ML', enabled: false, priority: 3 },
  layoffs: { name: 'Layoffs Tracker', enabled: false, priority: 3 },
  'macro-signals': { name: 'Market Radar', enabled: false, priority: 3 },
  'etf-flows': { name: 'BTC ETF Tracker', enabled: false, priority: 3 },
  stablecoins: { name: 'Stablecoins', enabled: false, priority: 3 },
  monitors: { name: 'My Monitors', enabled: false, priority: 3 },
};

// Map layers for Sudan view — all MapLayers keys present (mirrors full.ts),
// Sudan-relevant on, rest off. User can toggle any layer in-app.
export const DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,
  satellites: false,
  conflicts: true,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: true,
  ais: false,
  nuclear: true,
  irradiators: false,
  sanctions: true,
  weather: true,
  economic: false,
  waterways: true,
  outages: true,
  cyberThreats: false,
  datacenters: false,
  protests: true,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: true,
  ucdpEvents: true,
  displacement: true,
  climate: false,
  // Tech layers (off for Sudan)
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  // Finance layers (off for Sudan)
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  // Happy variant layers (off for Sudan)
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  iranAttacks: false,
  ciiChoropleth: true,
  resilienceScore: false,
  dayNight: false,
  // Commodity variant layers (off for Sudan)
  miningSites: false,
  processingPlants: false,
  commodityPorts: false,
  webcams: false,
  diseaseOutbreaks: true,
};