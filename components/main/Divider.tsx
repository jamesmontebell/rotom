import Colors from "@/constants/Colors";
import { View } from "react-native";

export default function Divider() {
	return (
		<View
			style={{
				height: 1,
				backgroundColor: Colors.clrSurfaceA10, // light, subtle divider
				marginVertical: 16, // space above and below
			}}
		/>
	);
}
