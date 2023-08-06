import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem, CustomText, EmptyCartBtn } from '../../components';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../store/cart/cart.slice';
import { FONTS } from '../../themes';

const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
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
