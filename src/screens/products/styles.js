import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    list: {
        gap: 15,
        paddingBottom: 20,
        paddingTop: 15,
    },
    clearInput: {
        position: 'absolute',
        right: 15,
        zIndex: 2,
    },
    notFoundText: {
        color: COLORS.white,
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
    },
});
