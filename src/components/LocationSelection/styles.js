import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.base,
        padding: 20,
        justifyContent: 'center',
    },
    preview: {
        height: 200,
        borderColor: COLORS.baseLight,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 7,
    },
    noLocationText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 16,
    },
    locationText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 20,
    },
    getLocationBtn: {},
    getLocationText: {
        color: COLORS.black,
        backgroundColor: COLORS.primary,
        textAlign: 'center',
        borderRadius: 7,
        paddingVertical: 15,
        fontSize: 18,
    },
});
