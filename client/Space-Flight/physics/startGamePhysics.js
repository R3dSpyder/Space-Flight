import Matter from "matter-js";

const startGamePhysics = (entities, { touches, time, dispatch }) => {
  const engine = entities.physics.engine;
  const ground = entities.Ground.body;
  Matter.Body.translate(ground, { x: 0, y: 4 });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default startGamePhysics;
