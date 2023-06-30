import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

const TaskInput = ({
    borderColor,
    handleAddTask,
    handleFocus,
    handleBlur,
    handleChangeText,
    task,
}) => {
    return (
        <>
            <Text style={styles.title}>Add task:</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { borderColor }]}
                    placeholder="Task..."
                    placeholderTextColor="#4c4c4c"
                    autoCapitalize="none"
                    autoCorrect={false}
                    cursorColor="#fcfcfc"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={task}
                    onChangeText={(text) => handleChangeText(text)}
                />
                <Button title="Add" color="#E98102" onPress={handleAddTask} />
            </View>
        </>
    );
};

export default TaskInput;
