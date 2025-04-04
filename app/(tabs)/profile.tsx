import { Button } from "@/components/main/Button";
import Main from "@/components/main/Main";
import { Text } from "@/components/main/Text";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Profile() {
	const { signOut } = useAuth();
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.replace("/(auth)");
	};
	return (
		<Main>
			<Button onPress={handleSignOut}>Sign Out</Button>
			<Text>Bruh</Text>
		</Main>
	);
}
