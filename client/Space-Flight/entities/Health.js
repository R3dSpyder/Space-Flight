// import Matter from "matter-js";
// import React from "react";
// import { View, Image } from "react-native";

// const Health = props => {
//   const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
//   const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

//   const xBody = props.body.position.x - widthBody / 2;
//   const yBody = props.body.position.y - heightBody / 2;

//   return (
//     <View
//       style={{
//         position: "absolute",
//         wireframes: false,
//         background: "transparent",
//         wireframeBackground: "transparent",
//         left: xBody,
//         top: yBody,
//         width: widthBody,
//         height: heightBody,
//       }}
//     >
//       <Image
//         style={{
//           width: widthBody,
//           height: heightBody,
//           backgroundColor: "transparent",
//         }}
//         resizeMode="stretch"
//         source={require("../assets/rocket.png")}
//       ></Image>
//     </View>
//   );
// };

// export default (world, pos, size) => {
//   const health = Matter.Bodies.rectangle(
//     pos.x,
//     pos.y,
//     size.width,
//     size.height,
//     { label: "Health", inertia: Infinity }
//   );
//   //stops the health rockets from colliding with any other objects
//   health.collisionFilter = {
//     group: -1,
//     category: 2,
//     mask: 0,
//   };
//   Matter.World.add(world, health);

//   return {
//     body: health,
//     pos,
//     renderer: <Health />,
//   };
// };
