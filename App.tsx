import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';
import { theme } from './theme';
import { ShopingListItem } from './Components/ShopingLIstItem';
export default function App() {
  
  return (
    <View style={styles.container}>
        <ShopingListItem name='Coffee' />
        <ShopingListItem name='Tea'/>
        <ShopingListItem name='Sugar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
},
});
