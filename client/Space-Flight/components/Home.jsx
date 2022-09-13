import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GameEngine } from "react-native-game-engine";
import { Physics } from "../physics/physics.js";
import entities from "../entities/index.js";
import { useEffect, useState } from "react";
import startGamePhysics from "../physics/startGamePhysics.js";
import { gameOverFX, collectFX, inGame } from "../sound.js";

export default function Home({ navigation }) {
  const [running, setRunning] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [lives, setLives] = useState(3);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [currSpaceCoins, setCurrSpaceCoins] = useState(0);
  const [currScrolls, setCurrentScrolls] = useState(0);
  const [currName, setCurrName] = useState("unknown");
  const [gameOver, setGameOver] = useState(false);

  const postScore = (e) => {
    // do api call with currName
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {running ? (
        <>
          <GameEngine
            ref={(ref) => {
              setGameEngine(ref);
            }}
            systems={[!startGame ? Physics : startGamePhysics]}
            entities={entities()}
            running={running}
            onEvent={(e) => {
              e.type === "start_game" ? inGame() && setStartGame(true) : null;
              if (e.type === "game_over") {
                gameOverFX();
                setGameOver(true);
                setRunning(false);
                setGameEngine(gameEngine.stop);
              }
              if (e.type === "visit_menu") {
                setRunning(false);
                setGameEngine(gameEngine.stop);
              }
              e.type === "leaderboard"
                ? navigation.navigate("LeaderBoard")
                : e.type === "points"
                ? setCurrentPoints(currentPoints + 100) // add sound here hopefully
                : e.type === "add_SpaceCoin"
                ? collectFX() && setCurrSpaceCoins(currSpaceCoins + 1)
                : e.type === "add_Scroll"
                ? collectFX() && setCurrentScrolls(currScrolls + 1)
                : running;
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></GameEngine>
          <StatusBar style="auto" hidden={true} />
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "white",
              top: 15,
            }}
          >
            {currentPoints}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              color: "white",
              top: 50,
              left: 10,
            }}
          >
            {currSpaceCoins}
          </Text>
          <Image source={require("../assets/SpaceCoin.png")} />
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              color: "white",
              top: 50,
              left: 10,
            }}
          >
            {currScrolls}
          </Text>
          <Image source={require("../assets/Scroll.png")} />
        </>
      ) : null}
      {!running ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "white",
              top: 50,
            }}
          >
            {currentPoints}{" "}
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/asteroid.png")}
            />{" "}
            {currSpaceCoins}{" "}
            <Image source={require("../assets/SpaceCoin.png")} /> {currScrolls}
            <Image source={require("../assets/Scroll.png")} />
          </Text> */}
          {gameOver ? (
            <View style={{ bottom: 100 }}>
              <TextInput
                placeholder="INPUT NAME FOR LEADERBOARD"
                placeholderTextColor={"grey"}
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                onChangeText={(text) => {
                  setCurrName(text);
                }}
              />
              <Button title="SUBMIT" onPress={postScore} />
            </View>
          ) : null}
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
