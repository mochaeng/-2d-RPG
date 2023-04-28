export class Vector2D {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public normalized(): Vector2D {
    const magnitude = this.magnitude();
    if (magnitude === 0) {
      return Vector2D.ZERO;
    }
    return this.scale(1 / magnitude);
  }

  public scale(factor: number): Vector2D {
    return new Vector2D(factor * this.x, factor * this.y);
  }

  public magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public static get ZERO(): Vector2D {
    return new Vector2D(0, 0);
  }
}
