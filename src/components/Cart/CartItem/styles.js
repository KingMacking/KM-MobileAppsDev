import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 7,
        backgroundColor: COLORS.baseLight,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    image: {
        height: '100%',
        minHeight: 100,
        width: 100,
        backgroundColor: COLORS.base,
        borderRadius: 5,
    },
    information: {
        alignSelf: 'flex-start',
        gap: 6,
        marginEnd: 'auto',
        maxWidth: 205,
    },
    name: {
        fontSize: 16,
        color: COLORS.white,
        paddingVertical: 3,
        paddingHorizontal: 8,
        backgroundColor: COLORS.base,
        borderRadius: 5,
        width: '100%',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
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
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    increaseBtn: {
        color: COLORS.primary,
        fontSize: 20,
    },
    quantity: {
        color: COLORS.white,
        paddingVertical: 3,
        paddingHorizontal: 8,
        backgroundColor: COLORS.base,
        borderRadius: 5,
    },
    decreaseBtn: {
        color: COLORS.primary,
        fontSize: 20,
    },
    removeBtn: {
        color: COLORS.primary,
        fontSize: 28,
    },
});
