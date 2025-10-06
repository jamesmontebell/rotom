import React from "react";
import {
	TouchableOpacity,
	View,
	GestureResponderEvent,
	StyleProp,
	ViewStyle,
} from "react-native";

import Colors from "@/constants/Colors";
import { Text } from "@/components/main/Text";
import { pokemonCardStyles } from "@/constants/ui/GlobalStyles";

type PokemonCollectionCardProps = {
	isTouchable?: boolean | null;
	title: string;
	icon: string;
	onPress?: (event: GestureResponderEvent) => void;
	onLongPress?: (event: GestureResponderEvent) => void;
	style?: StyleProp<ViewStyle>;
};

const PokemonCollectionCard = ({
	isTouchable = true,
	title,
	icon,
	onPress,
	onLongPress,
	style,
}: PokemonCollectionCardProps) => {
	// choose wrapper (TouchableOpacity or View)
	const Wrapper: any = isTouchable ? TouchableOpacity : View;

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
				},
				style,
			]}
		>
			<Wrapper
				{...(isTouchable && { onPress, onLongPress })}
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
					<Text style={{ fontSize: 48 }}>
						{icon}
					</Text>
				</View>
				<Text style={{ textAlign: "center" }}>
					{title}
				</Text>
			</Wrapper>
		</View>
	);
};

export default PokemonCollectionCard;
