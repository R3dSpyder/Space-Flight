import Matter from "matter-js";
import { Dimensions } from "react-native";

export const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  const rocket = entities.Rocket.body;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  //   touches
  //     .filter((t) => t.type === "press")
  //     .forEach((t) => {
  //       Matter.Body.translate(entities.Ground.body, {
  //         x: 0,
  //         y: 40,
  //       });
  //     });

  if (touches.length) {
    console.log(touches[0].type);
    if (touches[0].type === "move") {
      Matter.Body.translate(entities.Ground.body, {
        x: 0,
        y: 4,
      });
      if (rocket.bounds.max.x !== windowWidth) {
        Matter.Body.setVelocity(rocket, {
          x: touches[0].delta.pageX,
          y: touches[0].delta.pageY,
        });
      }
    }
  }

  if (entities.Rocket.body.position.y < 0) {
    dispatch({ type: "start game" });
    // use this for something like this (() => navigation.navigate("Login"))()
  }
  Matter.Engine.update(engine, time.delta);
  return entities;
};
