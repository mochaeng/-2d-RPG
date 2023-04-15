import { World } from "./world";

const gameContainer = document.querySelector(".game-container");
const gameCanvas = gameContainer?.querySelector(
  ".game-canvas"
) as HTMLCanvasElement;
const context = gameCanvas.getContext("2d") as CanvasRenderingContext2D;

const world = new World(gameCanvas, context);
world.init();

// const hero = new GameObject()
