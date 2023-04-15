export class Sprite {
  public animation: Animation;
  public image: HTMLImageElement;
  public isImageLoaded: boolean = false;

  constructor(imageSource: string, animation: Animation) {
    this.image = new Image();
    this.image.src = imageSource;
    this.image.onload = this.loadImage;
    this.animation = animation;
  }

  private loadImage = () => {
    this.isImageLoaded = true;
  };

  public draw(context: CanvasRenderingContext2D, x: number, y: number) {
    if (this.isImageLoaded) {
      context.drawImage(this.image, 0, 0, 32, 32, x * 16, y * 16, 32, 32);
    }
  }
}

export interface Animation {
  animations: Map<string, number[]>;
  currentAnimation: string;
  currentAnimationFrame: number;
}
