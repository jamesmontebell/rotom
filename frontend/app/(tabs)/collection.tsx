import { useEffect, useRef, useState } from "react";

import { Animated, FlatList } from "react-native";

import Main from "@/components/main/Main";
import PokemonCollectionCard from "@/components/collection/PokemonCollectionCard";
import { Text } from "@/components/main/Text";
import { getCollections, getWatchlist, insertCollection } from "@/utils/db";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { PokemonCollection } from "@/models/PokemonCollection";

export default function Collection() {
	const [collections, setCollections] = useState<PokemonCollection[]>([]);
	const [watchlist, setWatchlist] = useState<PokemonCollection[]>([]);

	const fadeInTextAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		fadeInTextAnim.setValue(0);
		Animated.timing(fadeInTextAnim, {
			toValue: 1,
			duration: 400,
			useNativeDriver: true,
		}).start();
	}, []);

	useEffect(() => {
		const loadCollections = async () => {
			const result: PokemonCollection[] = await getCollections();
			console.log(result);
			setCollections(result);
		};

		const loadWatchlist = async () => {
			const result: PokemonCollection[] = await getWatchlist();
			console.log(result);
			setWatchlist(result);
		};

		loadCollections();
		loadWatchlist();
	}, []);

	const staticCollections: PokemonCollection[] = [
		{
			id: -1,
			name: "Watchlist",
			emoji: "👀",
		},
		{
			id: -2,
			name: "New Collection",
			emoji: "➕",
		},
	];

	const flatListData = [...staticCollections, ...collections];

	return (
		<Main>
			<Animated.View style={{ opacity: fadeInTextAnim }}>
				<FlatList
					style={searchListStyles.container}
					numColumns={2}
					data={flatListData}
					columnWrapperStyle={{
						justifyContent: "space-between",
					}}
					renderItem={({ item }) => {
						if (item.id === -1) {
							return (
								<PokemonCollectionCard
									title={item.name}
									icon={
										<Text style={{ fontSize: 48 }}>
											{item.emoji}
										</Text>
									}
								/>
							);
						}

						if (item.id === -2) {
							return (
								<PokemonCollectionCard
									title={item.name}
									icon={
										<Text style={{ fontSize: 48 }}>
											{item.emoji}
										</Text>
									}
									onPress={() =>
										insertCollection("test", "test")
									}
									onLongPress={() => getCollections()}
								/>
							);
						}

						// Render real collection
						return (
							<PokemonCollectionCard
								title={item.name}
								icon={<Text>{item.emoji}</Text>}
							/>
						);
					}}
					keyExtractor={(item, index) =>
						item.id ? item.id.toString() : `dynamic-${index}`
					}
				/>
			</Animated.View>
		</Main>
	);
}
