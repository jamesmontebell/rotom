import { useEffect, useState } from "react";

import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";

import { useQuery } from "@tanstack/react-query";

import Main from "@/components/main/Main";
import { Loading } from "@/components/search-bar/Loading";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { SearchedPokemonCard } from "@/components/pokemon-card/SeachedPokemonCard";
import { Text } from "@/components/main/Text";
import { fetchPokemonCardByName } from "@/utils/PokemonCardUtils";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { useSearchedPokemonStore } from "@/components/search-bar/SearchBarStore";

export default function Search() {
	const { search } = useSearchedPokemonStore();
	const [isSearching, setIsSearching] = useState(false);

	const { data, isLoading, refetch, error } = useQuery({
		queryKey: ["pokemonCard", search],
		queryFn: () => fetchPokemonCardByName(search),
		enabled: false,
	});

	useEffect(() => {
		if (search !== "") {
			refetch();
			setIsSearching(true);
		} else {
			setIsSearching(false);
		}
	}, [search, refetch]);

	return (
		<Main>
			<SearchBar />
			{isLoading ? (
				<Loading />
			) : !isSearching ? (
				<Text>search screen content</Text>
			) : (
				<TouchableWithoutFeedback
					onPress={() => Keyboard.dismiss()}
				>
					<FlatList
						style={
							searchListStyles.container
						}
						numColumns={2}
						data={data} // <-- Fix: default to empty array
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
									item.set
										.name +
										" " +
										item.number +
										"/" +
										item
											.set
											.total,
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
