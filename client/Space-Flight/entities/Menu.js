import Matter from "matter-js";
import React from "react";
import { View, Text } from "react-native";

const Menu = props => {
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
      }}
    >
      <Text style={{ color: "white", fontSize: 25 }}>MENU</Text>
    </View>
  );
};

export default (world, pos, size) => {
  const menu = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height, {
    label: "Menu",
    inertia: Infinity,
  });
  Matter.World.add(world, menu);

  return {
    body: menu,
    pos,
    renderer: <Menu />,
  };
};
