import { FlatList } from "react-native";

import Main from "@/components/main/Main";
import PokemonCollectionCard from "@/components/collection/PokemonCollectionCard";
import { Text } from "@/components/main/Text";
import { searchListStyles } from "@/constants/ui/GlobalStyles";

export default function Collection() {
	return (
		<Main>
			<FlatList
				style={searchListStyles.container}
				numColumns={2}
				data={Array.from({ length: 6 })}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				renderItem={({ item, index }) =>
					index === 0 ? (
						<PokemonCollectionCard
							key={index}
							title="New Collection"
							icon={<Text>+</Text>}
						/>
					) : (
						<PokemonCollectionCard
							key={index}
							title="Collections"
							icon={<Text>+</Text>}
						/>
					)
				}
				keyExtractor={(_, index) => index.toString()}
			/>
		</Main>
	);
}
