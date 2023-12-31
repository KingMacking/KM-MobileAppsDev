import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    list: {
        gap: 15,
        paddingVertical: 15,
    },
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
    cartIsEmptyText: {
        color: 'white',
        marginTop: 80,
        textAlign: 'center',
        fontSize: 18,
    },
});
