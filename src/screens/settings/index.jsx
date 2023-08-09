import { FlatList } from 'react-native';

import { styles } from './styles';
import { SettingsItem } from '../../components';
import { MENU_ITEMS } from '../../constants/data/menuItems';

const Settings = ({ navigation }) => {
    const handleNavigation = (route) => {
        navigation.navigate(route);
    };
    const renderItem = ({ item }) => <SettingsItem {...item} handleNavigation={handleNavigation} />;
    return (
        <FlatList
            style={styles.listContainer}
            data={MENU_ITEMS}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            renderItem={renderItem}
        />
    );
};
export default Settings;
