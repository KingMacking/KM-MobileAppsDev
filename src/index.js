import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { TaskDeleteConfirmation, TaskInput, TaskItem, TasksList } from './components';
import { styles } from './styles';

export default function App() {
    const [tasksList, setTasksList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [borderColor, setBorderColor] = useState('#6c6c6c');
    const [task, setTask] = useState('');

    const handleFocus = () => {
        setBorderColor('#E98102');
    };

    const handleBlur = () => {
        setBorderColor('#5c5c5c');
    };

    const handleChangeText = (text) => {
        setTask(text);
    };

    const handleTaskDelete = (id) => {
        setTasksList((prevTaskList) => prevTaskList.filter((task) => task.id !== id));
        setIsVisible(false);
    };

    const handleAddTask = () => {
        const newTask = task;
        setTask('');
        setTasksList([
            ...tasksList,
            {
                id: Date.now(),
                task: newTask,
                completed: false,
            },
        ]);
    };

    const handlePress = (item) => {
        setTasksList((prevTaskList) => {
            return prevTaskList.map((task) => {
                return task.id === item.id ? { ...task, completed: !task.completed } : task;
            });
        });
    };

    const handleLongPress = (item) => {
        setIsVisible(true);
        setSelectedTask(item);
    };

    const handleIsVisible = (visibility) => {
        setIsVisible(visibility);
    };

    const renderItem = ({ item }) => (
        <TaskItem item={item} handleLongPress={handleLongPress} handlePress={handlePress} />
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View>
                    <TaskInput
                        borderColor={borderColor}
                        handleBlur={handleBlur}
                        handleFocus={handleFocus}
                        handleAddTask={handleAddTask}
                        handleChangeText={handleChangeText}
                        task={task}
                    />
                    <TasksList renderItem={renderItem} tasksList={tasksList} />
                </View>
                <TaskDeleteConfirmation
                    isVisible={isVisible}
                    handleTaskDelete={handleTaskDelete}
                    selectedTask={selectedTask}
                    handleIsVisible={handleIsVisible}
                />
            </View>
        </SafeAreaView>
    );
}
