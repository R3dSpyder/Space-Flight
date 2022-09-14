import Matter, { World } from "matter-js";
import * as Haptics from "expo-haptics";

export const initialPhysics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  const rocket = entities.Rocket.body;
  const start = entities.Start.body;
  const menu = entities.Menu.body;
  const instructions = entities.Instructions.body;

  World.remove(engine.world, instructions);

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
    World.remove(engine.world, menu);
    dispatch({ type: "start_game" });
  }
  if (Matter.Collision.collides(rocket, menu)) {
    dispatch({ type: "visit_menu" });
  }
  Matter.Engine.update(engine, time.delta);
  return entities;
};
