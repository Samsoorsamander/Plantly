import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="indevx" options={{ title: "Shoping List" }} />
    </Stack>
  );
}
