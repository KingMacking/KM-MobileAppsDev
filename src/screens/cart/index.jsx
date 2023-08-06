import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartFooter, CartItem, CustomText } from '../../components';
import { decreaseQuantity, emptyCart, increaseQuantity, removeFromCart } from '../../store/cart/cart.slice';
import { FONTS } from '../../themes';

const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity({ id }));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity({ id }));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const handleEmptyCart = () => {
        dispatch(emptyCart());
    };
    if (cart.length > 0) {
        return (
            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <CartItem
                        product={item}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                style={styles.container}
                contentContainerStyle={styles.list}
                ListFooterComponent={<CartFooter handleEmptyCart={handleEmptyCart} total={total} currency="USD" />}
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
