import { ActivityIndicator, View } from "react-native";
import { Slot } from "expo-router";
import {
	initialWindowMetrics,
	SafeAreaProvider,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		"Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
		"Baloo-Medium": require("../assets/fonts/Baloo2-Medium.ttf"),
		"Baloo-SemiBold": require("../assets/fonts/Baloo2-SemiBold.ttf"),
		"Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
		"Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" />
			</View>
		);
}
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Slot
				screenOptions={{
					headerShown: false,
				}}
			/>
		</SafeAreaProvider>
	);
}
