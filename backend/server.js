import express, { json } from "express";
import dotenv from "dotenv";
import { PokemonTCG } from "@bosstop/pokemontcgapi";

dotenv.config();
const key = process.env.EXPO_PUBLIC_POKEMON_API_KEY;
if (!key) {
	throw new Error("Missing key");
}
const api = new PokemonTCG(key);

const app = express();
const PORT = process.env.PORT || 3000;

const fetchPokemonCardByName = async (name) => {
	try {
		const data = await api.cards.searchByName(name);

		const mappedData = data.map((card) => ({
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
	} catch (error) {
		console.error("Error fetching cards:", error);
		return error;
	}
};

app.use(json());

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.get("/api/cards/search", async (req, res) => {
	const { name, set } = req.query;

	try {
		let cards = [];

		if (name) {
			cards = await fetchPokemonCardByName(name.toString());
		} else if (set) {
			cards = await fetchPokemonCardsBySet(set.toString());
		} else {
			return res.status(400).json({
				error: "Missing 'name' or 'set' query param",
			});
		}

		res.json(cards);
		console.log(cards[0].id);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch cards" });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
