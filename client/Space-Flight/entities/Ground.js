import Matter from "matter-js";
import React from "react";
import { View, Text } from "react-native";

const Ground = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        backgroundColor: color,
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text
        style={{
          color: "white",
          fontSize: 50,
        }}
      >
        Tap to launch
      </Text> */}
    </View>
  );
};

export default (world, color, pos, size) => {
  const initialGround = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Ground", isStatic: false }
  );
  Matter.World.add(world, initialGround);

  return {
    body: initialGround,
    color,
    pos,
    renderer: <Ground />,
  };
};
