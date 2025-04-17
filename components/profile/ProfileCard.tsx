import { View, Image } from "react-native";
import { Text } from "@/components/main/Text";
import { profileCardStyles } from "./ProfileCardStyles";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Button } from "../main/Button";

const ProfileCard = () => {
	const { signOut } = useAuth();
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.replace("/");
	};
	return (
		<View style={profileCardStyles.profileContainer}>
			<View style={profileCardStyles.profileHeaderContainer}>
				<View
					style={
						profileCardStyles.profileImageAndNameContainer
					}
				>
					<Image
						style={
							profileCardStyles.profileImage
						}
					/>
					<Text
						style={
							profileCardStyles.profileName
						}
					>
						Profile Name
					</Text>
				</View>
				<View style={profileCardStyles.followContainer}>
					<View
						style={
							profileCardStyles.followNumberContainer
						}
					>
						<View
							style={
								profileCardStyles.followTextContainer
							}
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
							style={
								profileCardStyles.followTextContainer
							}
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
					<View
						style={
							profileCardStyles.followButtonsContainer
						}
					>
						<Button
							style={
								profileCardStyles.followButton
							}
						>
							Edit Profile
						</Button>
						<Button
							style={
								profileCardStyles.shareButton
							}
						>
							<Image
								style={
									profileCardStyles.shareButtonImage
								}
								src="https://img.icons8.com/?size=100&id=c3Z8IwwzvmWR&format=png&color=ffffff"
							/>
						</Button>
					</View>
				</View>
			</View>
			<Text style={profileCardStyles.profileBio}>
				Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Nihil nam, ipsum neque
				inventore obcaecati
			</Text>
			{/* <Button onPress={handleSignOut}>Sign Out</Button> */}
		</View>
	);
};

export default ProfileCard;
