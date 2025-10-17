// Simplified PokemonCard interface with only essential data

interface Set {
	id: string;
	name: string;
}

interface ConditionPrices {
	price: number;
	listings: number;
	priceString: string;
	lastUpdated: string;
	dataPoints?: number;
	historyPoints?: number;
}

interface TcgPlayerPricing {
	market: number;
	listings: number;
	primaryCondition: string;
	conditions: {
		[key: string]: ConditionPrices;
	};
	lastUpdated: string;
	priceWasCorrected: boolean;
}

interface TcgPlayer {
	url: string;
	prices: TcgPlayerPricing;
}

// Simplified PokemonCard interface matching the actual API response
export interface PokemonCard {
	id: string;
	name: string;
	set: Set;
	number: string;
	totalSetNumber: string;
	rarity: string;
	images: string;
	tcgplayer: TcgPlayer;
	pricing: {
		conditions: {
			[key: string]: ConditionPrices;
		};
		lastUpdated: string;
	};
	tcgPlayerId: string;
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
	};
}

// Utility types for easier access to specific data
export type CardPricing = PokemonCard["pricing"];

// Example usage types
export interface CardSearchResult {
	cards: PokemonCard[];
	metadata: PokemonCardApiResponse["metadata"];
}

export interface CardSearchFilters {
	name?: string;
	set?: string;
	rarity?: string;
	minPrice?: number;
	maxPrice?: number;
}
