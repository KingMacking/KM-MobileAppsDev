import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#E98102',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    item: {
        fontSize: 16,
        fontWeight: '500',
        color: '#171717',
    },
    itemContainerCompleted: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: '#23D555',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    itemCompleted: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 16,
        fontWeight: '500',
        color: '#5c5c5c',
    },
});
