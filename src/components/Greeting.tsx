import { Text, View } from "react-native";

export default function Greeting({ name }) {
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Привет, {name} 👋
      </Text>
    </View>
  );
}
