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

export default function Home({ navigation }) {
  const [running, setRunning] = useState(true);
  const [startGame, setStartGame] = useState(false);

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
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={e => {
          e.type === "start game" ? setStartGame(true) : null;
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
