import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        gap: 10,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderStyle: 'solid',
        borderRadius: 7,
        color: COLORS.white,
        backgroundColor: COLORS.base,
        fontSize: 16,
        fontFamily: FONTS.regular,
    },
    errorText: {
        backgroundColor: 'red',
        color: COLORS.white,
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        opacity: 0.8,
    },
});
