import { Image, View } from 'react-native';

import { styles } from './style';
import { FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const ProductItem = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image resizeMode="cover" style={styles.image} source={{ uri: product.image }} />
            <View style={styles.information}>
                <CustomText numberOfLines={1} font={FONTS.light} styles={styles.name}>
                    {product.name}
                </CustomText>
                <View style={styles.priceContainer}>
                    <CustomText font={FONTS.bold} styles={styles.price}>
                        ${product.price}
                    </CustomText>
                    <CustomText font={FONTS.medium} styles={styles.currency}>
                        {product.currency.code}
                    </CustomText>
                </View>
            </View>
        </View>
    );
};
export default ProductItem;
