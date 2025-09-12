import { View, TextInput } from "react-native";

import Colors from "@/constants/Colors";
import Main from "@/components/main/Main";
import PokemonCollectionCard from "@/components/collection/PokemonCollectionCard";
import { newCollectionViewModel } from "@/viewmodels/newCollectionViewmodel";
import { textInputStyles } from "@/constants/ui/GlobalStyles";
import { Button } from "@/components/main/Button";

export default function CollectionModal() {
	const { collectionState, setCollectionState, insertNewCollection } =
		newCollectionViewModel();

	return (
		<Main>
			<View
				style={{
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					margin: "10%",
				}}
			>
				<PokemonCollectionCard
					isTouchable={false}
					title={collectionState.title}
					icon={collectionState.icon}
					style={{ marginBottom: "15%" }}
				/>
				<View style={textInputStyles.wrapper}>
					<TextInput
						style={textInputStyles.input}
						placeholder="New Collection Title"
						placeholderTextColor={Colors.clrDarkA0}
						onChangeText={(text) =>
							setCollectionState((prev) => ({
								...prev,
								title: text,
							}))
						}
					/>
				</View>
				<View style={textInputStyles.wrapper}>
					<TextInput
						style={textInputStyles.input}
						placeholder="Icon"
						placeholderTextColor={Colors.clrDarkA0}
						onChangeText={(text) =>
							setCollectionState((prev) => ({
								...prev,
								icon: text,
							}))
						}
					/>
				</View>
				<Button onPress={insertNewCollection}>Add Collection</Button>
			</View>
		</Main>
	);
}
