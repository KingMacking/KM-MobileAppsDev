import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { COLORS } from '../../../themes';

const SettingsBtn = ({ navigation }) => {
    return (
        <TouchableOpacity>
            <Ionicons
                name="settings-outline"
                size={24}
                color={COLORS.white}
                onPress={() => navigation.navigate('SettingsStack')}
            />
        </TouchableOpacity>
    );
};
export default SettingsBtn;
