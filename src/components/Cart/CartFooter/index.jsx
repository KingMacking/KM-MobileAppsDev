import { TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { FONTS } from '../../../themes';
import CustomText from '../../CustomText';

const CartFooter = ({ handleEmptyCart, handleCreateOrder, total, currency }) => {
    return (
        <View style={styles.cartFooterContainer}>
            <View style={styles.totalContainer}>
                <CustomText font={FONTS.medium} styles={styles.totalText}>
                    Total:
                </CustomText>
                <View style={styles.priceContainer}>
                    <CustomText font={FONTS.medium} styles={styles.totalPrice}>
                        {total}
                    </CustomText>
                    <CustomText font={FONTS.medium} styles={styles.currency}>
                        {currency}
                    </CustomText>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.emptyCartBtn} onPress={handleEmptyCart}>
                    <CustomText font={FONTS.medium} styles={styles.emptyCartBtnText}>
                        Empty cart
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkoutBtn} onPress={handleCreateOrder}>
                    <CustomText font={FONTS.medium} styles={styles.checkoutBtnText}>
                        Checkout
                    </CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default CartFooter;
