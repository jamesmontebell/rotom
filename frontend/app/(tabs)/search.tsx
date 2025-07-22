import { useEffect, useMemo, useRef, useState } from "react";

import {
	Animated,
	FlatList,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";

import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";

import Main from "@/components/main/Main";
import PokemonSkeletonList from "@/components/search/PokemonSkeletonList";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { SearchedPokemonCard } from "@/components/pokemon-card/SeachedPokemonCard";
import { Text } from "@/components/main/Text";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { usePokemonCardApi } from "@/hooks/usePokemonCardApiHook";
import { useSearchedPokemonStore } from "@/components/search-bar/SearchBarStore";

export default function Search() {
	const { search } = useSearchedPokemonStore();
	const [isSearching, setIsSearching] = useState(false);
	const { fetchers } = usePokemonCardApi();

	const { data, isFetching, refetch, error } = useQuery({
		queryKey: ["pokemonCard", search],
		queryFn: () => fetchers.fetchByName(search),
		enabled: false,
		retry: 3,
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000),
	});

	const fadeInTextAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (!isSearching || isFetching) {
			fadeInTextAnim.setValue(0);
			Animated.timing(fadeInTextAnim, {
				toValue: 1,
				duration: 400,
				useNativeDriver: true,
			}).start();
		}
	}, [isSearching, isFetching]);

	// Memoize the debounced function so it doesn't get recreated on every render
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

	// Call the debounced function when `search` changes
	useEffect(() => {
		debouncedSearch(search);
		return () => {
			debouncedSearch.cancel(); // Clean up on unmount or when `search` changes
		};
	}, [search, debouncedSearch]);

	return (
		<Main>
			<SearchBar />
			{isFetching ? (
				<Animated.View style={{ opacity: fadeInTextAnim }}>
					<PokemonSkeletonList />
				</Animated.View>
			) : !isSearching ? (
				<Animated.View style={{ opacity: fadeInTextAnim }}>
					<Text>search screen content</Text>
				</Animated.View>
			) : error ? (
				<PokemonSkeletonList />
			) : (
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<FlatList
						style={searchListStyles.container}
						numColumns={2}
						data={data ?? []}
						columnWrapperStyle={{
							justifyContent: "space-between",
						}}
						renderItem={({ item }) => (
							<SearchedPokemonCard
								isFromSearch={true}
								image={item.images.large}
								title={item.name}
								cardSet={[
									`${item.set.name} ${item.number}/${item.set.total}`,
								]}
								rarity={item.rarity}
								qty={0}
								price={Math.max(
									item?.tcgplayer?.prices?.normal?.market ||
										0,
									item?.tcgplayer?.prices?.reverseHolofoil
										?.market || 0,
									item?.tcgplayer?.prices?.holofoil?.market ||
										0
								)}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</TouchableWithoutFeedback>
			)}
		</Main>
	);
}
