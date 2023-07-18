import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './style';
import { FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const ProductItem = ({ product, handleProductSelect }) => {
    return (
        <TouchableOpacity onPress={() => handleProductSelect(product.id)} style={styles.container}>
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
        </TouchableOpacity>
    );
};
export default ProductItem;
