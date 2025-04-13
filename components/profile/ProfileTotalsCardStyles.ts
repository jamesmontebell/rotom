import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const profileTotalsCardStyles = StyleSheet.create({
	profileCardContainer: {
		width: "100%",
		padding: 16,
		borderRadius: 16,
		backgroundColor: Colors.clrSurfaceA10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		gap: 16,
	},
	valueContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	valueTitle: {
		fontFamily: "Baloo-Bold",
		fontSize: 18,
	},
	valueNumber: {
		fontFamily: "Baloo-Bold",
		fontSize: 16,
		color: Colors.clrPrimaryA10,
	},
});
