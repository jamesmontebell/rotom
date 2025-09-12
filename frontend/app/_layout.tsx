import {
	ActivityIndicator,
	Button,
	TouchableOpacity,
	View,
} from "react-native";

import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
	initialWindowMetrics,
	SafeAreaProvider,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { Text } from "@/components/main/Text";
import Colors from "@/constants/Colors";

export default function RootLayout() {
	const queryClient = new QueryClient();
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
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider initialMetrics={initialWindowMetrics}>
				<Stack screenOptions={{ headerShown: false }}>
					{/* Tab navigator group */}
					<Stack.Screen
						name="(tabs)"
						options={{ headerShown: false }}
					/>

					{/* Modal route */}
					<Stack.Screen
						name="collectionModal"
						options={({ navigation }) => ({
							presentation: "modal",
							headerShown: true,
							title: "New Collection", // custom title
							headerTitleAlign:
								"center", // center the title
							headerStyle: {
								backgroundColor:
									Colors.clrSurfaceA0, // background color
							},
							headerTitleStyle: {
								fontSize: 18,
								fontWeight: "bold",
							},
							headerTintColor:
								Colors.clrLightA0, // tint color for icons and text
							headerLeft: () => (
								<Button
									title="Close"
									onPress={() =>
										navigation.goBack()
									}
								/>
							),
						})}
					/>
				</Stack>
			</SafeAreaProvider>
		</QueryClientProvider>
	);
}
