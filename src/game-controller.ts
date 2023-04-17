import { GameObject } from "./game-object";
import { demoRoom, kitchen } from "./maps-examples";
import { Animation, Sprite } from "./sprite";
import { TileMap } from "./tile-map";

export class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  tileMap: TileMap | null = null;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
  }

  public init() {
    this.tileMap = kitchen;
    console.log(this);
    requestAnimationFrame(this.gameLoop); // starting the gameloop
  }

  private render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.tileMap?.layers[0].draw(this.context); // bottom-layer

    this.tileMap?.gameObjects.forEach((gameObject) =>
      gameObject.sprite.draw(this.context)
    );

    this.tileMap?.layers[1].draw(this.context); // top-layer
  }

  private update() {
    this.tileMap?.gameObjects.forEach((gameObject) => {
      // gameObject.sprite.x += 0.05;
    });
  }

  private gameLoop = () => {
    this.render();
    this.update();
    requestAnimationFrame(this.gameLoop);
  };
}
