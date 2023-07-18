import { View } from 'react-native';

import { styles } from './styles';
import { FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const ProductFeatures = ({ features }) => {
    return (
        <View style={styles.list}>
            <View>
                {features.map((feature) => {
                    return (
                        <CustomText
                            key={feature}
                            styles={styles.listItem}
                            font={FONTS.light}
                        >{`\u2022 ${feature}`}</CustomText>
                    );
                })}
            </View>
        </View>
    );
};
export default ProductFeatures;
