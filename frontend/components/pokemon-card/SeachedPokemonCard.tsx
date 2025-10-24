import { useEffect, useRef } from "react";
import { View, Image, TouchableOpacity, Animated } from "react-native";
import { Text } from "@/components/main/Text";
import { pokemonCardStyles } from "@/constants/ui/GlobalStyles";

interface SearchedPokemonCardProps {
	image: string;
	title: string;
	cardSet: string[];
	rarity: string;
	price: number;
	isFromSearch: boolean;
	index?: number; // Optional index for staggered animation
}

export function SearchedPokemonCard({
	isFromSearch,
	image,
	title,
	cardSet,
	rarity,
	price,
	index = 0, // Default to 0 if no index provided
}: SearchedPokemonCardProps) {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 300,
			delay: index * 50, // Stagger animation by 50ms per item
			useNativeDriver: true,
		}).start();
	}, [fadeAnim, index]);

	return (
		<Animated.View
			style={[
				pokemonCardStyles.container,
				{ opacity: fadeAnim },
			]}
		>
			<View style={pokemonCardStyles.imageConatiner}>
				<Image
					src={image}
					style={pokemonCardStyles.image}
				/>
			</View>
			{/* <View style={pokemonCardStyles.textContainer}>
				<Text style={pokemonCardStyles.title}>
					{title}
				</Text>
				<Text style={pokemonCardStyles.subtitle}>
					{cardSet}
				</Text>
				<Text style={pokemonCardStyles.subtitle}>
					{rarity}
				</Text>
				<View
					style={
						pokemonCardStyles.priceAndAddContainer
					}
				>
					<Text style={pokemonCardStyles.price}>
						{`$${price}`}
					</Text>
					{isFromSearch ? (
						<TouchableOpacity>
							<Image
								style={
									pokemonCardStyles.addButton
								}
								source={{
									uri: "https://img.icons8.com/?size=100&id=V54UD3Kg4Dt5&format=png&color=cf3858",
								}}
							/>
						</TouchableOpacity>
					) : null}
				</View>
			</View> */}
		</Animated.View>
	);
}
