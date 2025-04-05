import { useRouter } from "expo-router";

import { useAuth } from "@clerk/clerk-expo";

import Main from "@/components/main/Main";
import { Button } from "@/components/main/Button";
import { Text } from "@/components/main/Text";

export default function Profile() {
	const { signOut } = useAuth();
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.replace("/");
	};
	return (
		<Main>
			<Button onPress={handleSignOut}>Sign Out</Button>
			<Text>Bruh</Text>
		</Main>
	);
}
