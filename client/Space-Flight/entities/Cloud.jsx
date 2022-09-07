import Matter from "matter-js";
import React from "react";
import { View, Image } from "react-native";

const Cloud = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  if (props.body.position.y < 0) {
    // console.log("yeeee");
    // use this for something like this (() => navigation.navigate("Login"))()
  }

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
      <Image
        style={{
          width: widthBody,
          height: heightBody,
          backgroundColor: "transparent",
        }}
        resizeMode="stretch"
        source={require("../assets/Cloud.png")}
      ></Image>
    </View>
  );
};

export default (world, pos, size) => {
  const cloud = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height, {
    label: "Cloud",
  });
  Matter.World.add(world, cloud);

  return {
    body: cloud,
    pos,
    renderer: <Cloud />,
  };
};
