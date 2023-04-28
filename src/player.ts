import { GameObject } from "./game-object";
import { Input } from "./input";
import { Animation } from "./sprite";
import { Vector2D } from "./vector2d";

export class Player extends GameObject {
  directionMovements: Map<string, [string, number]> = new Map();
  targetedPosition: Vector2D = Vector2D.ZERO;

  constructor(
    imageSource: string,
    x: number,
    y: number,
    animation?: Animation | undefined
  ) {
    super(imageSource, x, y, animation);
  }

  override update(delta: number): void {
    let inputVector = Vector2D.ZERO;
    inputVector.x =
      Input.getActionStrength("ui_right") - Input.getActionStrength("ui_left");
    inputVector.y =
      Input.getActionStrength("ui_down") - Input.getActionStrength("ui_up");

    inputVector = inputVector.normalized();

    this.sprite.x += inputVector.x;
    this.sprite.y += inputVector.y;
  }
}
