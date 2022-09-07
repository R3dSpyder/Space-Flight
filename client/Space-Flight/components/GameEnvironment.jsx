import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GameEngine } from "react-native-game-engine";

export default function GameEnvironment() {
  return (
    <View style={{ flex: 1 }}>
      <GameEngine
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
    </View>
  );
}
