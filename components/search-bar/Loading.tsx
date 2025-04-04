import React from "react";
import { View } from "react-native";
import { loadingStyles } from "@/constants/ui/GlobalStyles";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withSequence,
	withDelay,
	withRepeat,
	Easing,
} from "react-native-reanimated";

export function Loading() {
	const delays = [0, 150, 300];
	const cooldownDelay = 600; // Slightly longer pause
	const bounceHeight = -8; // Softer bounce
	const duration = 900; // Slower motion

	const translateYValues = delays.map(() => useSharedValue(0));

	React.useEffect(() => {
		translateYValues.forEach((val, index) => {
			const totalDelay = delays[index];
			const totalCooldown =
				delays.length * 150 + cooldownDelay;

			val.value = withDelay(
				totalDelay,
				withRepeat(
					withSequence(
						withTiming(bounceHeight, {
							duration,
							easing: Easing.inOut(
								Easing.sin
							), // Gentle easing
						}),
						withTiming(0, {
							duration,
							easing: Easing.inOut(
								Easing.sin
							),
						}),
						withDelay(
							totalCooldown -
								totalDelay -
								duration * 2,
							withTiming(0, {
								duration: 0,
							})
						)
					),
					-1,
					false
				)
			);
		});
	}, []);

	const animatedStyles = translateYValues.map((val) =>
		useAnimatedStyle(() => ({
			transform: [{ translateY: val.value }],
		}))
	);

	return (
		<View style={loadingStyles.container}>
			{animatedStyles.map((style, index) => (
				<Animated.Image
					key={index}
					style={[loadingStyles.image, style]}
					source={{
						uri: "https://img.icons8.com/?size=100&id=41481&format=png&color=cf3858",
					}}
				/>
			))}
		</View>
	);
}
