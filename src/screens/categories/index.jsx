import { FlatList } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import CATEGORIES from '../../constants/data/categories.json';

const Categories = ({ handleCategorySelect }) => {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => <CategoryItem {...item} handleCategorySelect={handleCategorySelect} />}
            keyExtractor={(item) => item.id}
            style={styles.categoriesContainer}
            contentContainerStyle={styles.categoriesList}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Categories;
