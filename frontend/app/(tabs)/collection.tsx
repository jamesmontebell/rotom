import { useEffect, useRef, useState } from "react";

import { Animated, FlatList, View } from "react-native";

import { useQuery } from "@tanstack/react-query";

import Main from "@/components/main/Main";
import PokemonCollectionCard from "@/components/collection/PokemonCollectionCard";
import { PokemonCollection } from "@/models/PokemonCollection";
import { Text } from "@/components/main/Text";
import { getCollections, insertCollection } from "@/utils/db";
import { searchListStyles } from "@/constants/ui/GlobalStyles";

export default function Collection() {
	const [isNewCollection, setIsNewCollection] = useState(false);
	const fadeInTextAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		fadeInTextAnim.setValue(0);
		Animated.timing(fadeInTextAnim, {
			toValue: 1,
			duration: 400,
			useNativeDriver: true,
		}).start();
	}, []);

	const {
		data: collections = [],
		isLoading,
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
	}, [isNewCollection]);

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
				{error ? (
					<View
						style={{
							height: "100%",
							justifyContent: "center",
							alignItems: "center",
							padding: 16,
						}}
					>
						<Text style={{ textAlign: "center", fontSize: 18 }}>
							Sorry, there has been an error loading your
							collections. 😢
						</Text>
					</View>
				) : (
					<FlatList
						style={searchListStyles.container}
						numColumns={2}
						data={flatListData}
						columnWrapperStyle={{ justifyContent: "space-between" }}
						keyExtractor={(item, index) =>
							item.id ? item.id.toString() : `dynamic-${index}`
						}
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
										onPress={async () => {
											await insertCollection(
												"test",
												"test"
											);
											setIsNewCollection(true);
										}}
										onLongPress={() => refetch()}
									/>
								);
							}

							return (
								<PokemonCollectionCard
									title={item.name}
									icon={<Text>{item.emoji}</Text>}
								/>
							);
						}}
					/>
				)}
			</Animated.View>
		</Main>
	);
}
