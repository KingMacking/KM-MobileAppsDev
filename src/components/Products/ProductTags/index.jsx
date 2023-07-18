import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const ProductTags = ({ tags }) => {
    return (
        <View style={styles.list}>
            {tags.map((tag) => {
                return (
                    <CustomText key={tag} styles={styles.listItem} font={FONTS.light}>
                        #{tag}
                    </CustomText>
                );
            })}
        </View>
    );
};
export default ProductTags;
