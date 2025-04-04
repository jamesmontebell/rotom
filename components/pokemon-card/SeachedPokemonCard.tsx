import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@/components/main/Text";
import { pokemonCardStyles } from "@/constants/ui/GlobalStyles";

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
		<View style={pokemonCardStyles.container}>
			<View style={pokemonCardStyles.imageConatiner}>
				<Image
					src={image}
					style={pokemonCardStyles.image}
				/>
			</View>
			<View style={pokemonCardStyles.textContainer}>
				<Text style={pokemonCardStyles.title}>
					{title}
				</Text>
				<Text style={pokemonCardStyles.subtitle}>
					{cardSet}
				</Text>
				<Text style={pokemonCardStyles.subtitle}>
					{rarity}
				</Text>
				<Text style={pokemonCardStyles.subtitle}>
					{qty}
				</Text>
				<View
					style={
						pokemonCardStyles.priceAndAddContainer
					}
				>
					<Text style={pokemonCardStyles.price}>
						{`$${price}`}
					</Text>
					<TouchableOpacity>
						<Image
							style={
								pokemonCardStyles.addButton
							}
							src="https://img.icons8.com/?size=100&id=V54UD3Kg4Dt5&format=png&color=cf3858"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
