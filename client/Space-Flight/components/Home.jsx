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

  console.log(startGame);

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroungImage}
        source={require("../assets/stars.jpg")}
      />
      <Text style={styles.title}>SPACE DODGE!</Text>
      {/* <Image source={require("../assets/spaceship.png")}></Image> */}
      {/* <TouchableOpacity>
        <Text style={styles.start}>TAKE OFF!</Text>
      </TouchableOpacity>
      <Button
        title="StartGame"
        onPress={() => navigation.navigate("StartGame")}
      />
      <Button title="TopMenu" onPress={() => navigation.navigate("TopMenu")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} /> */}
      <GameEngine
        ref={ref => {
          setGameEngine(ref);
        }}
        systems={[!startGame ? Physics : startGamePhysics]}
        entities={entities()}
        running={running}
        onEvent={e => {
          e.type === "start game" ? setStartGame(true) : null;
          // e.type === "Game Over"
          //   ? setRunning(false) && setGameEngine(gameEngine.stop)
          //   : running;
          e.type === "Game Over" ? setRunning(false) : null;
        }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      ></GameEngine>
      {!running ? (
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              setRunning(true);
              gameEngine.swap(entities());
            }}
          >
            <Text style={{ color: "white" }}>Restart</Text>
          </TouchableOpacity>
        </View>
      ) : null}
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
