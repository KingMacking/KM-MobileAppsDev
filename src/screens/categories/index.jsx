import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {
    const categories = useSelector((state) => state.categories.data);
    const handleCategorySelect = ({ categoryId, categoryName }) => {
        navigation.navigate('Products', { categoryId, categoryName });
    };
    return (
        <FlatList
            data={categories}
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
