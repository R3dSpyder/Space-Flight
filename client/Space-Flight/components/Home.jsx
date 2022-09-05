import { View, Text } from "react-native";
import Login from "./Login";
import StartGame from "./StartGame";
import TopMenu from "./TopMenu";

export default function Home() {
  return (
    <View>
      <TopMenu />
      <StartGame />
      <Login />

      <Text>this is the home page</Text>
    </View>
  );
}
