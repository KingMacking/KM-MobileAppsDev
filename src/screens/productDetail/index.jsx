import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CustomText, ProductFeatures, ProductTags } from '../../components';
import { addToCart } from '../../store/cart/cart.slice';
import { FONTS } from '../../themes';

const ProductDetail = ({ navigation, route }) => {
    const { prodId } = route.params;
    const products = useSelector((state) => state.products.data);
    const product = products.find((prod) => prod.id === prodId);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

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
