import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: COLORS.baseLight,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderRadius: 7,
    },
    icon: {
        color: COLORS.primary,
        fontSize: 24,
    },
    itemText: {
        color: COLORS.white,
        fontSize: 20,
    },
});
