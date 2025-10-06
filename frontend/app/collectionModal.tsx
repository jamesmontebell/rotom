import {
	View,
	TextInput,
	Text,
	Pressable,
	TouchableOpacity,
	Alert,
} from "react-native";

import Colors from "@/constants/Colors";
import Main from "@/components/main/Main";
import PokemonCollectionCard from "@/components/collection/PokemonCollectionCard";
import { newCollectionViewModel } from "@/viewmodels/newCollectionViewmodel";
import { collectionModalStyles } from "@/constants/ui/CollectionModalStyles";

export default function CollectionModal() {
	const { collectionState, setCollectionState, insertNewCollection } =
		newCollectionViewModel();

	const handleCreateCollection = () => {
		if (
			!collectionState.title.trim() ||
			!collectionState.icon.trim()
		) {
			Alert.alert(
				"Missing Information",
				"Please fill in both the collection title and icon before creating a collection.",
				[{ text: "OK" }]
			);
			return;
		}
		insertNewCollection();
	};

	return (
		<Main>
			<View style={collectionModalStyles.container}>
				<View style={collectionModalStyles.modalCard}>
					<View
						style={
							collectionModalStyles.previewCard
						}
					>
						<PokemonCollectionCard
							isTouchable={false}
							title={
								collectionState.title ||
								"Collection Name"
							}
							icon={
								collectionState.icon ||
								"📦"
							}
						/>
					</View>

					<View
						style={
							collectionModalStyles.inputSection
						}
					>
						<Text
							style={
								collectionModalStyles.inputLabel
							}
						>
							Collection Title
						</Text>
						<View
							style={
								collectionModalStyles.inputWrapper
							}
						>
							<TextInput
								style={
									collectionModalStyles.input
								}
								placeholder="Enter collection name"
								placeholderTextColor={
									Colors.clrSurfaceA50
								}
								value={
									collectionState.title
								}
								onChangeText={(
									text
								) =>
									setCollectionState(
										(
											prev
										) => ({
											...prev,
											title: text,
										})
									)
								}
							/>
							{collectionState.title && (
								<TouchableOpacity
									style={
										collectionModalStyles.clearButton
									}
									onPress={() =>
										setCollectionState(
											(
												prev
											) => ({
												...prev,
												title: "",
											})
										)
									}
								>
									<Text
										style={
											collectionModalStyles.clearButtonText
										}
									>
										×
									</Text>
								</TouchableOpacity>
							)}
						</View>
					</View>

					<View
						style={
							collectionModalStyles.inputSection
						}
					>
						<Text
							style={
								collectionModalStyles.inputLabel
							}
						>
							Collection Icon
						</Text>
						<View
							style={
								collectionModalStyles.inputWrapper
							}
						>
							<TextInput
								style={
									collectionModalStyles.input
								}
								placeholder="Choose an emoji or icon"
								placeholderTextColor={
									Colors.clrSurfaceA50
								}
								value={
									collectionState.icon
								}
								onChangeText={(
									text
								) =>
									setCollectionState(
										(
											prev
										) => ({
											...prev,
											icon: text,
										})
									)
								}
							/>
							{collectionState.icon && (
								<TouchableOpacity
									style={
										collectionModalStyles.clearButton
									}
									onPress={() =>
										setCollectionState(
											(
												prev
											) => ({
												...prev,
												icon: "",
											})
										)
									}
								>
									<Text
										style={
											collectionModalStyles.clearButtonText
										}
									>
										×
									</Text>
								</TouchableOpacity>
							)}
						</View>
					</View>

					<View
						style={
							collectionModalStyles.buttonContainer
						}
					>
						<Pressable
							style={({
								pressed,
							}) => [
								collectionModalStyles.primaryButton,
								{
									opacity: pressed
										? 0.8
										: 1,
								},
							]}
							onPress={
								handleCreateCollection
							}
						>
							<Text
								style={
									collectionModalStyles.primaryButtonText
								}
							>
								Create
								Collection
							</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Main>
	);
}
