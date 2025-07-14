import { useEffect, useState } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useQuery } from "@tanstack/react-query";
import Main from "@/components/main/Main";
import { Loading } from "@/components/search-bar/Loading";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { SearchedPokemonCard } from "@/components/pokemon-card/SeachedPokemonCard";
import { Text } from "@/components/main/Text";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { useSearchedPokemonStore } from "@/components/search-bar/SearchBarStore";
import { usePokemonCardApi } from "@/hooks/usePokemonCardApiHook";
import { SkeletonSearchedPokemonCard } from "@/components/search/PokemonSkeletonLoader";

export default function Search() {
	const { search } = useSearchedPokemonStore();
	const [isSearching, setIsSearching] = useState(false);
	const { fetchers } = usePokemonCardApi();

	//do something with
	const { data, isFetching, refetch, error } = useQuery({
		queryKey: ["pokemonCard", search],
		queryFn: () => fetchers.fetchByName(search),
		enabled: false,
	});

	// Debounced search state
	const [debouncedSearch, setDebouncedSearch] = useState(search);

	// Update debounce value 500ms after user stops typing
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);

		return () => clearTimeout(handler); // Clear if user types again before 500ms
	}, [search]);

	// Fetch data when debounced search updates and is not empty
	useEffect(() => {
		if (debouncedSearch.trim() !== "") {
			refetch();
			setIsSearching(true);
		} else {
			setIsSearching(false);
		}
	}, [debouncedSearch, refetch]);

	return (
		<Main>
			<SearchBar />
			{isFetching ? (
				<FlatList
					style={searchListStyles.container}
					numColumns={2}
					data={Array.from({ length: 6 })}
					columnWrapperStyle={{
						justifyContent: "space-between",
					}}
					renderItem={({ item, index }) => (
						<SkeletonSearchedPokemonCard
							key={index}
						/>
					)}
					keyExtractor={(_, index) =>
						index.toString()
					}
				/>
			) : !isSearching ? (
				<Text>search screen content</Text>
			) : error ? (
				<FlatList
					style={searchListStyles.container}
					numColumns={2}
					data={Array.from({ length: 6 })}
					columnWrapperStyle={{
						justifyContent: "space-between",
					}}
					renderItem={({ item, index }) => (
						<SkeletonSearchedPokemonCard
							key={index}
						/>
					)}
					keyExtractor={(_, index) =>
						index.toString()
					}
				/>
			) : (
				<TouchableWithoutFeedback
					onPress={() => Keyboard.dismiss()}
				>
					<FlatList
						style={
							searchListStyles.container
						}
						numColumns={2}
						data={data ?? []} // default empty array if no data
						columnWrapperStyle={{
							justifyContent:
								"space-between",
						}}
						renderItem={({ item }) => (
							<SearchedPokemonCard
								isFromSearch={
									true
								}
								image={
									item
										.images
										.large
								}
								title={
									item.name
								}
								cardSet={[
									`${item.set.name} ${item.number}/${item.set.total}`,
								]}
								rarity={
									item.rarity
								}
								qty={0}
								price={Math.max(
									item
										?.tcgplayer
										?.prices
										?.normal
										?.market ||
										0,
									item
										?.tcgplayer
										?.prices
										?.reverseHolofoil
										?.market ||
										0,
									item
										?.tcgplayer
										?.prices
										?.holofoil
										?.market ||
										0
								)}
							/>
						)}
						keyExtractor={(item, index) =>
							index.toString()
						}
					/>
				</TouchableWithoutFeedback>
			)}
		</Main>
	);
}
