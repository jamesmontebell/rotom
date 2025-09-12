import { Pressable, PressableProps, Text, ViewStyle } from "react-native";
import Colors from "@/constants/Colors";

export function Button({ children, style, ...props }: PressableProps) {
	return (
		<Pressable
			style={({ pressed }) => [
				{
					backgroundColor: Colors.clrLightA0,
					borderRadius: 8,
					paddingHorizontal: 16,
					paddingVertical: 10,
					opacity: pressed ? 0.6 : 1, // 👈 Opacity on press
					transition: "opacity 150ms",
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
