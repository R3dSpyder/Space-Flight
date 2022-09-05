import { View, Text, TouchableOpacity } from "react-native";
import LeaderBoard from "./LeaderBoard";

export default function TopMenu() {
  return (
    <View>
      <TouchableOpacity>
        <LeaderBoard />
      </TouchableOpacity>
      <Text>extras</Text>
    </View>
  );
}
