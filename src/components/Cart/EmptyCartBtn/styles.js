import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    emptyCartBtn: {
        backgroundColor: COLORS.primary,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        marginHorizontal: 40,
        marginVertical: 10,
    },
    emptyCartBtnText: {
        fontSize: 20,
        textAlign: 'center',
    },
});
