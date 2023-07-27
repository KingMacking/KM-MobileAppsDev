import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigation';
import { store } from './store';
import { styles } from './styles';
import { COLORS, FONTS } from './themes';

export default function App() {
    const [loaded] = useFonts({
        [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
        [FONTS.medium]: require('../assets/fonts/Inter-Medium.ttf'),
        [FONTS.bold]: require('../assets/fonts/Inter-Bold.ttf'),
        [FONTS.light]: require('../assets/fonts/Inter-Light.ttf'),
    });

    if (!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        );
    }

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.safeArea}>
                <RootNavigator />
            </SafeAreaView>
        </Provider>
    );
}
