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
import { initialPhysics } from "../physics/initialPhysics.js";
import entities from "../entities/index.js";
import { useContext, useState } from "react";
import startGamePhysics from "../physics/startGamePhysics.js";
import { gameOverFX, collectFX } from "../sound.js";
import { UserContext } from "../Contexts/UserContext.js";
import { postScore } from "../api.js";

export default function Home({ navigation }) {
  const [running, setRunning] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [currName, setCurrName] = useState("unknown");
  const [gameOver, setGameOver] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleSubmit = () => {
    postScore(currentPoints, currName).then(() => {
      navigation.navigate("LeaderBoard");
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {running ? (
        <>
          <GameEngine
            ref={(ref) => {
              setGameEngine(ref);
            }}
            systems={[!startGame ? initialPhysics : startGamePhysics]}
            entities={entities(userInfo.rocketSelected)}
            running={running}
            onEvent={(e) => {
              e.type === "start_game" ? setStartGame(true) : null;
              if (e.type === "game_over") {
                gameOverFX();
                setGameEngine(gameEngine.stop);
                setGameOver(true);
                setRunning(false);
              }
              if (e.type === "visit_menu") {
                setRunning(false);
                setGameEngine(gameEngine.stop);
              }
              e.type === "leaderboard"
                ? navigation.navigate("LeaderBoard")
                : e.type === "points"
                ? setCurrentPoints(currentPoints + 100)
                : e.type === "add_SpaceCoin"
                ? collectFX() &&
                  setUserInfo((current) => ({
                    ...current,
                    coins: userInfo.coins + 1,
                  }))
                : e.type === "add_Scroll"
                ? collectFX() &&
                  setUserInfo((current) => ({
                    ...current,
                    scrolls: userInfo.scrolls + 1,
                  }))
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
              fontSize: 50,
              color: "white",
              top: 50,
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
            {userInfo.coins}
          </Text>
          <Image source={require("../assets/space-coin.png")} />
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              color: "white",
              top: 50,
              left: 10,
            }}
          >
            {userInfo.scrolls}
          </Text>
          <Image source={require("../assets/scroll.png")} />
        </>
      ) : null}
      {!running ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
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
              <Button title="SUBMIT" onPress={handleSubmit} />
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
                top: 10,
              }}
            >
              LEADERBOARD
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CollectedScrolls");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
                top: 20,
              }}
            >
              COLLECTED SCROLLS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RocketSelector");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
                top: 30,
              }}
            >
              ROCKET SELECTOR
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
