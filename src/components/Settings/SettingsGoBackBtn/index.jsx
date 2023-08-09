import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { styles } from './style';
import { COLORS } from '../../../themes';

const SettingsGoBackBtn = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.icon}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} onPress={() => navigation.goBack()} />
        </TouchableOpacity>
    );
};
export default SettingsGoBackBtn;
