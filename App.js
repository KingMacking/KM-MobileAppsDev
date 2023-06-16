import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>{"KingMacking first mobile app :)"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    textDecorationColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    color: '#fcfcfc'
  }
});
