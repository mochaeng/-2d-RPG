export class Sprite {
  public animation: Animation | undefined;
  public image: HTMLImageElement;
  public isImageLoaded: boolean = false;
  public x: number;
  public y: number;

  constructor(
    imageSource: string,
    x: number,
    y: number,
    animation?: Animation
  ) {
    this.image = new Image();
    this.image.src = imageSource;
    this.image.onload = this.loadImage;
    this.animation = animation;
    this.x = x;
    this.y = y;
  }

  private loadImage = () => {
    this.isImageLoaded = true;
  };

  public draw(context: CanvasRenderingContext2D) {
    if (this.isImageLoaded) {
      context.drawImage(this.image, 0, 0, 32, 32, this.x, this.y, 32, 32);
    }
  }
}

export class Animation {
  animations: Map<string, number[]>;
  currentAnimation: string;
  currentAnimationFrame: number;

  constructor(
    animations: Map<string, number[]>,
    currentAnimation: string,
    currentAnimationFrame: number
  ) {
    this.animations = animations;
    this.currentAnimation = currentAnimation;
    this.currentAnimationFrame = currentAnimationFrame;
  }
}
