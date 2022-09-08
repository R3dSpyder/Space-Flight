import Matter from "matter-js";

const startGamePhysics = (entities, { touches, time, dispatch }) => {
  const engine = entities.physics.engine;
  const asteroid = entities.Asteroid1.body;
  const rocket = entities.Rocket.body;

  touches
    .filter(t => t.type === "move")
    .forEach(t => {
      Matter.Body.setVelocity(rocket, {
        x: t.delta.pageX,
        y: t.delta.pageY,
      });
    });
  // const ground = entities.Ground.body;
  Matter.Body.translate(asteroid, { x: 0, y: 4 });

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default startGamePhysics;
