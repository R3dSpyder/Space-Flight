import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getPlanetByName } from "../api";

const CollectedScrolls = () => {
  const planetData = getPlanetByName().then(body => {
    return body;
  });

  console.log(planetData);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default CollectedScrolls;
