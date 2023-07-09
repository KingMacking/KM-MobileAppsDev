import { SafeAreaView, View } from 'react-native';

import { Header } from './components';
import { styles } from './styles';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header title="Categories" />
            </View>
        </SafeAreaView>
    );
}
