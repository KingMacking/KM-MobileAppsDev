import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { CustomText, GoBack, Input, ProductItem } from '../../components';
import PRODUCTS from '../../constants/data/products.json';
import { COLORS, FONTS } from '../../themes';

const Products = ({ categoryId, handleGoBack }) => {
    const [search, setSearch] = useState('');
    const [borderColor, setBorderColor] = useState(COLORS.grey);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleFocus = () => {
        setBorderColor(COLORS.primary);
    };
    const handleBlur = () => {
        setBorderColor(COLORS.grey);
    };
    const handleTextChange = (text) => {
        setSearch(text);
        filterBySearch(text);
    };
    const clearSearch = () => {
        setSearch('');
        setFilteredProducts([]);
    };

    const categoryProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

    const filterBySearch = (query) => {
        let updatedProducts = [...categoryProducts];
        updatedProducts = updatedProducts.filter((product) => {
            return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredProducts(updatedProducts);
    };

    return (
        <View style={styles.container}>
            <GoBack handleGoBack={handleGoBack} />
            <View style={styles.inputContainer}>
                <Input
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                    handleTextChange={handleTextChange}
                    value={search}
                    placeholder="Samsung, Apple, TV, Smartwatch..."
                    borderColor={borderColor}
                />
                {search.length > 0 && (
                    <Ionicons
                        style={styles.clearInput}
                        onPress={clearSearch}
                        name="close-circle"
                        size={36}
                        color={COLORS.primary}
                    />
                )}
            </View>
            <FlatList
                data={search.length > 0 ? filteredProducts : categoryProducts}
                renderItem={({ item }) => <ProductItem product={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.listContainer}
                contentContainerStyle={styles.list}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            {filteredProducts.length === 0 && search.length > 0 && (
                <CustomText font={FONTS.medium} styles={styles.notFoundText}>
                    No products found
                </CustomText>
            )}
        </View>
    );
};
export default Products;