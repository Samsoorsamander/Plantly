import { StyleSheet, View, TextInput, ScrollView } from "react-native";
import { ShopingListItem } from "../Components/ShopingLIstItem";
import { Link } from "expo-router";
import { theme } from "../theme";
import { useState } from "react";

type shoppingListItemType = {
  id: string;
  name: string;
};

const intialList: shoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Milk" },
];
export default function App() {
  const [shoppingList, setShoppingList] =
    useState<shoppingListItemType[]>(intialList);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        style={styles.textInput}
        placeholder="E.g. Coffee"
        value={value}
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShopingListItem name={item.name} key={item.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorGray,
    backgroundColor: theme.colorWhite,
    borderWidth: 2,
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 12,
    fontSize: 18,
    borderRadius: 50,
  },
});
