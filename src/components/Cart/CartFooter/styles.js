import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    cartFooterContainer: {
        marginHorizontal: 5,
    },
    totalContainer: {
        borderTopWidth: 2,
        borderTopColor: COLORS.primary,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalText: {
        fontSize: 18,
        color: COLORS.white,
    },
    priceContainer: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'flex-end',
    },
    totalPrice: {
        fontSize: 18,
        color: COLORS.white,
    },
    currency: {
        fontSize: 14,
        color: COLORS.white,
        marginBottom: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    emptyCartBtn: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        width: 170,
        textAlign: 'center',
    },
    checkoutBtn: {
        backgroundColor: COLORS.primary,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        width: 170,
        textAlign: 'center',
    },
    emptyCartBtnText: {
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.white,
    },
    checkoutBtnText: {
        fontSize: 20,
        textAlign: 'center',
    },
});
