import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const fetchPokemonCardByName = async (name) => {
	try {
		// Use the new Pokemon Price Tracker API to search by name
		const response = await fetch(
			`https://www.pokemonpricetracker.com/api/v2/cards?search=${encodeURIComponent(
				name
			)}&limit=1`,
			{
				headers: {
					Authorization:
						"Bearer " +
						process.env
							.POKEMON_PRICE_TRACKER_API_KEY,
				},
			}
		);

		if (!response.ok) {
			const errorText = await response.text();
			console.error(
				`API Error: ${response.status} - ${errorText}`
			);
			throw new Error(
				`HTTP error! status: ${response.status} - ${errorText}`
			);
		}

		const data = await response.json();

		// Map the new API response to match the expected structure
		const card = data.data[0]; // Get the first card from the array
		const mappedData = {
			id: card.id,
			name: card.name,
			set: {
				id: card.setId,
				name: card.setName,
			},
			number: card.cardNumber,
			totalSetNumber: card.totalSetNumber,
			rarity: card.rarity,
			images: card.imageUrl,
			tcgplayer: {
				url: card.tcgPlayerUrl,
				prices: card.prices,
			},
			pricing: {
				conditions: card.prices.conditions,
				lastUpdated: card.prices.lastUpdated,
			},
			tcgPlayerId: card.tcgPlayerId,
		};
		console.log(mappedData);
		console.log(mappedData.tcgplayer.prices.conditions);
		return [mappedData]; // Return as array to match original format
	} catch (error) {
		console.error("Error fetching cards:", error);
		return [];
	}
};

app.use(json());

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.get("/api/cards/search", async (req, res) => {
	const { name } = req.query;

	try {
		if (!name) {
			return res.status(400).json({
				error: "Missing 'name' query param",
			});
		}

		const cards = await fetchPokemonCardByName(name.toString());
		res.json(cards);

		if (cards.length > 0) {
			console.log(cards[0].id);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch cards" });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
