import { Text, View } from 'react-native';
import { useGetOrdersQuery } from '../../store/orders/api';

const Orders = () => {
    const { data, error, isLoading } = useGetOrdersQuery();
    return (
        <View>
            <Text>Hola</Text>
        </View>
    );
};
export default Orders;
