import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.itemContainer}>
      <Text style={styles.itemText}> Coffee </Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
  },
  itemContainer: {
    paddingHorizontal:8,
    paddingVertical: 16,
    borderBottomWidth:1,
    borderBottomColor:"#1a759f"
  },
  itemText: {
    fontSize: 18,
     fontWeight:"200"}
});
