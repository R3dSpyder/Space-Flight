import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
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
  const [currSpaceCoins, setCurrSpaceCoins] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {/* <Image style={{ flex: 1 }} source={require("../assets/stars.jpg")} /> */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          color: "white",
          top: 10,
        }}
      >
        {currentPoints}
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontSize: 20,
          color: "white",
          top: 10,
        }}
      >
        {currSpaceCoins}
      </Text>
      <Image source={require("../assets/SpaceCoin.png")} />
      {running ? (
        <GameEngine
          ref={ref => {
            setGameEngine(ref);
          }}
          systems={[!startGame ? Physics : startGamePhysics]}
          entities={entities()}
          running={running}
          onEvent={e => {
            e.type === "start_game" ? setStartGame(true) : null;
            if (e.type === "game_over") {
              setRunning(false);
              setGameEngine(gameEngine.stop);
            }
            e.type === "leaderboard"
              ? navigation.navigate("LeaderBoard")
              : e.type === "points"
              ? setCurrentPoints(currentPoints + 100)
              : e.type === "add_SpaceCoin"
              ? setCurrSpaceCoins(currSpaceCoins + 1)
              : running;
          }}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        ></GameEngine>
      ) : null}
      {!running ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => {
              setRunning(true);
              setStartGame(false);
              setCurrentPoints(0);
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
                bottom: 20,
              }}
            >
              RESTART GAME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LeaderBoard");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
                bottom: 10,
              }}
            >
              LEADERBOARD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
              }}
            >
              LOGIN
            </Text>
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
