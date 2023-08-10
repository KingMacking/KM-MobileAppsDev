import { View } from 'react-native';

import { styles } from './styles';
import { FONTS } from '../../themes';
import CustomText from '../CustomText';

const Label = ({ labelText, children }) => {
    return (
        <View>
            <CustomText styles={styles.label} font={FONTS.light}>
                {labelText}
            </CustomText>
            {children}
        </View>
    );
};
export default Label;
