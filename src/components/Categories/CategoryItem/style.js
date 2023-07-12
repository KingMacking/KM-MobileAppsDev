import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 7,
        backgroundColor: COLORS.baseLight,
    },
    backgroundImage: {
        width: '100%',
        height: 140,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        paddingHorizontal: 15,
        color: COLORS.white,
    },
});
