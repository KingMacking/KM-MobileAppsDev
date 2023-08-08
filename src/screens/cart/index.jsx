import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartFooter, CartItem, CustomText } from '../../components';
import { decreaseQuantity, emptyCart, increaseQuantity, removeFromCart } from '../../store/cart/cart.slice';
import { useCreateOrderMutation } from '../../store/orders/api';
import { FONTS } from '../../themes';

const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const [createOrder, { data, isError, error, isLoading }] = useCreateOrderMutation();
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

    const handleCreateOrder = async () => {
        const order = {
            id: Math.floor(Math.random() * 1000),
            items: cart,
            total,
            user: {
                id: 1,
                name: 'John Doe',
                addres: '123 Street',
                phone: '123456789',
                email: 'johndoe@mail.com',
            },
            createdAt: Date.now(),
            finishedAt: '',
        };
        try {
            await createOrder(order);
            dispatch(emptyCart());
            navigation.navigate('OrdersTabs');
        } catch (error) {
            console.warn({ error });
        }
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
                ListFooterComponent={
                    <CartFooter
                        handleEmptyCart={handleEmptyCart}
                        total={total}
                        currency="USD"
                        handleCreateOrder={handleCreateOrder}
                    />
                }
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
