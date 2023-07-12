import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { COLORS, FONTS } from '../../themes';
import CustomText from '../CustomText';

const GoBack = ({ handleGoBack }) => {
    return (
        <TouchableOpacity style={styles.goBackContainer} onPress={handleGoBack}>
            <Ionicons name="arrow-back-circle" color={COLORS.primary} size={36} />
            <CustomText styles={styles.goBackText} font={FONTS.light}>
                Go back
            </CustomText>
        </TouchableOpacity>
    );
};
export default GoBack;
