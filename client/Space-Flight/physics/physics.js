import Matter, { World } from "matter-js";
import { Dimensions } from "react-native";

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
    dispatch({ type: "game_over" });
  }

  // if (Matter.Collision.collides(rocket, leaderboard)) {
  //   World.remove(engine.world, start);
  //   dispatch({ type: "leaderboard" });
  // }

  Matter.Body.rotate(asteroid, 0.25);

  if (entities.Rocket.body.position.y < 0) {
    dispatch({ type: "start game" });
    // use this for something like this (() => navigation.navigate("Login"))()
  }
  Matter.Engine.update(engine, time.delta);
  return entities;
};
