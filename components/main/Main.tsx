import React, { ReactNode } from "react";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { safeAreaView } from "@/constants/ui/GlobalStyles";

const Main = ({ children }: { children: ReactNode }) => {
	return (
		<SafeAreaProvider style={safeAreaView.container}>
			<SafeAreaView style={{ flex: 1 }}>
				{children}
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default Main;
