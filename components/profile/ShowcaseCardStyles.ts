import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const profileShowcaseStyles = StyleSheet.create({
	showcaseContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	showcaseTitle: {
		fontSize: 20,
		fontFamily: "Baloo-ExtraBold",
	},
});
