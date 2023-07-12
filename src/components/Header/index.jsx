import { View } from 'react-native';

import { styles } from './styles';
import { FONTS } from '../../themes';
import CustomText from '../CustomText';

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <CustomText font={FONTS.bold} styles={styles.title}>
                {title}
            </CustomText>
        </View>
    );
};
export default Header;
