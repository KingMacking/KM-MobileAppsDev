import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem, CustomText, EmptyCartBtn } from '../../components';
import { FONTS } from '../../themes';

const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    if (cart.length > 0) {
        return (
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartItem product={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.container}
                contentContainerStyle={styles.list}
                ListFooterComponent={EmptyCartBtn}
            />
        );
    }

    return (
        <CustomText font={FONTS.medium} styles={styles.cartIsEmptyText}>
            Nothing added to the cart...
        </CustomText>
    );
};
export default Cart;
