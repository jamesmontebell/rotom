import Main from "@/components/main/Main";
import React, { useState } from "react";
import { Text } from "@/components/main/Text";
import { signInScreen } from "@/constants/ui/GlobalStyles";
import { View, Image } from "react-native";
import { Button } from "@/components/main/Button";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { isClerkAPIResponseError, useSSO } from "@clerk/clerk-expo";
import { ClerkAPIError } from "@clerk/types";

WebBrowser.maybeCompleteAuthSession();

const Index = () => {
	const { startSSOFlow } = useSSO();
	const [errors, setErrors] = useState<ClerkAPIError[]>([]);

	const handleSignInWithGoogle = React.useCallback(async () => {
		try {
			const { createdSessionId, setActive, signIn, signUp } =
				await startSSOFlow({
					strategy: "oauth_google",
					redirectUrl:
						AuthSession.makeRedirectUri(),
				});

			if (createdSessionId) {
				setActive!({ session: createdSessionId });
			} else {
				// If there is no `createdSessionId`,
				// there are missing requirements, such as MFA
				// Use the `signIn` or `signUp` returned from `startSSOFlow`
				// to handle next steps
			}
		} catch (err) {
			if (isClerkAPIResponseError(err)) setErrors(err.errors);
			console.error(JSON.stringify(err, null, 2));
		}
	}, []);

	return (
		<Main>
			<View style={signInScreen.container}>
				<Image
					style={signInScreen.logo}
					src="https://img.pokemondb.net/sprites/black-white/shiny/rotom.png"
				/>
				<Text style={signInScreen.title}>Rotom</Text>
				<Text style={signInScreen.subTitle}>
					The Ultimate TCG Tracker, Powered by
					Rotom!
				</Text>
				{errors.map((error) => (
					<Text
						style={{ color: "red" }}
						key={error.code}
					>
						{error.message}
					</Text>
				))}
				<Button
					onPress={handleSignInWithGoogle}
					style={signInScreen.buttonContainer}
				>
					<Image
						style={signInScreen.buttonLogo}
						src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
					/>
					<Text style={signInScreen.buttonText}>
						Sign in with Google
					</Text>
				</Button>
			</View>
		</Main>
	);
};

export default Index;
