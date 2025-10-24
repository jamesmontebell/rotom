// src/screens/Search.tsx
import { useEffect, useRef } from "react";
import {
	Animated,
	FlatList,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";

import Main from "@/components/main/Main";
import PokemonSkeletonList from "@/components/search/PokemonSkeletonList";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { PokemonCard } from "@/components/pokemon-card/PokemonCard";
import { Text } from "@/components/main/Text";
import { searchListStyles } from "@/constants/ui/GlobalStyles";

import { searchViewModel } from "@/viewmodels/searchViewmodel";

export default function Search() {
	const {
		search,
		setSearch,
		data,
		isFetching,
		isSearching,
		handleSearchedPokemonCardClick,
		error,
	} = searchViewModel();

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

	return (
		<Main>
			<SearchBar
				value={search}
				onChange={setSearch}
				onClear={() => setSearch("")}
			/>
			{isFetching ? (
				<Animated.View
					style={{ opacity: fadeInTextAnim }}
				>
					<PokemonSkeletonList />
				</Animated.View>
			) : !isSearching ? (
				<Animated.View
					style={{ opacity: fadeInTextAnim }}
				>
					<Text>search screen content</Text>
				</Animated.View>
			) : error ? (
				<PokemonSkeletonList />
			) : (
				<TouchableWithoutFeedback
					onPress={() => Keyboard.dismiss()}
				>
					<FlatList
						style={
							searchListStyles.container
						}
						numColumns={2}
						data={data ?? []}
						columnWrapperStyle={{
							gap: 6,
							justifyContent:
								"center",
						}}
						renderItem={({
							item,
							index,
						}) => (
							<PokemonCard
								isFromSearch
								onPress={() =>
									handleSearchedPokemonCardClick(
										item
									)
								}
								image={
									item.images
								}
								title={
									item.name
								}
								cardSet={[
									`${item.set.name} ${item.number}/${item.totalSetNumber}`,
								]}
								rarity={
									item.rarity
								}
								price={Math.max(
									item
										?.tcgplayer
										?.prices
										?.conditions?.[
										"Near Mint"
									]
										?.listings >
										0
										? item
												?.tcgplayer
												?.prices
												?.conditions?.[
												"Near Mint"
											]
												?.price ||
												0
										: 0,
									item
										?.tcgplayer
										?.prices
										?.conditions?.[
										"Lightly Played"
									]
										?.listings >
										0
										? item
												?.tcgplayer
												?.prices
												?.conditions?.[
												"Lightly Played"
											]
												?.price ||
												0
										: 0,
									item
										?.tcgplayer
										?.prices
										?.conditions?.[
										"Moderately Played"
									]
										?.listings >
										0
										? item
												?.tcgplayer
												?.prices
												?.conditions?.[
												"Moderately Played"
											]
												?.price ||
												0
										: 0
								)}
								index={index}
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
