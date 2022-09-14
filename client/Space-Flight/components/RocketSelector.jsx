import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import { UserContext } from "../context";
import * as Haptics from "expo-haptics";

const RocketSelector = () => {
  const [index, setIndex] = useState(0);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const rockets = [
    require("../assets/rockets/spaceship0.png"),
    require("../assets/rockets/spaceship1.png"),
    require("../assets/rockets/spaceship2.png"),
    require("../assets/rockets/spaceship3.png"),
  ];

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  // style button and provide visual feedback
  const setRocket = (e) => {
    e.preventDefault();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={require("../assets/stars.jpg")}
          // resizeMode="cover"
          style={{
            height: windowHeight,
            width: windowWidth,
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {index === userInfo.rocketSelected ? (
            <Text style={{ color: "white", top: 60, fontSize: 50, zIndex: 1 }}>
              SELECTED
            </Text>
          ) : (
            <Text
              style={{
                color: "black",
                top: 60,
                fontSize: 50,
                zIndex: 1,
                opacity: 0,
              }}
            >
              PLACEHOLDER
            </Text>
          )}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
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
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "black",
            }}
          >
            <TouchableOpacity onPress={setRocket}>
              <Text style={{ color: "white", bottom: 100, fontSize: 50 }}>
                SELECT
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default RocketSelector;
