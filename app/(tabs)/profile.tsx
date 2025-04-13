import { Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import Main from "@/components/main/Main";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileTotalsCard from "@/components/profile/ProfileTotalsCard";
import ShowcaseCard from "@/components/profile/ShowcaseCard";
import { ScrollView } from "react-native";
import { profilePageStyles } from "@/constants/ui/GlobalStyles";

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
				<ProfileTotalsCard />
				<ShowcaseCard />
			</ScrollView>
		</Main>
	);
}
