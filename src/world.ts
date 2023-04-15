import { GameObject } from "./game-object";
import { Animation, Sprite } from "./sprite";

export class World {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
  }

  init() {
    const image = new Image();
    image.src = "res/images/maps/DemoLower.png";
    image.onload = () => {
      this.context?.drawImage(image, 0, 0);
    };

    const animations: Map<string, number[]> = new Map();
    animations.set("idle-down", [0, 0]);
    const animation: Animation = {
      animations: animations,
      currentAnimation: "idle-down",
      currentAnimationFrame: 0,
    };

    const sprite = new Sprite(
      "res/images/characters/people/hero.png",
      animation
    );

    const gameObject = new GameObject(5, 5, sprite);

    setTimeout(() => {
      console.log("hi");
      gameObject.sprite.draw(this.context, 1, 6);
    }, 200);
  }
}
