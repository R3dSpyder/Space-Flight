import { View, Text, Button } from "react-native";

export default function TopMenu({ navigation }) {
  return (
    <View>
      <Button
        title="LeaderBoard"
        onPress={() => navigation.navigate("LeaderBoard")}
      />
      <Text>extras</Text>
    </View>
  );
}
