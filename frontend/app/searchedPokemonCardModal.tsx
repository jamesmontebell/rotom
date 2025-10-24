import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import Main from "@/components/main/Main";
import Colors from "@/constants/Colors";

export default function SearchedPokemonCardModal() {
	// Extract parameters from the route
	const params = useLocalSearchParams();

	// Parse the pricing data if it exists
	const cardPricing = params.cardPricing
		? JSON.parse(params.cardPricing as string)
		: null;

	return (
		<Main>
			<ScrollView
				style={{
					flex: 1,
					padding: 20,
					backgroundColor: Colors.clrSurfaceA0,
				}}
			>
				{/* Card Image */}
				<View
					style={{
						alignItems: "center",
						marginBottom: 20,
					}}
				>
					<Image
						src={params.cardImage as string}
						style={{
							width: 250,
							height: 350,
							resizeMode: "contain",
						}}
					/>
				</View>

				{/* Card Information */}
				<View
					style={{
						backgroundColor:
							Colors.clrSurfaceA10,
						padding: 16,
						borderRadius: 12,
						marginBottom: 12,
					}}
				>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "bold",
							color: Colors.clrLightA0,
							marginBottom: 8,
						}}
					>
						{params.cardName as string}
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: Colors.clrSurfaceA50,
							marginBottom: 4,
						}}
					>
						Set: {params.cardSet as string}
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: Colors.clrSurfaceA50,
							marginBottom: 4,
						}}
					>
						Number:{" "}
						{params.cardNumber as string}
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: Colors.clrSurfaceA50,
						}}
					>
						Rarity:{" "}
						{params.cardRarity as string}
					</Text>
				</View>

				{/* Price Information */}
				{cardPricing && (
					<View
						style={{
							backgroundColor:
								Colors.clrSurfaceA10,
							padding: 16,
							borderRadius: 12,
							marginBottom: 12,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								fontWeight: "bold",
								color: Colors.clrLightA0,
								marginBottom: 12,
							}}
						>
							Pricing
						</Text>
						{Object.entries(
							cardPricing.conditions ||
								{}
						).map(
							([
								condition,
								priceData,
							]: [string, any]) => (
								<View
									key={
										condition
									}
									style={{
										flexDirection:
											"row",
										justifyContent:
											"space-between",
										marginBottom: 8,
									}}
								>
									<Text
										style={{
											fontSize: 14,
											color: Colors.clrSurfaceA50,
										}}
									>
										{
											condition
										}

										:
									</Text>
									<Text
										style={{
											fontSize: 14,
											color: Colors.clrLightA0,
											fontWeight: "bold",
										}}
									>
										$
										{priceData.price?.toFixed(
											2
										) ||
											"N/A"}
									</Text>
								</View>
							)
						)}
					</View>
				)}
			</ScrollView>
		</Main>
	);
}
