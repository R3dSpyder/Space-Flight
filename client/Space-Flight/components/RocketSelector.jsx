import React, { useEffect } from "react";
import { useState } from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

const RocketSelector = () => {
  const [index, setIndex] = useState(0);
  const rockets = [
    require("../assets/rocket.png"),
    require("../assets/spaceship3.png"),
    require("../assets/spaceship2.png"),
    require("../assets/spaceship1.png"),
  ];
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setIndex(index > 0 ? index - 1 : index);
        }}
      >
        <Text style={{ color: "white", right: 50, fontSize: 50 }}>←</Text>
      </TouchableOpacity>
      <Image
        source={rockets[index]}
        style={{ height: 300, width: 100, justifyContent: "center" }}
      />
      <TouchableOpacity
        onPress={() => {
          setIndex(index < rockets.length - 1 ? index + 1 : index);
        }}
      >
        <Text style={{ color: "white", left: 50, fontSize: 50 }}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RocketSelector;
