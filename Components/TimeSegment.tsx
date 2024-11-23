import { Text, View, StyleSheet, TextStyle } from "react-native";

type Props = {
  number: number;
  unit: string;
  textStyle?: TextStyle;
};

export function TimeSegment({ number, unit, textStyle }: Props) {
  return (
    <View style={Styles.segmentContainer}>
      <Text style={Styles.number}>{number}</Text>
      <Text style={textStyle}>{unit}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  segmentContainer: {
    padding: 12,
    margin: 4,
    borderRadius: 6,
    justifyContent: "center",
    alignContent: "center",
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    fontVariant: ["tabular-nums"],
  },
});
