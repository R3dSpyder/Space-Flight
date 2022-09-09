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
import Collectable from "./Collectable";
import GoLeaderBoard from "./GoLeaderBoard";
// import Health from "./Health";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default (restart) => {
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
      { height: 50, width: 50 }
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

    Wall: Wall(
      world,
      "green",
      { x: -5, y: -windowHeight },
      { height: windowHeight, width: 10 }
    ),
    Collectable: Collectable(
      world,
      { x: axisGenerator(0, windowWidth), y: -50 },
      { height: 25, width: 25 }
    ),
    Start: Start(world, { x: 200, y: 200 }, { height: 100, width: 100 }),
    Leaderboard: GoLeaderBoard(
      world,
      { x: 70, y: 300 },
      { height: 100, width: 100 }
    ),
    ...asteroids,
    // ...healthLives,
  };
};
