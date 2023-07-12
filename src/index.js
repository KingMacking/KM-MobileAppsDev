import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';

import { Header } from './components';
import { Categories, Products } from './screens';
import { styles } from './styles';
import { COLORS, FONTS } from './themes';

export default function App() {
    const [loaded] = useFonts({
        [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
        [FONTS.medium]: require('../assets/fonts/Inter-Medium.ttf'),
        [FONTS.bold]: require('../assets/fonts/Inter-Bold.ttf'),
        [FONTS.light]: require('../assets/fonts/Inter-Light.ttf'),
    });
    const [isCategorySelected, setIsCategorySelected] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const headerTitle = isCategorySelected ? 'Products' : 'Categories';

    const handleGoBack = () => {
        setIsCategorySelected(!isCategorySelected);
        setSelectedCategory(null);
    };
    const handleSelectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
        setIsCategorySelected(!isCategorySelected);
    };

    if (!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title={headerTitle} />
                {isCategorySelected ? (
                    <Products handleGoBack={handleGoBack} categoryId={selectedCategory} />
                ) : (
                    <Categories handleCategorySelect={handleSelectCategory} />
                )}
            </View>
        </SafeAreaView>
    );
}
