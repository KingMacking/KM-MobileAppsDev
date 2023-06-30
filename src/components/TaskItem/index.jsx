import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const TaskItem = ({ handlePress, item, handleLongPress }) => {
    return (
        <TouchableOpacity
            onPress={() => handlePress(item)}
            onLongPress={() => handleLongPress(item)}
            style={item.completed ? styles.itemContainerCompleted : styles.itemContainer}
        >
            <Text style={item.completed ? styles.itemCompleted : styles.item}>{item.task}</Text>
        </TouchableOpacity>
    );
};
export default TaskItem;
