import { useState } from "react";
import { StyleSheet } from "react-native";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeaderBoard from "./components/LeaderBoard";
import CollectedScrolls from "./components/CollectedScrolls";
import RocketSelector from "./components/RocketSelector";
import { UserContext } from "./Contexts/UserContext";

const Stack = createNativeStackNavigator();
export default function App() {
  const [userInfo, setUserInfo] = useState({
    coins: 0,
    scrolls: 0,
    rocketSelected: 0,
  });

  return (
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
