import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderStyle: 'solid',
        borderRadius: 7,
        color: COLORS.white,
        fontSize: 16,
        fontFamily: FONTS.regular,
    },
});
