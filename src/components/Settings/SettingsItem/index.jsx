import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { COLORS, FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const SettingsItem = ({ title, icon, route, handleNavigation }) => {
    return (
        <TouchableOpacity onPress={() => handleNavigation(route)} style={styles.itemContainer}>
            <Ionicons name={icon} size={20} color={COLORS.white} style={styles.icon} />
            <CustomText font={FONTS.medium} styles={styles.itemText}>
                {title}
            </CustomText>
        </TouchableOpacity>
    );
};
export default SettingsItem;
