import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CustomText, ProfilePicture } from '../../components';
import { useGetProfileQuery, useUploadProfilePictureMutation } from '../../store/settings/api';
import { COLORS, FONTS } from '../../themes';

const Profile = () => {
    const localId = useSelector((state) => state.auth.user.localId);
    const [updatePicture, { isLoading }] = useUploadProfilePictureMutation();
    const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });
    const handleSelection = async (base64) => {
        await updatePicture({ localId, image: `data:image/jpeg;base64,${base64}` });
    };
    return (
        <View style={styles.container}>
            <CustomText font={FONTS.regular}>Hola</CustomText>
            <ProfilePicture handleSelection={handleSelection} profileImage={userData?.profileImage} />
            {(isLoading || isLoadingUserData) && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator color={COLORS.primary} size="large" isLoading={isLoading} />
                </View>
            )}
        </View>
    );
};
export default Profile;
