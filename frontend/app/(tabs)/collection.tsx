// src/screens/Collection.tsx
import { useEffect, useRef } from "react";
import { Animated, FlatList, View } from "react-native";

import Main from "@/components/main/Main";
import PokemonCollectionCard from "@/components/collection/PokemonCollectionCard";
import { Text } from "@/components/main/Text";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { collectionViewModel } from "@/viewmodels/collectionViewmodel";

export default function Collection() {
	const {
		flatListData,
		isFetching,
		error,
		refreshCollections,
		handleAddNewCollection,
	} = collectionViewModel();

	// animation stays in the View
	const fadeInTextAnim = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		fadeInTextAnim.setValue(0);
		Animated.timing(fadeInTextAnim, {
			toValue: 1,
			duration: 400,
			useNativeDriver: true,
		}).start();
	}, []);

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
						refreshing={isFetching} // optional pull-to-refresh
						onRefresh={refreshCollections} // optional pull-to-refresh
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
										onPress={handleAddNewCollection}
										onLongPress={() => refreshCollections()} // wrap it!
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
