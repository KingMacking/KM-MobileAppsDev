import { StyleSheet } from 'react-native';

import { COLORS } from './themes';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.base,
    },
});
