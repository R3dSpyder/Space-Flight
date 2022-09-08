import Matter from "matter-js";
import { Dimensions } from "react-native";
import axisGenerator from "../Utils/axisGenerator";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const startGamePhysics = (entities, { touches, time, dispatch }) => {
  const engine = entities.physics.engine;
  const rocket = entities.Rocket.body;
  const start = entities.Start.body;

  touches
    .filter(t => t.type === "move")
    .forEach(t => {
      Matter.Body.setVelocity(rocket, {
        x: t.delta.pageX,
        y: t.delta.pageY,
      });
    });
  // const ground = entities.Ground.body;
  for (let i = 1; i <= 10; i++) {
    const asteroid = entities[`Asteroid${i}`].body;
    Matter.Body.translate(asteroid, { x: 0, y: 4 });
    if (asteroid.bounds.max.y > windowHeight) {
      Matter.Body.setPosition(asteroid, {
        x: axisGenerator(10, windowWidth - 10),
        y: 0,
      });
    }
    if (Matter.Collision.collides(asteroid, rocket)) {
      rocket.render.opacity = 0;
    }
  }

  Matter.Body.translate(start, { x: 0, y: 4 });

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default startGamePhysics;
