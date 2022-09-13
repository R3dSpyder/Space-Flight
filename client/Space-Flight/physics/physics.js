import Matter, { World } from "matter-js";
import { Dimensions } from "react-native";
import * as Haptics from "expo-haptics";

export const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  const rocket = entities.Rocket.body;
  const start = entities.Start.body;
  const menu = entities.Menu.body;
  const asteroid = entities.Asteroid1.body;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  touches
    .filter((t) => t.type === "move")
    .forEach((t) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      Matter.Body.setVelocity(rocket, {
        x: t.delta.pageX,
        y: t.delta.pageY,
      });
    });
  if (Matter.Collision.collides(rocket, start)) {
    World.remove(engine.world, start);
    dispatch({ type: "start_game" });
  }
  if (Matter.Collision.collides(rocket, menu)) {
    World.remove(engine.world, start);
    dispatch({ type: "visit_menu" });
  }

  Matter.Body.rotate(asteroid, 0.25);
  Matter.Engine.update(engine, time.delta);
  return entities;
};
