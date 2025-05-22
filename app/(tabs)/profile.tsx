import { Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import Main from "@/components/main/Main";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileTotalsCard from "@/components/profile/ProfileTotalsCard";
import ShowcaseCard from "@/components/profile/ShowcaseCard";
import { Text } from "@/components/main/Text";
import { ScrollView } from "react-native";
import { profilePageStyles } from "@/constants/ui/GlobalStyles";
import Divider from "@/components/main/Divider";

export default function Profile() {
	const { isSignedIn } = useUser();

	if (!isSignedIn) {
		return <Redirect href="/" />;
	}

	return (
		<Main>
			<ScrollView
				contentContainerStyle={
					profilePageStyles.scrollContainer
				}
			>
				<ProfileCard />
				<Divider />
				<ProfileTotalsCard />
				<Divider />
				<ShowcaseCard />
			</ScrollView>
		</Main>
	);
}
