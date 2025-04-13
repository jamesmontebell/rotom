import { View, Image, ScrollView } from "react-native";
import { Text } from "@/components/main/Text";
import { profileCardStyles } from "./ProfileCardStyles";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const ProfileCard = () => {
	const { signOut } = useAuth();
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.replace("/");
	};
	return (
		<View style={profileCardStyles.profileContainer}>
			<View style={profileCardStyles.profileFollow}>
				<Image style={profileCardStyles.profileImage} />
				<View
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={
							profileCardStyles.followNumber
						}
					>
						69
					</Text>
					<Text
						style={
							profileCardStyles.followTitle
						}
					>
						Followers
					</Text>
				</View>
				<View
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={
							profileCardStyles.followNumber
						}
					>
						169
					</Text>
					<Text
						style={
							profileCardStyles.followTitle
						}
					>
						Following
					</Text>
				</View>
			</View>
			<View style={profileCardStyles.subContainer}>
				<Text style={profileCardStyles.profileName}>
					Profile Name
				</Text>
				<Text style={profileCardStyles.profileBio}>
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Ea temporibus iste
					recusandae quaerat est dolorem
					voluptatum. Assumenda nostrum fugit ab
					autem saepe neque nihil, quod totam sint
					maiores dicta voluptatibus!
				</Text>
			</View>
			{/* <Button onPress={handleSignOut}>Sign Out</Button> */}
		</View>
	);
};

export default ProfileCard;
