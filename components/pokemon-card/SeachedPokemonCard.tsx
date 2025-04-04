import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@/components/main/Text";

interface SearchedPokemonCardProps {
	image: string;
	title: string;
	cardSet: string[];
	rarity: string;
	qty: number;
	price: number;
}

export function SearchedPokemonCard({
	image,
	title,
	cardSet,
	rarity,
	qty,
	price,
}: SearchedPokemonCardProps) {
	return (
		<View className="pokemonCardContainer">
			<Image
				src={image}
				auto-size={true}
				className="pokemonCardImage"
			/>
			<Text className="pokemonCardTitle">{title}</Text>
			<Text className="pokemonCardSubHeading">
				{cardSet.join(" • ")}
			</Text>
			<Text className="pokemonCardSubHeading">{rarity}</Text>
			<View className="pokemonCardBottomRow">
				<View className="pokemonCardPriceContainer">
					<Text className="pokemonCardTitle">{`$${price}`}</Text>
					<Text className=" pokemonCardSubHeading">
						Qty: {qty}
					</Text>
				</View>
				<TouchableOpacity onPress={() => {}}>
					<Image
						className="pokemonCardAddButton"
						src="https://img.icons8.com/?size=100&id=V54UD3Kg4Dt5&format=png&color=cf3858"
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
