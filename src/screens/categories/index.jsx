import { ActivityIndicator, FlatList, View } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes';

const Categories = ({ navigation }) => {
    // const categories = useSelector((state) => state.categories.data);
    const { data, error, isLoading } = useGetCategoriesQuery();
    const handleCategorySelect = ({ categoryId, categoryName }) => {
        navigation.navigate('Products', { categoryId, categoryName });
    };

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        );
    }
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <CategoryItem
                    {...item}
                    handleCategorySelect={() => handleCategorySelect({ categoryId: item.id, categoryName: item.name })}
                />
            )}
            keyExtractor={(item) => item.id}
            style={styles.categoriesContainer}
            contentContainerStyle={styles.categoriesList}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Categories;
