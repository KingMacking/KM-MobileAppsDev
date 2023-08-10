import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsGoBackBtn } from '../components';
import { Adress, Profile, Settings } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={({ navigation }) => ({
                contentStyle: { backgroundColor: COLORS.base },
                headerStyle: { backgroundColor: COLORS.baseLight },
                headerTintColor: COLORS.white,
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: FONTS.bold,
                },
                animation: 'fade_from_bottom',
                headerLeft: () => <SettingsGoBackBtn navigation={navigation} />,
            })}
        >
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Adress" component={Adress} />
        </Stack.Navigator>
    );
};
export default SettingsNavigator;
