import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    productDetailContainer: {
        paddingBottom: 35,
    },
    productDetailItem: {
        padding: 15,
        backgroundColor: COLORS.baseLight,
        borderRadius: 10,
        gap: 16,
    },
    name: {
        color: COLORS.white,
        fontSize: 22,
        backgroundColor: COLORS.base,
        paddingVertical: 12,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    imageContainer: {
        backgroundColor: COLORS.base,
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 250,
    },
    buyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buyCTA: {
        backgroundColor: COLORS.primary,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    buyBtn: {
        fontFamily: FONTS.medium,
        fontSize: 28,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 2,
        paddingVertical: 8,
        borderRadius: 8,
    },
    price: {
        fontSize: 28,
        color: COLORS.white,
    },
    priceCurrency: {
        fontSize: 18,
        marginBottom: 4,
        color: COLORS.white,
    },
    infoContainer: {
        gap: 10,
    },
    featuresContainer: {
        gap: 2,
    },
    featuresTitle: {
        color: COLORS.white,
        fontSize: 16,
        backgroundColor: COLORS.base,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.base,
    },
});
