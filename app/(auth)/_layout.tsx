import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthRoutesLayout() {
	const { isSignedIn } = useUser();

	if (isSignedIn) {
		return <Redirect href="/(tabs)" />;
	}

	return (
		<Stack>
			<Stack.Screen
				options={{
					headerTransparent: true,
					headerShown: false,
				}}
				name="index"
			/>
		</Stack>
	);
}
