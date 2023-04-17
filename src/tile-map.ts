import { GameObject } from "./game-object";

export class TileMap {
  public layers: Layer[];
  public gameObjects: GameObject[];

  constructor(gameObjects: GameObject[], layers: Layer[]) {
    this.gameObjects = gameObjects;
    this.layers = layers;
  }
}

export class Layer {
  public image: HTMLImageElement;
  public position: number;

  constructor(position: number, imageSource: string) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSource;
  }

  public draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, 0, 0);
  }
}
