import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: COLORS.baseLight,
        borderRadius: 10,
        gap: 15,
        width: '48%',
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: COLORS.base,
        borderRadius: 5,
    },
    information: {
        gap: 15,
    },
    name: {
        backgroundColor: COLORS.base,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: COLORS.white,
        flex: 1,
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: 'row',
        gap: 2,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 6,
        alignSelf: 'flex-start',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 14,
    },
    currency: {
        fontSize: 10,
        marginBottom: 1,
    },
});
