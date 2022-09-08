import Matter from "matter-js";
import Ground from "./Ground";
import Rocket from "./Rocket";
import { Dimensions } from "react-native";
import Title from "./Title";
import Wall from "./Wall";
import Cloud from "./Cloud";
import Start from "./Start-game";

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
      { x: 200, y: windowHeight - 125 },
      { height: 100, width: 40 }
    ),
    Ground: Ground(
      world,
      "green",
      { x: windowWidth / 2, y: windowHeight - 75 },
      { height: 100, width: windowWidth }
    ),
    Wall: Wall(
      world,
      "green",
      { x: -5, y: -windowHeight },
      { height: windowHeight, width: 10 }
    ),
    Cloud1: Cloud(world, { x: 200, y: 150 }, { height: 100, width: 100 }),
    Cloud2: Cloud(world, { x: 250, y: 150 }, { height: 100, width: 100 }),
    Cloud3: Cloud(world, { x: 150, y: 150 }, { height: 100, width: 100 }),
    Start: Start(
      world,
      { x: windowWidth / 2, y: windowHeight },
      { height: 100, width: 100 }
    ),
  };
};
