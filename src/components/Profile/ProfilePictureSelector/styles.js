import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    cameraBtn: {
        backgroundColor: COLORS.base,
        borderRadius: 500,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 5,
        bottom: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.primary,
    },
    camerIcon: {
        padding: 8,
    },
});
