import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

export async function collectFX() {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(require("./assets/sounds/power-up.mp3"), {
      shouldPlay: true,
    });
    await sound.setPositionAsync(0);
    await sound.playAsync();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  } catch (err) {
    console.log(err);
  }
}
export async function gameOverFX() {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(require("./assets/sounds/game-over.mp3"), {
      shouldPlay: true,
    });
    await sound.setPositionAsync(0);
    await sound.playAsync();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  } catch (err) {
    console.log(err);
  }
}
// this loops but doesn't stop :( try calling in useEffect in home which listens to start game and running
export async function inGame() {
  //   const sound = new Audio.Sound();
  //   try {
  //     await sound.loadAsync(require("./assets/sounds/in-game.mp3"), {
  //       shouldPlay: true,
  //       isLooping: true,
  //     });
  //     await sound.setPositionAsync(0);
  //     await sound.playAsync();
  //     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  //   } catch (err) {
  //     console.log(err);
  //   }
}
