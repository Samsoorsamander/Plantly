import { StyleSheet, View } from "react-native";
import { ShopingListItem } from "../Components/ShopingLIstItem";
import { Link } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <ShopingListItem name="Coffee" />
      <ShopingListItem name="Tea" isCompleted />
      <ShopingListItem name="Sugar" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
