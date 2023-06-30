import { FlatList } from 'react-native';

import { styles } from './styles';

const TasksList = ({ tasksList, renderItem }) => {
    return (
        <FlatList
            data={tasksList}
            renderItem={renderItem}
            style={styles.listContainer}
            contentContainerStyle={styles.list}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
        />
    );
};
export default TasksList;
