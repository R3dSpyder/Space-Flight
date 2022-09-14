import Matter from "matter-js";
import React from "react";
import { View, Text } from "react-native";

const Instructions = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <View
      style={{
        position: "absolute",
        wireframes: true,
        background: "transparent",
        wireframeBackground: "transparent",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        zIndex: -1,
      }}
    >
      <Text style={{ color: "white", fontSize: 35, textAlign: "center" }}>
        DRAG THE ROCKET TO DODGE THE ASTEROIDS!{"\n"}
        {"\n"}
        COLLECT SPACE COINS AND SCROLLS FOR PRIZES! {"\n"}
        {"\n"}
      </Text>
    </View>
  );
};

export default (world, pos, size) => {
  const instructions = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "Instructions",
      inertia: Infinity,
    }
  );
  Matter.World.add(world, instructions);

  return {
    body: instructions,
    pos,
    renderer: <Instructions />,
  };
};
