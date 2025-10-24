import React from "react";

import { FlatList } from "react-native";

import { searchListStyles } from "@/constants/ui/GlobalStyles";

import { SkeletonSearchedPokemonCard } from "./PokemonSkeletonLoader";

const PokemonSkeletonList = () => {
	return (
		<FlatList
			style={searchListStyles.container}
			numColumns={2}
			data={Array.from({ length: 6 })}
			columnWrapperStyle={{
				gap: 6,
			}}
			renderItem={({ item, index }) => (
				<SkeletonSearchedPokemonCard key={index} />
			)}
			keyExtractor={(_, index) => index.toString()}
		/>
	);
};

export default PokemonSkeletonList;
