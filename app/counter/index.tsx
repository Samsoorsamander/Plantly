import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { useEffect, useState } from "react";
import { Duration, isBefore, intervalToDuration } from "date-fns";
import { TimeSegment } from "../../Components/TimeSegment";

type countdownStatus = {
  isOverdue: boolean;
  distance: Duration;
};

const timeStamp = Date.now() + 10 * 1000;
export default function CounterScreen() {
  const [status, setStatus] = useState<countdownStatus>({
    isOverdue: false,
    distance: {},
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isOverdue = isBefore(timeStamp, Date.now());
      const distance = intervalToDuration(
        isOverdue
          ? { start: timeStamp, end: Date.now() }
          : { start: Date.now(), end: timeStamp }
      );
      setStatus({ isOverdue, distance });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const schedaulNotificaton = async () => {
    const result = await registerForPushNotificationsAsync();
    if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "I'm a notification from your app",
        },
        trigger: {
          seconds: 5,
        },
      });
    } else {
      if (Device.isDevice) {
        Alert.alert(
          "Unable to schedule notification",
          "Enable the notification permission for Expo Go in sittings"
        );
      }
    }
  };
  return (
    <View
      style={[
        Styles.container,
        status.isOverdue ? Styles.containerLate : undefined,
      ]}
    >
      {status.isOverdue ? (
        <Text
          style={[
            Styles.heading,
            status.isOverdue ? Styles.whiteText : undefined,
          ]}
        >
          Things overdue by..
        </Text>
      ) : (
        <Text style={Styles.heading}>Things due in...</Text>
      )}
      <View style={Styles.row}>
        <TimeSegment
          unit="Days"
          number={status.distance.days ?? 0}
          textStyle={status.isOverdue ? Styles.whiteText : undefined}
        />
        <TimeSegment
          number={status.distance.hours ?? 0}
          unit="Hours"
          textStyle={status.isOverdue ? Styles.whiteText : undefined}
        />
        <TimeSegment
          number={status.distance.minutes ?? 0}
          unit="Minutes"
          textStyle={status.isOverdue ? Styles.whiteText : undefined}
        />
        <TimeSegment
          number={status.distance.seconds ?? 0}
          unit="Seconds"
          textStyle={status.isOverdue ? Styles.whiteText : undefined}
        />
      </View>
      <TouchableOpacity
        style={Styles.btn}
        activeOpacity={0.8}
        onPress={schedaulNotificaton}
      >
        <Text style={Styles.btnText}>i've done the thing!</Text>
      </TouchableOpacity>
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
  containerLate: {
    backgroundColor: theme.colorRed,
  },
  btn: {
    backgroundColor: theme.colorBalck,
    padding: 12,
    borderRadius: 6,
  },
  btnText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  whiteText: {
    color: theme.colorWhite,
  },
});
