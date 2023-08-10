import { Image, View } from 'react-native';

import { styles } from './styles';
import ProfilePictureSelector from '../ProfilePictureSelector';

const ProfilePicture = ({ profileImage, handleSelection }) => {
    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: profileImage }} style={styles.image} resizeMode="contain" />
            <ProfilePictureSelector handleSelection={handleSelection} />
        </View>
    );
};
export default ProfilePicture;
