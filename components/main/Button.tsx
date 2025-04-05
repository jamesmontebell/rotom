import { Pressable, PressableProps, Text, ViewStyle } from "react-native";

import Colors from "@/constants/Colors";

export function Button({ children, style, ...props }: PressableProps) {
	return (
		<Pressable
			style={[
				{
					backgroundColor: Colors.clrLightA0,
					padding: 8,
					borderRadius: 14,
					width: "100%",
				},
				style as ViewStyle,
			]}
			{...props}
		>
			{typeof children === "string" ? (
				<Text
					style={{
						color: Colors.clrDarkA0,
						textAlign: "center",
						fontWeight: "500",
					}}
				>
					{children}
				</Text>
			) : (
				children
			)}
		</Pressable>
	);
}
