import React, { useEffect } from "react";
import { Image } from "react-native";
import { Tabs } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Colors from "@/constants/Colors";
import { initDb } from "@/utils/db";

export default function TabLayout() {
	const queryClient = new QueryClient();

	useEffect(() => {
		const setupDb = async () => {
			try {
				await initDb();
			} catch (err) {
				console.error("DB initialization failed:", err);
			}
		};

		setupDb();
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Tabs
				screenOptions={{
					headerStyle: {
						backgroundColor: Colors.clrSurfaceA0,
						height: 72,
					},
					headerTitle: "",
					tabBarActiveTintColor: Colors.clrPrimaryA0,
					tabBarInactiveTintColor: Colors.clrSurfaceA50,
					tabBarStyle: {
						borderTopWidth: 0,
						backgroundColor: Colors.clrSurfaceA0,
						height: 72,
						paddingTop: 8,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: ({ color, size }) => (
							<Image
								source={{
									uri: "https://img.icons8.com/?size=100&id=HWCgA83ZikaE&format=png&color=cf3858",
								}}
								style={{
									width: size,
									height: size,
									tintColor: color,
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="search"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: ({ color, size }) => (
							<Image
								source={{
									uri: "https://img.icons8.com/?size=100&id=C09JPbdkQ56U&format=png&color=cf3858",
								}}
								style={{
									width: size,
									height: size,
									tintColor: color,
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="collection"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: ({ color, size }) => (
							<Image
								source={{
									uri: "https://img.icons8.com/?size=100&id=WhUjcTUFVoBp&format=png&color=cf3858",
								}}
								style={{
									width: size,
									height: size,
									tintColor: color,
								}}
							/>
						),
					}}
				/>
			</Tabs>
		</QueryClientProvider>
	);
}
