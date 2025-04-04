import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/main/Text";
import { useSearchedPokemonStore } from "./SearchBarStore";
import { textInputStyles } from "@/constants/ui/GlobalStyles";
import Colors from "../../constants/Colors";

export function SearchBar() {
	const { search, setSearch } = useSearchedPokemonStore();

	return (
		<View style={textInputStyles.wrapper}>
			<TextInput
				style={textInputStyles.input}
				placeholder="Search for cards"
				placeholderTextColor={Colors.clrDarkA0}
				value={search}
				onChangeText={setSearch}
			/>
			{search.length > 0 && (
				<TouchableOpacity
					onPress={() => setSearch("")}
					style={textInputStyles.clearButton}
				>
					<Text
						style={
							textInputStyles.clearButtonText
						}
					>
						×
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}
