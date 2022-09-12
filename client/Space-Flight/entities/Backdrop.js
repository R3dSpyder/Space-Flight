import Matter from "matter-js";
import React from "react";
import { View, Image } from "react-native";

const Backdrop = (props) => {
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
        height: 20000,
      }}
    >
      <Image
        style={{
          width: widthBody * 4,
          height: 20000,
          //   backgroundColor: "transparent",
        }}
        resizeMode="stretch"
        source={require("../assets/space-background.png")}
      ></Image>
    </View>
  );
};

export default (world, pos, size) => {
  const initialBD = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "Backdrop",
      inertia: Infinity,
    }
  );
  Matter.World.add(world, initialBD);

  return {
    body: initialBD,
    pos,
    renderer: <Backdrop />,
  };
};
