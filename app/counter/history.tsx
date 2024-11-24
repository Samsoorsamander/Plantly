import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { PersistedCountdownState, countdownStorageKey } from ".";
import { getFromStorage } from "../../utils/storage";
import { format } from "date-fns";
import { theme } from "../../theme";
import AntDesign from "@expo/vector-icons/AntDesign";

const fullDateFormats = "LLL d yyyy, h:m aaa";

export default function History() {
  const [countdownState, setCountdownState] =
    useState<PersistedCountdownState>();
  const [isDeleted, setIsDeleted] = useState();

  useEffect(() => {
    const init = async () => {
      const value = await getFromStorage(countdownStorageKey);
      setCountdownState(value);
    };
    init();
  }, []);

  return (
    <FlatList
      style={Styles.list}
      contentContainerStyle={Styles.contentContainer}
      data={countdownState?.completedAtTimestapm}
      ListEmptyComponent={
        <View style={Styles.emptyListContainer}>
          <Text>No History</Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={Styles.listItem}>
          <Text style={Styles.listItemText}>
            {format(item, fullDateFormats)}
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={{ marginRight: 8 }}>
            <AntDesign name="edit" size={24} color="red" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const Styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    marginTop: 8,
  },
  listItem: {
    backgroundColor: theme.colorLigtGray,
    marginHorizontal: 8,
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 18,
  },
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
