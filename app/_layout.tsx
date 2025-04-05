import { ActivityIndicator, View } from "react-native";

import { Slot } from "expo-router";

import {
	initialWindowMetrics,
	SafeAreaProvider,
} from "react-native-safe-area-context";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";

import { tokenCache } from "@/utils/cache";

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
if (!key) {
	throw new Error("Missing key");
}

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
			<ClerkProvider
				publishableKey={key}
				tokenCache={tokenCache}
			>
				<ClerkLoaded>
					<Slot
						screenOptions={{
							headerShown: false,
						}}
					/>
				</ClerkLoaded>
			</ClerkProvider>
		</SafeAreaProvider>
	);
}
