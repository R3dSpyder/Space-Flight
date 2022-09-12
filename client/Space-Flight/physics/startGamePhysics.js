import Matter, { Detector } from "matter-js";
import { Dimensions } from "react-native";
import axisGenerator from "../Utils/axisGenerator";
// import incrementLives from "../Utils/incrementingLives";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const startGamePhysics = (entities, { touches, time, dispatch }) => {
  const engine = entities.physics.engine;
  const rocket = entities.Rocket.body;
  const start = entities.Start.body;
  const backdrop = entities.Backdrop.body;
  // const leaderboard = entities.Leaderboard.body;

  touches
    .filter((t) => t.type === "move")
    .forEach((t) => {
      Matter.Body.setVelocity(rocket, {
        x: t.delta.pageX,
        y: t.delta.pageY,
      });
    });
  // const ground = entities.Ground.body;
  for (let i = 1; i <= 10; i++) {
    const asteroid = entities[`Asteroid${i}`].body;
    Matter.Body.translate(asteroid, { x: 0, y: 4 });

    //reset position when asteroids leave the page
    if (asteroid.bounds.max.y > windowHeight) {
      Matter.Body.setPosition(asteroid, {
        x: axisGenerator(10, windowWidth - 10),
        y: 0,
      });
      dispatch({ type: "points" });
    }

    if (Matter.Collision.collides(rocket, asteroid)) {
      dispatch({ type: "game_over" });
    }
  }

  Matter.Body.translate(start, { x: 0, y: 4 });
  Matter.Body.translate(backdrop, { x: 0, y: 2 });

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default startGamePhysics;
