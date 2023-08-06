import { ActivityIndicator, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { CustomText, ProductFeatures, ProductTags } from '../../components';
import { addToCart } from '../../store/cart/cart.slice';
import { useGetProductByIdQuery } from '../../store/products/api';
import { COLORS, FONTS } from '../../themes';

const ProductDetail = ({ navigation, route }) => {
    const { prodId } = route.params;
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetProductByIdQuery(prodId);
    const product = data?.find((prod) => prod.id === prodId);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        );
    }

    return (
        <ScrollView nestedScrollEnabled style={styles.container} contentContainerStyle={styles.productDetailContainer}>
            <View style={styles.productDetailItem}>
                <CustomText styles={styles.name} font={FONTS.regular} numberOfLines={2}>
                    {product.name}
                </CustomText>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
                </View>
                <View style={styles.buyContainer}>
                    <View style={styles.priceContainer}>
                        <CustomText styles={styles.price} font={FONTS.bold}>
                            {product.price}
                        </CustomText>
                        <CustomText styles={styles.priceCurrency} font={FONTS.light}>
                            {product.currency.code}
                        </CustomText>
                    </View>
                    <TouchableOpacity onPress={handleAddToCart} style={styles.buyCTA}>
                        <CustomText font={FONTS.medium} styles={styles.buyBtn}>
                            Add to cart
                        </CustomText>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                    <View>
                        <ProductTags tags={product.tags} />
                    </View>
                    <View style={styles.featuresContainer}>
                        <CustomText styles={styles.featuresTitle} font={FONTS.medium}>
                            Features:
                        </CustomText>
                        <ProductFeatures features={product.features} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
export default ProductDetail;
