import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: COLORS.base,
    },
    list: {
        padding: 15,
        gap: 10,
    },
});
