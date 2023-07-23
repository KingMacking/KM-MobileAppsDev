import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
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
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};
export default CartNavigator;
