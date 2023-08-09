import { View } from 'react-native';

import { styles } from './styles';
import { CustomText } from '../../components';
import { FONTS } from '../../themes';

const Settings = () => {
    return (
        <View style={styles.container}>
            <CustomText font={FONTS.regular}>Hola</CustomText>
        </View>
    );
};
export default Settings;
