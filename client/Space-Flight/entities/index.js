import Matter from "matter-js";
import Ground from "./Ground";
import Rocket from "./Rocket";
import { Dimensions } from "react-native";
import Title from "./Title";
import Wall from "./Wall";
import Cloud from "./Cloud";
import Start from "./Start-game";
import Asteroid from "./Asteroid";
import axisGenerator from "../Utils/axisGenerator";
import SpaceCoin from "./Space_coins";
import Menu from "./Menu";
import Scroll from "./Scrolls";
// import Health from "./Health";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default restart => {
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

  // const healthLives = {};
  // let x = 100;
  // for (let i = 1; i <= 3; i++) {
  //   healthLives[`Health${i}`] = Health(
  //     world,
  //     { x: windowWidth - x, y: windowHeight - 75 },
  //     { height: 30, width: 25 }
  //   );
  //   x -= 40;
  // }

  return {
    physics: { engine, world },

    Rocket: Rocket(
      world,
      { x: 200, y: windowHeight - 125 },
      { height: 75, width: 30 }
    ),

    LeftWall: Wall(
      world,
      "green",
      { x: 0, y: windowHeight / 2 },
      { height: windowHeight, width: 10 }
    ),
    RightWall: Wall(
      world,
      "green",
      { x: windowWidth, y: windowHeight / 2 },
      { height: windowHeight, width: 10 }
    ),
    // Collectable: Collectable(
    //   world,
    //   { x: axisGenerator(0, windowWidth), y: -50 },
    //   { height: 25, width: 25 }
    // ),
    Start: Start(world, { x: 200, y: 200 }, { height: 100, width: 100 }),
    // Leaderboard: GoLeaderBoard(
    //   world,
    //   { x: 70, y: 300 },
    //   { height: 100, width: 100 }
    // ),
    ...asteroids,
    ...spaceCoins,
    ...scrolls,
    // ...healthLives,
  };
};
