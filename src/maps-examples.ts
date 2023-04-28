import { GameObject } from "./game-object";
import { Player } from "./player";
import { Animation, Sprite } from "./sprite";
import { Layer, TileMap } from "./tile-map";
import { Utils } from "./utils";

const demoRoomlayer0 = new Layer(0, "res/images/maps/DemoLower.png");
const demoRoomlayer1 = new Layer(1, "res/images/maps/DemoUpper.png");

const kitchenlayer0 = new Layer(0, "res/images/maps/KitchenLower.png");
const kitchenlayer1 = new Layer(1, "res/images/maps/KitchenUpper.png");

// const animations: Map<string, number[]> = new Map();
// animations.set("idle-down", [0, 0]);
// const animation: Animation = {
//   animations: animations,
//   currentAnimation: "idle-down",
//   currentAnimationFrame: 0,
// };

const hero = new Player(
  "res/images/characters/people/hero.png",
  Utils.withGrid(4, 16),
  Utils.withGrid(5, 16)
);
const npc1 = new GameObject(
  "res/images/characters/people/npc1.png",
  Utils.withGrid(9, 16),
  Utils.withGrid(4, 16)
);
const npc2 = new GameObject(
  "res/images/characters/people/npc2.png",
  Utils.withGrid(11, 16),
  Utils.withGrid(7, 16)
);

export const demoRoom = new TileMap(
  [hero, npc1],
  [demoRoomlayer0, demoRoomlayer1]
);

export const kitchen = new TileMap(
  [hero, npc1, npc2],
  [kitchenlayer0, kitchenlayer1]
);
