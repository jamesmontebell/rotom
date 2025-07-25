import { searchListStyles } from "@/constants/ui/GlobalStyles";
import React from "react";
import { FlatList } from "react-native";
import { SkeletonSearchedPokemonCard } from "./PokemonSkeletonLoader";

const PokemonSkeletonList = () => {
	return (
		<FlatList
			style={searchListStyles.container}
			numColumns={2}
			data={Array.from({ length: 6 })}
			columnWrapperStyle={{
				justifyContent: "space-between",
			}}
			renderItem={({ item, index }) => (
				<SkeletonSearchedPokemonCard key={index} />
			)}
			keyExtractor={(_, index) => index.toString()}
		/>
	);
};

export default PokemonSkeletonList;
