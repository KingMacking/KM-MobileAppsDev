import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        rowGap: 8,
    },
    listItem: {
        borderColor: COLORS.primary,
        borderStyle: 'solid',
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 3,
        color: COLORS.white,
        borderRadius: 4,
    },
});
