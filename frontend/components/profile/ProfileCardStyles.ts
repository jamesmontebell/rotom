import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const profileCardStyles = StyleSheet.create({
	profileContainer: {
		// borderColor: "white",
		// borderWidth: 1,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	profileImageAndNameContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
		flex: 1,
	},
	profileHeaderContainer: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
	},
	profileImage: {
		width: 16 * 5,
		height: 16 * 5,
		backgroundColor: Colors.clrPrimaryA10,
		borderRadius: 48,
	},
	profileName: {
		alignSelf: "center",
		fontSize: 24,
		fontFamily: "Baloo-ExtraBold",
	},
	followContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	followNumberContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 16,
	},
	followTextContainer: {
		marginHorizontal: 16,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	followTitle: {
		fontFamily: "Baloo-Bold",
		fontSize: 20,
	},
	followNumber: {
		fontFamily: "Baloo-Bold",
		fontSize: 20,
		color: Colors.clrPrimaryA10,
	},
	followButtonsContainer: {
		display: "flex",
		flexDirection: "row",
		width: "75%",
	},
	followButton: {
		width: "75%",
		padding: 14,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
	shareButton: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.clrPrimaryA10,
		width: "25%",
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
	shareButtonImage: {
		width: 16,
		height: 16,
	},
	profileBio: {
		width: "75%",
		textAlign: "center",
		fontFamily: "Baloo-Regular",
	},
});
