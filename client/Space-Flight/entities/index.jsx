import Matter from "matter-js";
import Ground from "../entities/Ground";
import Rocket from "../entities/Rocket";
import { Dimensions } from "react-native";
import Title from "./Title";
import Wall from "./Wall";
import Cloud from "./Cloud";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default restart => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;
  engine.gravity.y = 0;

  return {
    physics: { engine, world },

    Rocket: Rocket(
      world,
      "green",
      { x: 250, y: windowHeight - 375 },
      { height: 100, width: 40 }
    ),
    Ground: Ground(
      world,
      "green",
      { x: windowWidth / 2, y: windowHeight - 75 },
      { height: 500, width: windowWidth }
    ),
    Wall: Wall(
      world,
      "green",
      { x: -5, y: -windowHeight },
      { height: windowHeight, width: 10 }
    ),
    Cloud1: Cloud(world, { x: 250, y: 300 }, { height: 100, width: 100 }),
    Cloud2: Cloud(world, { x: 300, y: 300 }, { height: 100, width: 100 }),
    Cloud3: Cloud(world, { x: 200, y: 250 }, { height: 100, width: 100 }),
  };
};
