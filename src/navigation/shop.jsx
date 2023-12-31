import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsNavigator from './settings';
import { SettingsBtn } from '../components';
import { Categories, ProductDetail, Products } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={({ navigation }) => ({
                contentStyle: { backgroundColor: COLORS.base },
                headerStyle: { backgroundColor: COLORS.baseLight },
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: FONTS.bold,
                },
                animation: 'fade_from_bottom',
                headerRight: () => <SettingsBtn navigation={navigation} />,
            })}
        >
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen
                name="Products"
                component={Products}
                options={({ navigation, route }) => ({
                    title: route.params.categoryName,
                })}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={() => ({
                    title: 'Product',
                })}
            />
            <Stack.Screen name="SettingsStack" component={SettingsNavigator} options={() => ({ headerShown: false })} />
        </Stack.Navigator>
    );
};

export default ShopNavigator;
