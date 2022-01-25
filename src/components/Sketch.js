const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.noLoop();
    p5.strokeWeight(1);
  }
  
  p5.draw = () => {
    // p5.background(0, 255, 100);
  
    const columns = 15;
    const rows = 10;
    const cellWidth = p5.windowWidth / columns;
    const cellHeight = p5.windowHeight / rows;
  
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * cellWidth + cellWidth / 2;
        const y = r * cellHeight + cellHeight / 2;
        
        p5.drawFlower(x, y, p5.min(cellWidth, cellHeight));
      }
    }
  }
  
  p5.drawFlower = (x, y, size) => {
    const flowerSize = p5.random(size * .25, size * .95);
    const petalSize = flowerSize / 2;
    const spacing = petalSize / 2;
    
    p5.fill(p5.random(255), p5.random(255), p5.random(255));
    p5.circle(x - spacing, y - spacing, petalSize);
    p5.circle(x + spacing, y - spacing, petalSize);
    p5.circle(x - spacing, y + spacing, petalSize);
    p5.circle(x + spacing, y + spacing, petalSize);
    
    p5.fill(p5.random(255), p5.random(255), p5.random(255));
    p5.circle(x, y, petalSize);
  }
  // let objs = [];
  // let objsNum = 360;
  // const noiseScale = 0.01;
  // const palette = ["#ffffff", "#0631c2", "#c7ef00", "#00b353", "#000000"];

  // p5.setup = () => {
  //   const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
  //   canvas.position(0, 0);
  //   canvas.style("z-index", "-10");
  //   p5.rectMode(p5.CENTER);
  //   p5.angleMode(p5.DEGREES);
  //   p5.noStroke();

  //   for (let i = 0; i < objsNum; i++) {
  //     objs.push(new Obj(i));
  //   }

  //   p5.background("#ffa500");
  // };

  // p5.draw = () => {
  //   for (let i = 0; i < objs.length; i++) {
  //     objs[i].move();
  //     objs[i].checkLife();

  //     objs[i].display();
  //   }
  // };

  // class Obj {
  //   constructor(tmpIndex) {
  //     this.index = tmpIndex;
  //     this.init();
  //   }

  //   init = () => {
  //     this.vel = p5.createVector(0, 0);
  //     this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
  //     this.n = p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale);
  //     this.lifeMax = p5.random(20, 10);
  //     this.life = this.lifeMax;
  //     this.step = p5.random(0.1, 0.5);
  //     this.hMax = p5.map(this.n, 0, 10, 10, 0.1);
  //     this.h = this.hMax;
  //     this.rot = p5.map(this.n, 0, 1, -36, 360);
  //     this.c = p5.random(palette);
  //   };

  //   move = () => {
  //     let theta = p5.map(
  //       p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale),
  //       0,
  //       1,
  //       -36,
  //       360
  //     );
  //     this.vel.x = p5.abs(p5.cos(theta));
  //     this.vel.y = p5.sin(theta);
  //     this.pos.add(this.vel);

  //     this.rot = p5.map(
  //       p5.noise(this.pos.x * noiseScale, this.pos.y * noiseScale),
  //       0,
  //       1,
  //       -360,
  //       360
  //     );
  //   };

  //   checkLife = () => {
  //     this.life -= this.step;
  //     this.h = p5.map(this.life, 0, this.lifeMax, 0, this.hMax);
  //     if (this.life < 0) {
  //       this.init();
  //     }
  //   };

  //   display = () => {
  //     p5.fill(this.c);

  //     p5.push();
  //     p5.translate(this.pos.x, this.pos.y);
  //     p5.rotate(this.rot);
  //     p5.rect(0, 0, this.h * 0.5, this.h);
  //     p5.pop();
  //   };
  // }
};

export default Sketch;
