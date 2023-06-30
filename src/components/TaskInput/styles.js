import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#fcfcfc',
        marginBottom: 15,
        color: '#fcfcfc',
        paddingVertical: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        flex: 0.95,
        fontSize: 16,
        height: 40,
    },
});
