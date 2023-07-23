import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { COLORS, FONTS } from '../themes';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONTS.regular,
                    fontSize: 14,
                },
                tabBarStyle: {
                    backgroundColor: COLORS.baseLight,
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarItemStyle: {
                    paddingVertical: 5,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarIconStyle: {
                    fontSize: 26,
                },
            }}
        >
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={() => ({
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                    ),
                })}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
                options={() => ({
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
                    ),
                    tabBarBadge: 1,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.primary,
                        fontFamily: FONTS.bold,
                        alignItems: 'center',
                        lineHeight: 21,
                        fontSize: 12,
                        top: -2,
                        width: 22,
                        height: 22,
                        borderStyle: 'solid',
                        borderWidth: 3,
                        paddingHorizontal: 4,
                        justifyContent: 'center',
                        borderRadius: 100,
                        borderColor: COLORS.baseLight,
                    }
                })}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={() => ({
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'receipt' : 'receipt-outline'} size={size} color={color} />
                    ),
                })}
            />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;
