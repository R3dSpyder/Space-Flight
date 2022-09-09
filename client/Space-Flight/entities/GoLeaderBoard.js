import Matter from "matter-js";
import React from "react";
import { View, Text } from "react-native";

const LeaderBoard = (props) => {
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
      <Text style={{ color: "white", fontSize: 25 }}>LEADER</Text>
      {/* <Text style={{ color: "white", fontSize: 25 }}>LEADER{"\n"}BOARD</Text> */}
    </View>
  );
};

export default (world, pos, size) => {
  const initialLeaderBoard = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "leaderBoard", inertia: Infinity }
  );
  Matter.World.add(world, initialLeaderBoard);

  return {
    body: initialLeaderBoard,
    pos,
    renderer: <LeaderBoard />,
  };
};
