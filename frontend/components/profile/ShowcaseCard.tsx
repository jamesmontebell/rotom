import React from "react";
import { FlatList, View } from "react-native";
import { Text } from "@/components/main/Text";
import { searchListStyles } from "@/constants/ui/GlobalStyles";
import { PokemonCard } from "../pokemon-card/PokemonCard";
import { profileShowcaseStyles } from "./ShowcaseCardStyles";

const dummyCards = [
	{
		images: {
			large: "https://images.pokemontcg.io/base1/4_hires.png",
		},
		name: "Charizard",
		set: { name: "Base Set", total: 102 },
		number: "4",
		rarity: "Rare Holo",
		tcgplayer: {
			prices: {
				normal: { market: 300.0 },
				reverseHolofoil: { market: 320.0 },
				holofoil: { market: 350.0 },
			},
		},
	},
	{
		images: {
			large: "https://images.pokemontcg.io/base1/2_hires.png",
		},
		name: "Blastoise",
		set: { name: "Base Set", total: 102 },
		number: "2",
		rarity: "Rare Holo",
		tcgplayer: {
			prices: {
				normal: { market: 200.5 },
				reverseHolofoil: { market: 210.0 },
				holofoil: { market: 220.5 },
			},
		},
	},
	{
		images: {
			large: "https://images.pokemontcg.io/base1/15_hires.png",
		},
		name: "Venusaur",
		set: { name: "Base Set", total: 102 },
		number: "15",
		rarity: "Rare Holo",
		tcgplayer: {
			prices: {
				normal: { market: 150.75 },
				reverseHolofoil: { market: 160.25 },
				holofoil: { market: 180.75 },
			},
		},
	},
	{
		images: {
			large: "https://images.pokemontcg.io/swsh4/44_hires.png",
		},
		name: "Charizard V",
		set: { name: "Vivid Voltage", total: 185 },
		number: "44",
		rarity: "Rare Ultra",
		tcgplayer: {
			prices: {
				normal: { market: 50.0 },
				reverseHolofoil: { market: 52.0 },
				holofoil: { market: 55.0 },
			},
		},
	},
];

const ShowcaseCard = () => {
	return (
		<View style={profileShowcaseStyles.showcaseContainer}>
			<Text style={profileShowcaseStyles.showcaseTitle}>
				Showcase
			</Text>
			<FlatList
				scrollEnabled={false}
				style={searchListStyles.container}
				numColumns={2}
				data={dummyCards}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				renderItem={({ item }) => (
					<PokemonCard
						isFromSearch={false}
						image={item.images.large}
						title={item.name}
						cardSet={[
							item.set.name +
								" " +
								item.number +
								"/" +
								item.set.total,
						]}
						rarity={item.rarity}
						qty={0}
						price={Math.max(
							item?.tcgplayer?.prices
								?.normal
								?.market || 0,
							item?.tcgplayer?.prices
								?.reverseHolofoil
								?.market || 0,
							item?.tcgplayer?.prices
								?.holofoil
								?.market || 0
						)}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default ShowcaseCard;
