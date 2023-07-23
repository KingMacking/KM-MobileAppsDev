import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Orders } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                contentStyle: { backgroundColor: COLORS.base },
                headerStyle: { backgroundColor: COLORS.baseLight },
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: FONTS.bold,
                },
                animation: 'fade_from_bottom',
            }}
        >
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    );
};
export default OrdersNavigator;
