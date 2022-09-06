import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
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
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StartGame" component={StartGame} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="TopMenu" component={TopMenu} />
      </Stack.Navigator>
      {/* <>
        <NavBar />
        <View style={styles.container}>
          <Home />
          <StatusBar style="auto" hidden={true} />
        </View>
      </> */}
    </NavigationContainer>
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
