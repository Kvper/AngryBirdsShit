var glass, wood, swidth

swidth = 800;

class Woodrec{
  constructor(x, y, vx, vy, width, height, color){
    this.color = "298f12"
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.height = height;
    this.width = width; 
  }

  draw(){
    rect(this.x, this.y, this.width, this.height);
  }

}

function draw(){
  fill("#298f12");
  rect(0,350,swidth,50);
  
  fill("#b1651f")
  rect(500, 335, 210, 15)
  rect(520, 250, 10, 85)
  rect(600, 250, 10, 85)
  rect(680, 250, 10, 85)
  rect(520, 240, 85, 10)
  rect(605, 240, 85, 10)
  rect(530, 150, 150, 10)
  rect(100,265, 15, 85)
  ellipse(555, 130, 40, 40)


  fill("#ccfffe")
  rect(550, 160, 10, 80)
  rect(650, 160, 10, 80)
  ellipse(555, 130, 40, 40)

}


function setup() {
	createCanvas(swidth, 400);
  background("cyan");
  
  Rec1 = new Woodrec(500, 335, 210, 15)
 
}