import { SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    );
}
