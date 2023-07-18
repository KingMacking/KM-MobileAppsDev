import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    list: {
        gap: 6,
        backgroundColor: COLORS.base,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
    },
    listItem: {
        color: COLORS.white,
    },
});
