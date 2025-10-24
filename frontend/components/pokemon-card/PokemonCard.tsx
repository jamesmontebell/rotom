import { useEffect, useRef } from "react";

import {
	View,
	Image,
	TouchableOpacity,
	Animated,
	GestureResponderEvent,
} from "react-native";

import { Text } from "@/components/main/Text";
import { pokemonCardStyles } from "@/constants/ui/GlobalStyles";

interface PokemonCardProps {
	image: string;
	title: string;
	onPress?: (event: GestureResponderEvent) => void;
	cardSet: string[];
	rarity: string;
	price: number;
	isFromSearch: boolean;
	index?: number; // Optional index for staggered animation
}

export function PokemonCard({
	isFromSearch,
	image,
	onPress,
	title,
	cardSet,
	rarity,
	price,
	index = 0, // Default to 0 if no index provided
}: PokemonCardProps) {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 300,
			delay: index * 50, // Stagger animation by 50ms per item
			useNativeDriver: true,
		}).start();
	}, [fadeAnim, index]);

	if (isFromSearch) {
		return (
			<Animated.View
				style={[
					pokemonCardStyles.container,
					{ opacity: fadeAnim },
				]}
			>
				<TouchableOpacity onPress={onPress}>
					<View
						style={
							pokemonCardStyles.imageConatiner
						}
					>
						<Image
							src={image}
							style={
								pokemonCardStyles.image
							}
						/>
					</View>
				</TouchableOpacity>
			</Animated.View>
		);
	}

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
		</Animated.View>
	);
}
