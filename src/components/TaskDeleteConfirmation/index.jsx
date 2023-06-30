import { Button, Text, View } from 'react-native';

import { styles } from './styles';
import CustomModal from '../CustomModal';

const TaskDeleteConfirmation = ({ isVisible, handleIsVisible, handleTaskDelete, selectedTask }) => {
    return (
        <CustomModal isVisible={isVisible}>
            <Text style={styles.modalTitle}>Delete task</Text>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailMessage}>
                    Are you sure you want to delete this task ?
                </Text>
                <Text style={styles.modalDetailTask}>{selectedTask?.task}</Text>
            </View>
            <View style={styles.modalButtonsContainer}>
                <Button title="Cancel" color="#4c4c4c" onPress={() => handleIsVisible(false)} />
                <Button
                    title="Delete"
                    color="red"
                    onPress={() => handleTaskDelete(selectedTask?.id)}
                />
            </View>
        </CustomModal>
    );
};
export default TaskDeleteConfirmation;
