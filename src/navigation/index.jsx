import { NavigationContainer } from '@react-navigation/native';

import TabsNavigator from './tabs';

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    );
};

export default RootNavigator;
