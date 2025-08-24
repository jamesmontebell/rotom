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
		marginBottom: 8,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: Colors.clrLightA0,
	},
	input: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
		color: Colors.clrDarkA0,
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

export const searchListStyles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: Colors.clrSurfaceA0,
	},
});

export const pokemonCardStyles = StyleSheet.create({
	container: {
		width: "48%",
		marginVertical: 8,
		backgroundColor: Colors.clrSurfaceA10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		display: "flex", // Make the container a flexbox
		flexDirection: "column",
	},
	imageConatiner: {
		aspectRatio: 2 / 3,
		width: "100%",
	},
	image: {
		width: "auto",
		height: "100%",
		resizeMode: "stretch",
		borderRadius: 5,
	},
	textContainer: {
		padding: 8,
		flex: 1, // Take remaining space
		display: "flex", // Use flex layout for textContainer
		flexDirection: "column", // Stack content vertically
		justifyContent: "space-between", // Align items at the top and bottom
	},
	title: {
		color: Colors.clrLightA0,
		fontFamily: "Baloo-Bold",
		fontSize: 12,
	},
	subtitle: {
		color: Colors.clrLightA0,
		fontSize: 9,
	},
	priceAndAddContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	addButton: {
		width: 24,
		height: 24,
	},
	price: {
		fontFamily: "Baloo-Bold",
		fontSize: 16,
	},
});

export const loadingStyles = StyleSheet.create({
	container: {
		height: "85%",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: 32,
		height: 32,
	},
});

export const profilePageStyles = StyleSheet.create({
	scrollContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 10,
	},
});
