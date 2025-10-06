import { StyleSheet, Platform } from "react-native";
import Colors from "../Colors";

export const collectionModalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.clrSurfaceA0,
		justifyContent: "flex-start",
		alignItems: "center",
		paddingHorizontal: 24,
	},

	modalCard: {
		width: "100%",
		maxWidth: 400,
		backgroundColor: "transparent",
		padding: 32,
		alignItems: "center",
	},

	title: {
		fontSize: 28,
		fontWeight: "700",
		color: Colors.clrLightA0,
		marginBottom: 8,
		textAlign: "center",
		fontFamily: "Baloo-Bold",
	},

	subtitle: {
		fontSize: 16,
		color: Colors.clrSurfaceA50,
		marginBottom: 32,
		textAlign: "center",
		fontFamily: "Baloo-Regular",
	},

	previewCard: {
		marginBottom: 32,
		...Platform.select({
			ios: {
				shadowColor: Colors.clrPrimaryA0,
				shadowOffset: {
					width: 0,
					height: 4,
				},
				shadowOpacity: 0.15,
				shadowRadius: 8,
			},
			android: {
				elevation: 6,
			},
		}),
	},

	inputSection: {
		width: "100%",
		marginBottom: 20,
	},

	inputLabel: {
		fontSize: 14,
		fontWeight: "600",
		color: Colors.clrLightA0,
		marginBottom: 8,
		fontFamily: "Baloo-SemiBold",
	},

	inputWrapper: {
		backgroundColor: Colors.clrSurfaceA20,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: Colors.clrSurfaceA30,
		flexDirection: "row",
		alignItems: "center",
		...Platform.select({
			ios: {
				shadowColor: Colors.clrDarkA0,
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.1,
				shadowRadius: 4,
			},
			android: {
				elevation: 2,
			},
		}),
	},

	input: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 14,
		fontSize: 16,
		color: Colors.clrLightA0,
		fontFamily: "Baloo-Regular",
	},

	clearButton: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginRight: 8,
	},

	clearButtonText: {
		color: Colors.clrSurfaceA50,
		fontSize: 18,
		fontWeight: "600",
	},

	buttonContainer: {
		width: "100%",
		marginTop: 8,
	},

	primaryButton: {
		backgroundColor: Colors.clrPrimaryA0,
		borderRadius: 12,
		paddingVertical: 16,
		paddingHorizontal: 24,
		alignItems: "center",
		...Platform.select({
			ios: {
				shadowColor: Colors.clrPrimaryA0,
				shadowOffset: {
					width: 0,
					height: 4,
				},
				shadowOpacity: 0.3,
				shadowRadius: 8,
			},
			android: {
				elevation: 6,
			},
		}),
	},

	primaryButtonText: {
		color: Colors.clrLightA0,
		fontSize: 16,
		fontWeight: "600",
		fontFamily: "Baloo-SemiBold",
	},

	secondaryButton: {
		backgroundColor: "transparent",
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 24,
		alignItems: "center",
		borderWidth: 1,
		borderColor: Colors.clrSurfaceA30,
		marginTop: 12,
	},

	secondaryButtonText: {
		color: Colors.clrSurfaceA50,
		fontSize: 14,
		fontWeight: "500",
		fontFamily: "Baloo-Medium",
	},

	divider: {
		height: 1,
		backgroundColor: Colors.clrSurfaceA30,
		width: "100%",
		marginVertical: 24,
	},

	iconPreview: {
		width: 60,
		height: 60,
		backgroundColor: Colors.clrSurfaceA20,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 16,
		borderWidth: 2,
		borderColor: Colors.clrSurfaceA30,
	},

	iconText: {
		fontSize: 24,
		color: Colors.clrLightA0,
		fontFamily: "Baloo-Bold",
	},
});
