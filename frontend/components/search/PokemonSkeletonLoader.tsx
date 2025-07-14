import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // You need to install expo-linear-gradient

import { pokemonCardStyles } from "@/constants/ui/GlobalStyles";
import Colors from "@/constants/Colors";

const SCREEN_WIDTH = Dimensions.get("window").width;

export function SkeletonSearchedPokemonCard() {
	const shimmerAnim = useRef(new Animated.Value(-1)).current;

	useEffect(() => {
		Animated.loop(
			Animated.timing(shimmerAnim, {
				toValue: 1,
				duration: 1700,
				useNativeDriver: true,
			})
		).start();
	}, [shimmerAnim]);

	const translateX = shimmerAnim.interpolate({
		inputRange: [-1, 1],
		outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
	});

	return (
		<View
			style={[
				pokemonCardStyles.container,
				{
					aspectRatio: 2 / 3,
					overflow: "hidden",
					backgroundColor: Colors.clrSurfaceA10, // clrSurfaceA10 dark base
					borderRadius: 8,
				},
			]}
		>
			<Animated.View
				style={[
					StyleSheet.absoluteFill,
					{
						transform: [{ translateX }],
					},
				]}
			>
				<LinearGradient
					colors={[
						"transparent",
						Colors.clrRipple, // subtle lighter highlight
						"transparent",
					]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={{
						flex: 1,
						width: SCREEN_WIDTH / 2,
					}}
				/>
			</Animated.View>
		</View>
	);
}
