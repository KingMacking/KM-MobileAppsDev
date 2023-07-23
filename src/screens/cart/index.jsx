import { FlatList } from 'react-native';

import { styles } from './styles';
import { CartItem } from '../../components';
import CART from '../../constants/data/cart.json';

const Cart = () => {
    return (
        <FlatList
            data={CART}
            renderItem={({ item }) => <CartItem product={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container}
            contentContainerStyle={styles.list}
        />
    );
};
export default Cart;
