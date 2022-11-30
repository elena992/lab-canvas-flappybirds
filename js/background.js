class Background {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.img = new Image();
    this.img.src = "images/bg.png";
    this.isReady = false;
    this.img.onload = () => {
      this.isReady = true;
    };
  }

  draw() {
    if (this.isReady) {
      this.ctx.drawImage(
        this.img,
        this.x - this.ctx.canvas.width,
        this.y,
        this.width,
        this.height
      );
    }
  }
}
