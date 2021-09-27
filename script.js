var swidth

swidth = 800;

class Woodrec{
  constructor(x, y, w, h, vx, vy, c){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.c = c;
    this.vx = vx;
    this.vy = vy;
    
  }

  draw(){
    rect(this.x, this.y,this.w, this.h, this.c, this.vx, this.vy);
  }

}

var rec1, rec2, rec3, rec4

function setup() {
	createCanvas(swidth, 400);
  rec1 = new Woodrec(500, 335, 210, 15, );
 
}

function draw(){
  background("cyan");
  fill("#298f12");
  
  rect(0,350,swidth,50);
  
  rec1.draw();
  rect(520, 250, 10, 85);
  rect(600, 250, 10, 85);
  rect(680, 250, 10, 85);
  rect(520, 240, 85, 10);
  rect(605, 240, 85, 10);
  rect(530, 150, 150, 10);
  rect(100,265, 15, 85);
  ellipse(555, 130, 40, 40);


  fill("#ccfffe");
  rect(550, 160, 10, 80);
  rect(650, 160, 10, 80);
  ellipse(555, 130, 40, 40);

}

