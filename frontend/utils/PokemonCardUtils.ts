import { PokemonTCG } from "@bosstop/pokemontcgapi";
import type { PokemonCardObject } from "../models/PokemonCard.js";

const key = process.env.EXPO_PUBLIC_POKEMON_API_KEY;
if (!key) {
	throw new Error("Missing key");
}

const api = new PokemonTCG(key);

export const fetchPokemonCardByName = async (name: string) => {
	const data = await api.cards.searchByName(name, "", "");
	const mappedData: PokemonCardObject[] = data.map((card: any) => ({
		id: card.id,
		name: card.name,
		supertype: card.supertype,
		subtypes: card.subtypes,
		hp: card.hp,
		types: card.types,
		evolvesTo: card.evolvesTo,
		attacks: card.attacks,
		weaknesses: card.weaknesses,
		set: card.set,
		number: card.number,
		artist: card.artist,
		rarity: card.rarity,
		flavorText: card.flavorText,
		nationalPokedexNumbers: card.nationalPokedexNumbers,
		legalities: card.legalities,
		regulationMark: card.regulationMark,
		images: card.images,
		tcgplayer: card.tcgplayer,
		cardmarket: card.cardmarket,
	}));

	return mappedData;
};
