import React from "react";
import { TouchableOpacity, View, GestureResponderEvent } from "react-native";
import { Text } from "@/components/main/Text";
import { pokemonCardStyles } from "@/constants/ui/GlobalStyles";
import Colors from "@/constants/Colors";

type PokemonCollectionCardProps = {
	title: string;
	icon: React.ReactNode;
	onPress?: (event: GestureResponderEvent) => void;
	onLongPress?: (event: GestureResponderEvent) => void;
};

const PokemonCollectionCard = ({
	title,
	icon,
	onPress,
	onLongPress,
}: PokemonCollectionCardProps) => {
	return (
		<View
			style={[
				pokemonCardStyles.container,
				{
					justifyContent: "center",
					alignItems: "center",
					aspectRatio: 2.5 / 3,
					overflow: "hidden",
					backgroundColor: Colors.clrSurfaceA10,
					borderRadius: 8,
					padding: 16,
					borderColor: "white",
					borderWidth: 1,
				},
			]}
		>
			<TouchableOpacity
				onPress={onPress}
				onLongPress={onLongPress}
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{icon}
				</View>
				<Text>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default PokemonCollectionCard;
