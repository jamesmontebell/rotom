import { PokemonCardObject } from "@/models/PokemonCard";
import { useState } from "react";
import { Alert } from "react-native";

const API_BASE_URL = "http://localhost:3000"; // replace with your backend IP

export function usePokemonCardApi() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [cards, setCards] = useState<PokemonCardObject[]>([]);

	// Helper to delay for ms milliseconds
	const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

	const fetchCards = async (
		endpoint: string
	): Promise<PokemonCardObject[]> => {
		try {
			setLoading(true);
			setError(null);

			const MIN_DELAY_MS = 1200; // adjust delay here
			const startTime = Date.now();

			const response = await fetch(
				`${API_BASE_URL}${endpoint}`
			);
			if (!response.ok)
				throw new Error("Failed to fetch cards");

			const data: PokemonCardObject[] = await response.json();

			// Calculate elapsed time and wait if needed
			const elapsed = Date.now() - startTime;
			if (elapsed < MIN_DELAY_MS) {
				await delay(MIN_DELAY_MS - elapsed);
			}

			setCards(data);
			return data; // <-- return the fetched data!
		} catch (err: any) {
			console.error(err);
			setError(err.message || "Unknown error");
			Alert.alert(
				"Error",
				err.message || "Something went wrong"
			);
			return []; // <-- return empty array on error
		} finally {
			setLoading(false);
		}
	};

	const fetchers = {
		fetchByName: (name: string) =>
			fetchCards(
				`/api/cards/search?name=${encodeURIComponent(
					name
				)}`
			),

		fetchBySet: (setId: string) =>
			fetchCards(
				`/api/cards/search?set=${encodeURIComponent(
					setId
				)}`
			),

		// add more fetchers here
	};

	return {
		cards,
		loading,
		error,
		fetchers,
	};
}
