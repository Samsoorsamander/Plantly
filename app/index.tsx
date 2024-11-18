import { StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import { ShopingListItem } from "../Components/ShopingLIstItem";
import { theme } from "../theme";
import { useState } from "react";

type shoppingListItemType = {
  id: string;
  name: string;
};

const intialList: shoppingListItemType[] = [];

const testData = new Array(1000)
  .fill(null)
  .map((item, index) => ({ id: String(index), name: String(index) }));
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
    <FlatList
      data={shoppingList}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.emptyListContainer}>
          <Text>Shopping list is empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          style={styles.textInput}
          placeholder="E.g. Coffee"
          value={value}
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      renderItem={({ item }) => <ShopingListItem name={item.name} />}
    />
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
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
