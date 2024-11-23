import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PersistedCountdownState, countdownStorageKey } from ".";
import { getFromStorage } from "../../utils/storage";
import { format } from "date-fns";
import { theme } from "../../theme";

const fullDateFormats = "LLL d yyyy, h:m aaa";

export default function History() {
  const [countdownState, setCountdownState] =
    useState<PersistedCountdownState>();

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
          <Text></Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={Styles.listItem}>
          <Text style={Styles.listItemText}>
            {format(item, fullDateFormats)}
          </Text>
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
  },
  listItemText: {
    fontSize: 18,
  },
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
