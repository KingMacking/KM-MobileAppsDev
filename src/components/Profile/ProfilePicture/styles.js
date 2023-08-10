import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        width: 150,
        height: 150,
        backgroundColor: COLORS.baseLight,
        borderRadius: 500,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 500,
    },
});
