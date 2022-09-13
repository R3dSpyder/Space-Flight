import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { planetData } from "../api";

const CollectedScrolls = () => {
  // const scrollsList = planetData.map((planet, index) => {
  //   return planet;
  // });
  // console.log(scrollsList);

  const listOfPlanets = planetData["_3"];

  console.log(listOfPlanets[7].englishName);

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {listOfPlanets.map(planet => {
        return (
          <TouchableOpacity>
            <Text>{planet.englishName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CollectedScrolls;
