import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const profileCardStyles = StyleSheet.create({
	profileContainer: {
		width: "100%",
		padding: 16,
		borderRadius: 16,
		backgroundColor: Colors.clrSurfaceA10,
		display: "flex",
		flexDirection: "row",
		gap: 16,
	},
	subContainer: {
		backgroundColor: Colors.clrSurfaceA20,
		borderRadius: 16,
		padding: 16,
		display: "flex",
		flex: 1,
	},
	profileImage: {
		width: 16 * 5,
		height: 16 * 5,
		backgroundColor: Colors.clrPrimaryA10,
		borderRadius: 48,
	},
	profileFollow: {
		// borderColor: "white",
		// borderWidth: 1,
		// backgroundColor: Colors.clrSurfaceA20,
		// borderRadius: 16,
		// padding: 16,
		display: "flex",
		flexDirection: "column",
		gap: 20,
	},
	followTitle: {
		fontFamily: "Baloo-Bold",
		fontSize: 16,
	},
	followNumber: {
		fontFamily: "Baloo-Bold",
		fontSize: 16,
		color: Colors.clrPrimaryA10,
	},
	profileName: {
		fontSize: 20,
		fontFamily: "Baloo-ExtraBold",
	},
	profileBio: {
		fontFamily: "Baloo-Regular",
	},
	profileCardContainer: {
		width: "100%",
		padding: 16,
		borderRadius: 16,
		backgroundColor: Colors.clrSurfaceA10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		gap: 16,
	},
	values: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});
