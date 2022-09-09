import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Physics } from "../physics/physics.js";
import entities from "../entities/index.js";
import { useEffect, useState } from "react";
import startGamePhysics from "../physics/startGamePhysics.js";

export default function Home({ navigation }) {
  const [running, setRunning] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [lives, setLives] = useState(3);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);

  // useEffect(() => {}, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {/* <Image style={{ flex: 1 }} source={require("../assets/stars.jpg")} /> */}
      <Text style={styles.title}>SPACE DODGE!</Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          color: "white",
          margin: 0,
        }}
      >
        {currentPoints}
      </Text>
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[!startGame ? Physics : startGamePhysics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          e.type === "start_game"
            ? setStartGame(true)
            : e.type === "game_over"
            ? navigation.navigate("LeaderBoard") &&
              setRunning(false) &&
              setGameEngine(gameEngine.stop)
            : e.type === "leaderboard"
            ? navigation.navigate("LeaderBoard")
            : e.type === "points"
            ? setCurrentPoints(currentPoints + 100)
            : running;
        }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      ></GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 30, bottom: 50 },
  start: { fontSize: 25, top: 50 },
  backgroungImage: {
    flex: 1,
    width: 500,
  },
});
