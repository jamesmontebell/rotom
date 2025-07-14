import { Text } from "@/components/main/Text";
import { View } from "react-native";
import { profileTotalsCardStyles } from "./ProfileTotalsCardStyles";

const ProfileTotalsCard = () => {
	return (
		<View style={profileTotalsCardStyles.profileCardContainer}>
			<View style={profileTotalsCardStyles.valueContainer}>
				<Text
					style={
						profileTotalsCardStyles.valueNumber
					}
				>
					$5000
				</Text>
				<Text
					style={
						profileTotalsCardStyles.valueTitle
					}
				>
					Total Value
				</Text>
			</View>
			<View style={profileTotalsCardStyles.valueContainer}>
				<Text
					style={
						profileTotalsCardStyles.valueNumber
					}
				>
					169
				</Text>
				<Text
					style={
						profileTotalsCardStyles.valueTitle
					}
				>
					Cards
				</Text>
			</View>
			<View style={profileTotalsCardStyles.valueContainer}>
				<Text
					style={
						profileTotalsCardStyles.valueNumber
					}
				>
					3
				</Text>
				<Text
					style={
						profileTotalsCardStyles.valueTitle
					}
				>
					Collections
				</Text>
			</View>
		</View>
	);
};

export default ProfileTotalsCard;
