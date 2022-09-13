import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { planetData } from "../api";

const CollectedScrolls = () => {
  const listOfPlanets = planetData["_3"];

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ScrollView>
        {listOfPlanets.map((planet, index) => {
          return (
            <View key={index}>
              <Text>{planet.englishName}</Text>
              <Text>Discovered by: {planet.discoveredBy}</Text>
              <Text>Discovery date: {planet.discoveryDate}</Text>
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

export default CollectedScrolls;
