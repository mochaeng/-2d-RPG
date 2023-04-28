import { demoRoom, kitchen } from "./maps-examples";
import { Player } from "./player";
import { TileMap } from "./tile-map";

export class GameController {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  tileMap: TileMap | null = null;
  lastTimestamp: number = 0;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.init();
  }

  public init() {
    this.lastTimestamp = performance.now();
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

  private update(delta: number) {
    this.tileMap?.gameObjects.forEach((gameObject) => {
      gameObject.update(delta);
      // gameObject.sprite.x += 1;
      // gameObject.sprite.draw(this.context);
    });
  }

  private gameLoop = () => {
    const currentTimestamp = performance.now();
    const delta = (currentTimestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = currentTimestamp;

    requestAnimationFrame(this.gameLoop);
    this.render();
    this.update(delta);
  };
}
