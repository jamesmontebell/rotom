import Main from "@/components/main/Main";
import { Text } from "@/components/main/Text";
import { SearchedPokemonCard } from "@/components/pokemon-card/SeachedPokemonCard";
import { Loading } from "@/components/search-bar/Loading";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { useSearchedPokemonStore } from "@/components/search-bar/SearchBarStore";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { fetchPokemonCardByName } from "@/utils/PokemonCardUtils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
	FlatList,
	Keyboard,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from "react-native";

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
