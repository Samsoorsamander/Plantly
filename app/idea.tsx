import { View, Text, StyleSheet } from "react-native";

export default function IdeaScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Counter </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
