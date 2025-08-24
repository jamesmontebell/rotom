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

interface Set {
	id: string;
	name: string;
	series: string;
	printedTotal: number;
	total: number;
	legalities: {
		unlimited: string;
		standard: string;
		expanded: string;
	};
	releaseDate: string;
	updatedAt: string;
	images: {
		symbol: string;
		logo: string;
	};
}

interface Prices {
	normal: {
		low: number | null;
		mid: number;
		high: number;
		market: number;
		directLow: number | null;
	};
	reverseHolofoil: {
		low: number | null;
		mid: number;
		high: number;
		market: number;
		directLow: number | null;
	};
	holofoil: {
		low: number | null;
		mid: number;
		high: number;
		market: number;
		directLow: number | null;
	};
}

interface TcgPlayer {
	url: string;
	updatedAt: string;
	prices: Prices | null;
}

interface CardMarketPrices {
	averageSellPrice: number;
	lowPrice: number;
	trendPrice: number;
	germanProLow: number;
	suggestedPrice: number;
	reverseHoloSell: number;
	reverseHoloLow: number;
	reverseHoloTrend: number;
	lowPriceExPlus: number;
	avg1: number;
	avg7: number;
	avg30: number;
	reverseHoloAvg1: number;
	reverseHoloAvg7: number;
	reverseHoloAvg30: number;
}

interface CardMarket {
	url: string;
	updatedAt: string;
	prices: CardMarketPrices;
}

export interface PokemonCard {
	id: string;
	name: string;
	supertype: string;
	subtypes: string[];
	hp: string;
	types: string[];
	evolvesTo: string[];
	attacks: Attack[];
	weaknesses: Weakness[];
	set: Set;
	number: string;
	artist: string;
	rarity: string;
	flavorText: string;
	nationalPokedexNumbers: number[];
	legalities: {
		unlimited: string;
		standard: string;
		expanded: string;
	};
	regulationMark: string;
	images: {
		small: string;
		large: string;
	};
	tcgplayer: TcgPlayer;
	cardmarket: CardMarket;
}
