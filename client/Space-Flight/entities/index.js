import Matter from "matter-js";
import Ground from "./Ground";
import { Dimensions } from "react-native";
import Wall from "./Wall";
import Start from "./StartGame";
import Backdrop from "./Backdrop";
import Asteroid from "./Asteroid";
import axisGenerator from "../Utils/axisGenerator";
import SpaceCoin from "./SpaceCoins";
import Menu from "./Menu";
import Scroll from "./Scrolls";
import Rocket0 from "./Rocket0";
import Rocket1 from "./Rocket1";
import Rocket2 from "./Rocket2";
import Rocket3 from "./Rocket3";
import Instructions from "./Instructions";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default (rocket) => {
  let engine = Matter.Engine.create({ enableSleeping: false });

  let world = engine.world;
  engine.gravity.y = 0;

  const asteroids = {};
  for (let i = 1; i <= 10; i++) {
    asteroids[`Asteroid${i}`] = Asteroid(
      world,
      {
        x: axisGenerator(10, windowWidth - 10),
        y: axisGenerator(-600, -20),
      },
      { height: 35, width: 35 }
    );
  }

  const spaceCoins = {};
  for (let i = 1; i <= 5; i++) {
    spaceCoins[`SpaceCoin${i}`] = SpaceCoin(
      world,
      {
        x: axisGenerator(10, windowWidth - 10),
        y: axisGenerator(-10000, -20),
      },
      { height: 20, width: 20 }
    );
  }

  const scrolls = {};
  for (let i = 1; i <= 5; i++) {
    scrolls[`Scroll${i}`] = Scroll(
      world,
      {
        x: axisGenerator(10, windowWidth - 10),
        y: axisGenerator(-14000, -20),
      },
      { height: 20, width: 20 }
    );
  }
  const returnObj = {
    physics: { engine, world },
    Backdrop: Backdrop(world, { x: 0, y: -19000 }, { height: 100, width: 200 }),
  };

  rocket === 0
    ? (returnObj.Rocket = Rocket0(
        world,
        { x: windowWidth / 2, y: windowHeight - 125 },
        { height: 75, width: 30 }
      ))
    : rocket === 1
    ? (returnObj.Rocket = Rocket1(
        world,
        { x: windowWidth / 2, y: windowHeight - 125 },
        { height: 75, width: 30 }
      ))
    : rocket === 2
    ? (returnObj.Rocket = Rocket2(
        world,
        { x: windowWidth / 2, y: windowHeight - 125 },
        { height: 75, width: 30 }
      ))
    : (returnObj.Rocket = Rocket3(
        world,
        { x: windowWidth / 2, y: windowHeight - 125 },
        { height: 75, width: 30 }
      ));

  Object.assign(returnObj, {
    Ground: Ground(
      world,
      "green",
      { x: windowWidth / 2, y: windowHeight - 125 },
      { height: 200, width: windowWidth }
    ),

    LeftWall: Wall(
      world,
      { x: 0, y: windowHeight / 2 },
      { height: windowHeight, width: 10 }
    ),
    RightWall: Wall(
      world,
      { x: windowWidth, y: windowHeight / 2 },
      { height: windowHeight, width: 10 }
    ),
    Start: Start(
      world,
      { x: windowWidth / 3, y: 200 },
      { height: 50, width: 100 }
    ),
    Menu: Menu(
      world,
      { x: windowWidth / 1.5, y: 200 },
      { height: 50, width: 100 }
    ),
    ...asteroids,
    ...spaceCoins,
    ...scrolls,
    Instructions: Instructions(
      world,
      { x: windowWidth / 2, y: 735 },
      { height: 900, width: 350 }
    ),
  });

  return returnObj;
};
