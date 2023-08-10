import { Ionicons } from '@expo/vector-icons';
import { View, Image } from 'react-native';

import { styles } from './styles';
import { FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const CartItem = ({ product, handleRemoveFromCart, handleDecreaseQuantity, handleIncreaseQuantity }) => {
    return (
        <View style={styles.container}>
            <Image resizeMode="cover" style={styles.image} source={{ uri: product.image }} />
            <View style={styles.information}>
                <CustomText numberOfLines={1} font={FONTS.medium} styles={styles.name}>
                    {product.name}
                </CustomText>
                <View style={styles.details}>
                    <View style={styles.priceContainer}>
                        <CustomText font={FONTS.bold} styles={styles.price}>
                            ${product.price}
                        </CustomText>
                        <CustomText font={FONTS.medium} styles={styles.currency}>
                            {product.currency.code}
                        </CustomText>
                    </View>
                    <View style={styles.quantityContainer}>
                        <Ionicons
                            onPress={() => handleIncreaseQuantity(product.id)}
                            name="add-circle"
                            style={styles.increaseBtn}
                        />
                        <CustomText font={FONTS.regular} styles={styles.quantity}>
                            {product.quantity}
                        </CustomText>
                        <Ionicons
                            onPress={() => handleDecreaseQuantity(product.id)}
                            name="remove-circle"
                            style={styles.decreaseBtn}
                        />
                    </View>
                </View>
            </View>
            <Ionicons onPress={() => handleRemoveFromCart(product.id)} name="close-circle" style={styles.removeBtn} />
        </View>
    );
};
export default CartItem;
