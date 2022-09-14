import { useContext } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { planetData } from "../api";
import { UserContext } from "../context";

const CollectedScrolls = () => {
  const { userInfo } = useContext(UserContext);
  const listOfPlanets = planetData["_3"];

  const unlocked = (index) => {
    if (userInfo.scrolls >= index) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={styles.parentContainer}>
      <ScrollView>
        {userInfo.scrolls < 1 ? (
          <Text style={[styles.blackScreenText]}>
            Please collect scrolls in the game and come back to view some fun
            facts about our solar system!
          </Text>
        ) : (
          listOfPlanets.map((planet, index) => {
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
                <View style={styles.childContainer}>
                  <View style={styles.textAll}>
                    {planet.discoveredBy === "" ? (
                      <Text>
                        {planet.englishName} was discovered by an unknown
                        explorer
                      </Text>
                    ) : (
                      <Text>
                        {planet.englishName} was discovered by{" "}
                        {planet.discoveredBy}
                      </Text>
                    )}
                    {planet.discoveryDate === "" ? (
                      <Text>on an unknown date.</Text>
                    ) : (
                      <Text>on {planet.discoveryDate}.</Text>
                    )}

                    <Text>
                      It has a gravity of {planet.gravity} m/s² and a polar
                      radius of {planet.polarRadius}km.
                    </Text>

                    {planet.moons === null ? (
                      <Text>
                        But, did you know {planet.englishName} has an unknown
                        amount of moons?
                      </Text>
                    ) : planet.moons.length > 1 ? (
                      <Text>
                        But, did you know {planet.englishName} has{" "}
                        {planet.moons.length} moons?
                      </Text>
                    ) : (
                      <Text>
                        But, did you know {planet.englishName} has{" "}
                        {planet.moons.length} moon?
                      </Text>
                    )}
                  </View>
                  <View style={styles.planetsAll}>
                    {planet.englishName === "Uranus" && (
                      <Image
                        style={styles.planetImage}
                        source={require("../assets/planets/Uranus.png")}
                      />
                    )}
                    {planet.englishName === "Earth" && (
                      <Image
                        style={styles.planetImage}
                        source={require("../assets/planets/Earth.png")}
                      />
                    )}
                    {planet.englishName === "Jupiter" && (
                      <Image
                        style={styles.planetImage}
                        source={require("../assets/planets/Jupiter.png")}
                      />
                    )}
                    {planet.englishName === "Mars" && (
                      <Image
                        style={styles.planetImage}
                        source={require("../assets/planets/Mars.png")}
                      />
                    )}
                    {planet.englishName === "Mercury" && (
                      <Image
                        style={styles.planetImage}
                        source={require("../assets/planets/Mercury.png")}
                      />
                    )}
                    {planet.englishName === "Neptune" && (
                      <Image
                        style={styles.planetImage}
                        source={require("../assets/planets/Neptune.png")}
                      />
                    )}
                    {planet.englishName === "Venus" && (
                      <Image
                        style={styles.planetImage}
                        source={require("../assets/planets/Venus.png")}
                      />
                    )}
                    {planet.englishName === "Saturn" && (
                      <Image
                        style={styles.saturnImage}
                        source={require("../assets/planets/Saturn.png")}
                      />
                    )}
                  </View>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: "black",
    minHeight: 1000,
  },
  childContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  planetsAll: {
    flex: 3,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  textAll: {
    flex: 4,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    padding: 10,
  },
  unlockedScroll: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    margin: 15,
    padding: 15,
    backgroundColor: "white",
    fontSize: 14,
  },

  lockedScroll: {
    flex: 1,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    margin: 5,
    padding: 15,
    fontSize: 14,
  },
  title: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  planetImage: {
    margin: 1,
    width: 135,
    height: 135,
  },
  saturnImage: {
    margin: 1,
    width: 140,
    height: 120,
  },
  blackScreenText: {
    fontSize: 20,
    color: "white",
    margin: 30,
    fontWeight: "bold",
  },
});
export default CollectedScrolls;
