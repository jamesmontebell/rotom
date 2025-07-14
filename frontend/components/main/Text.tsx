import React from "react";

import { Text as RText, TextProps } from "react-native";

import Colors from "../../constants/Colors";

interface CustomTextProps extends TextProps {
	children: React.ReactNode;
}

export function Text({ children, style, ...props }: CustomTextProps) {
	return (
		<RText style={[{ color: Colors.clrLightA0 }, style]} {...props}>
			{children}
		</RText>
	);
}
