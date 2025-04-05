import React from "react";

import { Image } from "react-native";

import { Redirect, Tabs } from "expo-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUser } from "@clerk/clerk-expo";

import Colors from "@/constants/Colors";

export default function TabLayout() {
	const { isSignedIn } = useUser();

	if (!isSignedIn) {
		return <Redirect href="/" />;
	}
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Tabs
				screenOptions={{
					headerStyle: {
						backgroundColor:
							Colors.clrSurfaceA0,
						height: 72,
					},
					headerTitle: "",
					tabBarActiveTintColor:
						Colors.clrPrimaryA0,
					tabBarInactiveTintColor:
						Colors.clrSurfaceA50,
					tabBarStyle: {
						borderTopWidth: 0,
						backgroundColor:
							Colors.clrSurfaceA0,
						height: 72,
						paddingTop: 8,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
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
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="search"
					options={{
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
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="collection"
					options={{
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
								}}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
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
								}}
							/>
						),
					}}
				/>
			</Tabs>
		</QueryClientProvider>
	);
}
