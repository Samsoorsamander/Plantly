import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";
type Props = {
  name: String;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

export function ShopingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => onDelete(),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };
  return (
    <Pressable
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {" "}
        {name}{" "}
      </Text>
      <TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGray : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  completedContainer: {
    backgroundColor: theme.colorLigtGray,
    borderBottomColor: theme.colorLigtGray,
  },
  itemContainer: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedButton: {
    backgroundColor: theme.colorGray,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  completedText: {
    textDecorationColor: theme.colorGray,
    textDecorationLine: "line-through",
    color: theme.colorGray,
  },
});
