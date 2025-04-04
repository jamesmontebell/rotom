import React from "react";
import { Image } from "react-native";
import { Redirect, Stack, Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUser } from "@clerk/clerk-expo";

export default function TabLayout() {
	const { isSignedIn } = useUser();

	if (!isSignedIn) {
		return <Redirect href="/(auth)" />;
	}
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor:
						Colors.clrPrimaryA0,
					tabBarInactiveTintColor:
						Colors.clrSurfaceA50,
					// Disable the static render of the header on web
					// to prevent a hydration error in React Navigation v6.
					tabBarStyle: {
						borderTopWidth: 0,
						backgroundColor:
							Colors.clrSurfaceA0, // Tab bar background color
						height: 72,
						paddingTop: 8,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon: ({
							color,
							size,
						}) => (
							<Image
								source={{
									uri: "https://img.icons8.com/?size=100&id=HWCgA83ZikaE&format=png&color=cf3858",
								}}
								style={{
									width: size,
									height: size,
									tintColor: color,
								}} // Apply the size and color
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="search"
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon: ({
							color,
							size,
						}) => (
							<Image
								source={{
									uri: "https://img.icons8.com/?size=100&id=C09JPbdkQ56U&format=png&color=cf3858",
								}}
								style={{
									width: size,
									height: size,
									tintColor: color,
								}} // Apply the size and color
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="collection"
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon: ({
							color,
							size,
						}) => (
							<Image
								source={{
									uri: "https://img.icons8.com/?size=100&id=WhUjcTUFVoBp&format=png&color=cf3858",
								}}
								style={{
									width: size,
									height: size,
									tintColor: color,
								}} // Apply the size and color
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon: ({
							color,
							size,
						}) => (
							<Image
								source={{
									uri: "https://img.icons8.com/?size=100&id=Or3Eb98tGbJL&format=png&color=cf3858",
								}}
								style={{
									width: size,
									height: size,
									tintColor: color,
								}} // Apply the size and color
							/>
						),
					}}
				/>
			</Tabs>
		</QueryClientProvider>
	);
}
