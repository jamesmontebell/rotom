import { StyleSheet } from "react-native";

import Main from "@/components/main/Main";
import { Text } from "@/components/main/Text";

export default function TabOneScreen() {
	return (
		<Main>
			<Text>Home</Text>
		</Main>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
