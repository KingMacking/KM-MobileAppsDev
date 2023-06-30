import { FlatList, Text } from 'react-native';

import { styles } from './styles';

const TasksList = ({ tasksList, renderItem }) => {
    const listTitle = () => <Text style={styles.listHeaderItem}>Tasks list</Text>;
    return (
        <FlatList
            data={tasksList}
            renderItem={renderItem}
            style={styles.listContainer}
            contentContainerStyle={styles.list}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={listTitle}
            stickyHeaderIndices={[0]}
        />
    );
};
export default TasksList;
