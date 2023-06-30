import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },
    modalDetailContainer: {
        paddingVertical: 15,
    },
    modalDetailMessage: {
        textAlign: 'center',
        color: 'white',
    },
    modalDetailTask: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 15,
        color: 'white',
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        gap: 35,
    },
});
