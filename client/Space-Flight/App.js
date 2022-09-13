import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartGame from "./components/StartGame";
import Login from "./components/Login";
import TopMenu from "./components/TopMenu";
import LeaderBoard from "./components/LeaderBoard";
import CollectedScrolls from "./components/CollectedScrolls";
import RocketSelector from "./components/RocketSelector";
import { UserContext } from "./context";

const Stack = createNativeStackNavigator();
export default function App() {
  const [userInfo, setUserInfo] = useState({
    coins: 0,
    scrolls: 0,
    rocketSelected: 0,
    rocketsOwned: [0],
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen name="RocketSelector" component={RocketSelector} />
          <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
          <Stack.Screen name="TopMenu" component={TopMenu} />
          <Stack.Screen name="CollectedScrolls" component={CollectedScrolls} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
