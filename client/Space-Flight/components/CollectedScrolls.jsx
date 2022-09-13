import { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { planetData } from "../api";
import { UserContext } from "../context";
const CollectedScrolls = () => {
  const { userInfo } = useContext(UserContext);
  const listOfPlanets = planetData["_3"];
  console.log(userInfo.scrolls);
  const unlocked = index => {
    if (userInfo.scrolls >= index) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <ScrollView>
        {listOfPlanets.map((planet, index) => {
          return (
            <View
              style={
                unlocked(index + 1)
                  ? styles.unlockedScroll
                  : styles.lockedScroll
              }
              key={index}
            >
              <Text style={styles.title}>{planet.englishName}</Text>
              {/* <Text>Discovered by: {planet.discoveredBy}</Text> */}
              {planet.discoveredBy === "" ? (
                <Text>Discovered By: Unknown</Text>
              ) : (
                <Text>
                  Discovered By:
                  {planet.discoveredBy}
                </Text>
              )}
              {planet.discoveryDate === "" ? (
                <Text>Discovery Date: Unknown</Text>
              ) : (
                <Text>
                  Discovery Date:
                  {planet.discoveryDate}
                </Text>
              )}

              {planet.moons === null ? (
                <Text>Number of moons: Unknown</Text>
              ) : (
                <Text>
                  Number of moons:
                  {planet.moons.length}
                </Text>
              )}
              <Text>Gravity: {planet.gravity}m/s²</Text>
              <Text>Polar radius: {planet.polarRadius}km</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  unlockedScroll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    backgroundColor: "white",
  },
  lockedScroll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    backgroundColor: "black",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default CollectedScrolls;
