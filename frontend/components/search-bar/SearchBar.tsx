// src/components/search-bar/SearchBar.tsx
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/main/Text";
import { textInputStyles } from "@/constants/ui/GlobalStyles";
import Colors from "../../constants/Colors";

type Props = {
	value: string;
	onChange: (value: string) => void;
	onClear: () => void;
};

export function SearchBar({ value, onChange, onClear }: Props) {
	return (
		<View style={textInputStyles.wrapper}>
			<TextInput
				style={textInputStyles.input}
				placeholder="Search for cards"
				placeholderTextColor={Colors.clrDarkA0}
				value={value}
				onChangeText={onChange}
			/>
			{value.length > 0 && (
				<TouchableOpacity
					onPress={onClear}
					style={textInputStyles.clearButton}
				>
					<Text style={textInputStyles.clearButtonText}>×</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}
