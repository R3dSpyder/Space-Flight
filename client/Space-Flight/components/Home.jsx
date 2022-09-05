import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SPACE DODGE!</Text>
      <Image source={require("../assets/spaceship.png")}></Image>
      <TouchableOpacity>
        <Text style={styles.start}>TAKE OFF!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 30, bottom: 50 },
  start: { fontSize: 25, top: 50 },
});
