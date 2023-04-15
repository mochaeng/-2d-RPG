import { Sprite } from "./sprite";

export class GameObject {
  public x: number;
  public y: number;
  public sprite: Sprite;

  constructor(x: number, y: number, sprite: Sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }
}
