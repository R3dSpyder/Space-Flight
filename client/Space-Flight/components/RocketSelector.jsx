import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Text, Image, TouchableOpacity, View, Button } from "react-native";
import { UserContext } from "../context";

const RocketSelector = () => {
  const [index, setIndex] = useState(0);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const rockets = [
    require("../assets/rockets/spaceship0.png"),
    require("../assets/rockets/spaceship1.png"),
    require("../assets/rockets/spaceship2.png"),
    require("../assets/rockets/spaceship3.png"),
  ];
  // style button and provide visual feedback
  const setRocket = (e) => {
    e.preventDefault();
    setUserInfo((current) => ({
      ...current,
      rocketSelected: index,
    }));
  };
  return (
    <>
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
      <View>
        <Button title="select" onPress={setRocket}></Button>
      </View>
    </>
  );
};

export default RocketSelector;
