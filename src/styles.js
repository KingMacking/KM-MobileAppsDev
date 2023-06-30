import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#171717',
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
    },
});
