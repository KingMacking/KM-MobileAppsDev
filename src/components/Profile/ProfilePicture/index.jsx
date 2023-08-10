import { useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import ProfilePictureSelector from '../ProfilePictureSelector';

const ProfilePicture = ({ profileImage, handleSelection }) => {
    const [image, setImage] = useState(null);
    return (
        <View style={styles.imageContainer}>
            {image || profileImage ? (
                <Image source={{ uri: image || profileImage }} style={styles.image} resizeMode="contain" />
            ) : (
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                    }}
                />
            )}
            <ProfilePictureSelector handleSelection={handleSelection} setImage={setImage} />
        </View>
    );
};
export default ProfilePicture;
