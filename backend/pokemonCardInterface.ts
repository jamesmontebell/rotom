// Refactored PokemonCard interface for Pokemon Price Tracker API
// This replaces the old interface to work with the new API data structure

interface Attack {
	name: string;
	cost: string[];
	convertedEnergyCost: number;
	damage: string;
	text: string;
}

interface Weakness {
	type: string;
	value: string;
}

interface Resistance {
	type: string;
	value: string | null;
}

interface Set {
	id: string;
	name: string;
	series: string | null;
	printedTotal: number | null;
	total: number | null;
	legalities: {
		unlimited: string;
		standard: string;
		expanded: string;
	} | null;
	releaseDate: string | null;
	updatedAt: string | null;
	images: {
		symbol: string;
		logo: string;
	} | null;
}

// New pricing structure from Pokemon Price Tracker API
interface ConditionPrices {
	price: number;
	listings: number;
	priceString: string;
	lastUpdated: string;
	dataPoints?: number;
	historyPoints?: number;
}

interface Pricing {
	market: number;
	listings: number;
	primaryCondition: string;
	conditions: {
		[key: string]: ConditionPrices;
	};
	lastUpdated: string;
	priceWasCorrected: boolean;
}

// eBay sales data structure
interface EbaySalesData {
	count: number;
	totalValue: number;
	averagePrice: number;
	medianPrice: number;
	minPrice: number;
	maxPrice: number;
	marketPrice7Day: number;
	marketPriceMedian7Day: number;
	dailyVolume7Day: number;
	marketTrend: string;
	lastMarketUpdate: string;
	smartMarketPrice: {
		price: number;
		confidence: string;
		method: string;
		daysUsed: number;
	};
}

interface EbaySales {
	[key: string]: EbaySalesData; // e.g., "psa8", "psa9", "psa10"
}

// Price history structure
interface PriceHistory {
	conditions: any;
	conditions_tracked: string[];
	totalDataPoints: number;
	earliestDate: string;
	latestDate: string;
	lastUpdated: string;
	createdAt: string;
	updatedAt: string;
}

// Updated TCG Player structure
interface TcgPlayer {
	url: string;
	prices: Pricing;
}

// Updated Card Market structure (may be null in new API)
interface CardMarket {
	url: string | null;
	updatedAt: string | null;
	prices: any | null;
}

// NEW: Refactored PokemonCard interface for Pokemon Price Tracker API
export interface PokemonCard {
	// Core card data
	id: string;
	name: string;
	supertype: string;
	subtypes: string[];
	hp: number | null;
	types: string[];
	evolvesTo: string[];
	attacks: Attack[];
	weaknesses: Weakness[];
	resistance: Resistance[];
	retreatCost: number | null;

	// Set information
	set: Set;
	number: string;
	totalSetNumber: string;
	artist: string | null;
	rarity: string;
	stage: string | null;

	// Additional card data
	flavorText: string | null;
	nationalPokedexNumbers: number[];
	legalities: {
		unlimited: string;
		standard: string;
		expanded: string;
	} | null;
	regulationMark: string | null;

	// Images
	images: {
		small: string;
		large: string;
	};

	// Market data
	tcgplayer: TcgPlayer;
	cardmarket: CardMarket;

	// NEW: Enhanced pricing data from Pokemon Price Tracker API
	pricing: Pricing;

	// NEW: eBay sales data by PSA grade
	ebaySales: EbaySales | null;

	// NEW: Price history with trends
	priceHistory: PriceHistory | null;

	// NEW: Additional metadata
	tcgPlayerId: string;
	lastScrapedAt: string;
	dataCompleteness: number;
}

// API Response structures
export interface PokemonCardApiResponse {
	data: PokemonCard;
	metadata: {
		total: number;
		count: number;
		limit: number;
		offset: number;
		hasMore: boolean;
		includes: {
			priceHistory: boolean;
			ebayData: boolean;
		};
		historyWindow: {
			days: number;
			from: string;
			to: string;
		};
		planRestrictions: {
			message: string;
			limitedTo: string;
		};
	};
}

// For multiple cards response (set searches)
export interface PokemonCardsApiResponse {
	data: PokemonCard[];
	metadata: {
		total: number;
		count: number;
		limit: number;
		offset: number;
		hasMore: boolean;
		includes: {
			priceHistory: boolean;
			ebayData: boolean;
		};
		historyWindow: {
			days: number;
			from: string;
			to: string;
		};
		planRestrictions: {
			message: string;
			limitedTo: string;
		};
	};
}

// Utility types for easier access to specific data
export type CardPricing = PokemonCard["pricing"];
export type CardEbaySales = PokemonCard["ebaySales"];
export type CardPriceHistory = PokemonCard["priceHistory"];

// Example usage types
export interface CardSearchResult {
	cards: PokemonCard[];
	metadata: PokemonCardApiResponse["metadata"];
}

export interface CardSearchFilters {
	name?: string;
	set?: string;
	rarity?: string;
	cardType?: string;
	artist?: string;
	minPrice?: number;
	maxPrice?: number;
}
