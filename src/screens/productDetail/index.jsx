import { Image, ScrollView, View } from 'react-native';

import { styles } from './styles';
import { CustomText, ProductFeatures, ProductTags } from '../../components';
import PRODUCTS from '../../constants/data/products.json';
import { FONTS } from '../../themes';

const ProductDetail = ({ navigation, route }) => {
    const { prodId } = route.params;
    const product = PRODUCTS.find((prod) => prod.id === prodId);
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
                    <View style={styles.buyCTA}>
                        <CustomText font={FONTS.medium} styles={styles.buyBtn}>
                            Buy now
                        </CustomText>
                    </View>
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
