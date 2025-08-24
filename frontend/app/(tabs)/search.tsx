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
import { SearchedPokemonCard } from "@/components/pokemon-card/SeachedPokemonCard";
import { Text } from "@/components/main/Text";
import { searchListStyles } from "@/constants/ui/GlobalStyles";

import { useSearchViewModel } from "@/viewmodels/searchViewmodel";

export default function Search() {
	const { search, setSearch, data, isFetching, isSearching, error } =
		useSearchViewModel();

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
						columnWrapperStyle={{ justifyContent: "space-between" }}
						renderItem={({ item }) => (
							<SearchedPokemonCard
								isFromSearch
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
