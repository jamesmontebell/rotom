import { useCallback, useEffect, useMemo, useState } from "react";

import { useRouter } from "expo-router";

import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";

import { usePokemonCardApi } from "@/services/pokemonCardApi";
import { useSearchBarStore } from "@/stores/searchBarStore";

export function searchViewModel() {
	const { search, setSearch } = useSearchBarStore();
	const [isSearching, setIsSearching] = useState(false);
	const { fetchers } = usePokemonCardApi();
	const router = useRouter();

	const { data, isFetching, refetch, error } = useQuery({
		queryKey: ["pokemonCard", search],
		queryFn: () => fetchers.fetchByName(search),
		enabled: false,
		retry: 3,
		retryDelay: (attemptIndex) =>
			Math.min(1000 * 2 ** attemptIndex, 3000),
	});

	const debouncedSearch = useMemo(
		() =>
			debounce((value: string) => {
				if (value.trim() !== "") {
					refetch();
					setIsSearching(true);
				} else {
					setIsSearching(false);
				}
			}, 500),
		[refetch]
	);

	useEffect(() => {
		debouncedSearch(search);
		return () => debouncedSearch.cancel();
	}, [search, debouncedSearch]);

	const handleSearchedPokemonCardClick = useCallback(
		(card: any) => {
			router.push({
				pathname: "/searchedPokemonCardModal",
				params: {
					cardName: card.name,
					cardImage: card.images,
					cardSet: card.set.name,
					cardNumber: card.number,
					cardRarity: card.rarity,
					cardId: card.id,
					// Stringify complex objects
					cardPricing: JSON.stringify(
						card.tcgplayer?.prices || {}
					),
				},
			});
		},
		[router]
	);

	return {
		search,
		setSearch,
		data: data ? Array(10).fill(data).flat() : data,
		isFetching,
		isSearching,
		handleSearchedPokemonCardClick,
		error,
	};
}
