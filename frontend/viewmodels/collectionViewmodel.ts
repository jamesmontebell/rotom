import { useEffect, useMemo, useState, useCallback } from "react";

import { useFocusEffect, useRouter } from "expo-router";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { PokemonCardCollection } from "@/models/pokemonCardCollection";
import { getCollections, insertCollection } from "@/services/db";

export function collectionViewModel() {
	const qc = useQueryClient();
	const router = useRouter();

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
		await refetch();
	}, [qc, refetch]);

	const handleAddNewCollection = useCallback(() => {
		router.push("/collectionModal");
	}, [router]);

	// 🔑 Refresh collections whenever screen is focused
	useFocusEffect(
		useCallback(() => {
			refreshCollections();
		}, [refreshCollections])
	);

	return {
		flatListData,
		isFetching,
		error,
		refreshCollections,
		handleAddNewCollection,
	};
}
