import { StyleSheet } from "react-native";
import Colors from "../Colors";

export const safeAreaView = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		backgroundColor: Colors.clrSurfaceA0,
		color: Colors.clrLightA0,
	},
});

export const signInScreen = StyleSheet.create({
	container: {
		height: "100%",
		alignItems: "center",
		flexDirection: "column",
	},
	logo: {
		width: 100,
		height: 100,
		marginTop: 32,
	},
	title: {
		fontFamily: "Baloo-Bold",
		fontSize: 64,
		fontWeight: "800",
	},
	subTitle: {
		fontFamily: "Baloo",
		fontSize: 16,
		fontWeight: "800",
	},
	buttonContainer: {
		marginTop: "auto",
		marginBottom: 48,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 16,
	},
	buttonText: {
		color: Colors.clrDarkA0,
	},
	buttonLogo: {
		width: 32,
		height: 32,
	},
});

export const textInputStyles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: Colors.clrLightA0,
	},
	input: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
		color: Colors.clrPrimaryA0,
		fontSize: 16,
	},
	clearButton: {
		marginRight: 16,
	},
	clearButtonText: {
		color: Colors.clrPrimaryA0,
		fontSize: 18,
	},
});
