import { Animation, Sprite } from "./sprite";

export class GameObject {
  public sprite: Sprite;

  constructor(
    imageSource: string,
    x: number,
    y: number,
    animation?: Animation | undefined
  ) {
    this.sprite = new Sprite(imageSource, x, y, animation);
  }
}
