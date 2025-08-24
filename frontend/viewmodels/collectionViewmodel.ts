// src/viewmodels/useCollectionsViewModel.ts
import { useEffect, useMemo, useState, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getCollections, insertCollection } from "@/services/db";
import { PokemonCardCollection } from "@/models/pokemonCardCollection";

export function collectionViewModel() {
	const qc = useQueryClient();
	const [isNewCollection, setIsNewCollection] = useState(false);

	const {
		data: collections = [],
		isFetching,
		error,
		refetch,
	} = useQuery({
		queryKey: ["collections"],
		queryFn: getCollections,
		gcTime: Infinity,
		staleTime: Infinity,
	});

	useEffect(() => {
		if (isNewCollection) {
			refetch();
			setIsNewCollection(false);
		}
	}, [isNewCollection, refetch]);

	const staticCollections: PokemonCardCollection[] = useMemo(
		() => [
			{ id: -1, name: "Watchlist", emoji: "👀" },
			{ id: -2, name: "New Collection", emoji: "➕" },
		],
		[]
	);

	const flatListData = useMemo(
		() => [...staticCollections, ...collections],
		[staticCollections, collections]
	);

	const refreshCollections = useCallback(async () => {
		await qc.invalidateQueries({ queryKey: ["collections"] });
		// Optionally await a refetch immediately:
		await refetch();
	}, [qc, refetch]);

	const handleAddNewCollection = useCallback(async () => {
		await insertCollection("test", "test");
		await refreshCollections();
	}, [refreshCollections]);

	return {
		flatListData,
		isFetching,
		error,
		refreshCollections,
		handleAddNewCollection,
	};
}
