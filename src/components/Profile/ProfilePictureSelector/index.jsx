import { Ionicons } from '@expo/vector-icons';
import { requestCameraPermissionsAsync, launchCameraAsync, MediaTypeOptions } from 'expo-image-picker';
import { Alert, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes';

const ProfilePictureSelector = ({ handleSelection, setImage }) => {
    const getPermissions = async () => {
        const { status } = await requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Insufficient permissions', 'You need to grant camera permission to use this feature.', [
                { text: 'Grant permissions' },
            ]);
            return false;
        }
        return true;
    };

    const handleImageTaking = async () => {
        const hasCameraPermissions = await getPermissions();
        if (!hasCameraPermissions) return;
        const result = await launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
            base64: true,
            mediaTypes: MediaTypeOptions.Images,
        });
        await handleSelection(result.assets[0].base64);
    };
    return (
        <TouchableOpacity style={styles.cameraBtn} onPress={handleImageTaking}>
            <Ionicons style={styles.camerIcon} name="camera" size={16} color={COLORS.primary} />
        </TouchableOpacity>
    );
};
export default ProfilePictureSelector;
