import Matter from "matter-js";
import { Dimensions } from "react-native";

export const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  const rocket = entities.Rocket.body;
  const start = entities.Start.body;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  touches
    .filter((t) => t.type === "move")
    .forEach((t) => {
      Matter.Body.setVelocity(rocket, {
        x: t.delta.pageX,
        y: t.delta.pageY,
      });
    });
  if (Matter.Collision.collides(rocket, start)) {
    dispatch({ type: "start game" });
    // for (let i = 1; i <= 3; i++) {
    //   const cloud = entities[`Cloud${i}`].body;
    //   Matter.Body.translate(cloud, {
    //     x: 0,
    //     y: 4,
    //   });
    //   Matter.Body.translate(entities.Ground.body, {
    //     x: 0,
    //     y: 4,
    //   });
    // }
  }

  if (entities.Rocket.body.position.y < 0) {
    dispatch({ type: "start game" });
    // use this for something like this (() => navigation.navigate("Login"))()
  }
  Matter.Engine.update(engine, time.delta);
  return entities;
};
