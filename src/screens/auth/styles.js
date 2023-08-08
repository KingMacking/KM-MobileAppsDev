import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: COLORS.base,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: COLORS.baseLight,
        width: '100%',
        borderRadius: 10,
        padding: 15,
    },
    header: {
        color: COLORS.white,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: COLORS.base,
        borderRadius: 7,
        paddingVertical: 10,
    },
    inputContainer: {
        width: '100%',
        gap: 10,
        marginTop: 20,
    },
    label: {
        color: COLORS.white,
        fontSize: 18,
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
    linkContainer: {
        width: '100%',
        marginVertical: 15,
    },
    linkBtnText: {
        width: '100%',
        color: COLORS.white,
        textAlign: 'center',
    },
    actionBtnContainer: {
        width: '100%',
        marginTop: 20,
    },
    actionBtnText: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        fontSize: 25,
        borderRadius: 7,
        paddingVertical: 10,
    },
});
