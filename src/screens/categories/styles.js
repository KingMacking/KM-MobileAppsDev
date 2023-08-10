import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
    categoriesList: {
        gap: 15,
        paddingBottom: 30,
    },
    categoriesContainer: {
        padding: 15,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.base,
    },
});
