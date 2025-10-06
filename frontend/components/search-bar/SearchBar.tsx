// src/components/search-bar/SearchBar.tsx
import { TextInput, TouchableOpacity, View, Platform } from "react-native";
import { Text } from "@/components/main/Text";
import { collectionModalStyles } from "@/constants/ui/CollectionModalStyles";
import Colors from "../../constants/Colors";

type Props = {
	value: string;
	onChange: (value: string) => void;
	onClear: () => void;
};

export function SearchBar({ value, onChange, onClear }: Props) {
	return (
		<View
			style={[
				collectionModalStyles.inputWrapper,
				{ marginBottom: 16 },
			]}
		>
			<TextInput
				style={collectionModalStyles.input}
				placeholder="Search for cards"
				placeholderTextColor={Colors.clrSurfaceA50}
				value={value}
				onChangeText={onChange}
			/>
			{value.length > 0 && (
				<TouchableOpacity
					onPress={onClear}
					style={
						collectionModalStyles.clearButton
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
	);
}
