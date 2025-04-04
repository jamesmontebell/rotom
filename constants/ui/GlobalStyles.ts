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

export const searchListStyles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: Colors.clrSurfaceA0,
	},
});

export const pokemonCardStyles = StyleSheet.create({
	container: {
		width: "48%",
		marginVertical: 8,
		backgroundColor: Colors.clrSurfaceA10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	imageConatiner: {
		aspectRatio: 2 / 3,
		width: "100%",
	},
	image: {
		width: "auto",
		height: "100%",
		resizeMode: "stretch",
	},
	textContainer: {
		padding: 8,
	},
	title: {
		color: Colors.clrLightA0,
		fontFamily: "Baloo-Bold",
		fontSize: 16,
	},
	subtitle: {
		color: Colors.clrLightA0,
		fontSize: 12,
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
