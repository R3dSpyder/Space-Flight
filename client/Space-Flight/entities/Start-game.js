import Matter from "matter-js";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const Start = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <View
      style={{
        position: "absolute",
        wireframes: false,
        background: "transparent",
        wireframeBackground: "transparent",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    >
      <ImageBackground source={require("../assets/Cloud.png")}>
        <Text style={{ color: "black", fontSize: 30 }}>START</Text>
      </ImageBackground>
    </View>
  );
};

export default (world, pos, size) => {
  const start = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height, {
    label: "Start",
    inertia: Infinity,
  });
  Matter.World.add(world, start);

  return {
    body: start,
    pos,
    renderer: <Start />,
  };
};
