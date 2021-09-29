var swidth, 

swidth = 1000;

//Classes//
class GlassRec{
  constructor(x, y, w, h, c, vx, vy){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.clor = c;
    this.vx = vx;
    this.vy = vy;
    
  }

  draw(){
    rect(this.x, this.y,this.w, this.h, this.c, this.vx, this.vy);
  }

}

class GlassEllip{
  constructor(x, y, w, h, c, vx, vy){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.clor = c;
    this.vx = vx;
    this.vy = vy;
    
  }

  draw(){
    ellipse(this.x, this.y,this.w, this.h, this.c, this.vx, this.vy);
  }

}

class Woodrec{
  constructor(x, y, w, h, c, vx, vy){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.clor = c;
    this.vx = vx;
    this.vy = vy;
    
  }

  draw(){
    rect(this.x, this.y,this.w, this.h, this.c, this.vx, this.vy);
  }

}

var rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, ellip1, glassrec1, glassrec2

function setup() {
	createCanvas(swidth, 400);
  rec1 = new Woodrec(700, 335, 210, 15, "brown");
  rec2 = new Woodrec(720, 250, 10, 85);
  rec3 = new Woodrec(800, 250, 10, 85);
  rec4 = new Woodrec(880, 250, 10, 85);
  rec5 = new Woodrec(720, 240, 85, 10);
  rec6 = new Woodrec(805, 240, 85, 10);
  rec7 = new Woodrec(730, 150, 150, 10);
  ellip1 = new GlassEllip(755, 130, 40, 40);
  glassrec1 = new GlassRec(750, 160, 10, 80);
  glassrec2 = new GlassRec(850, 160, 10, 80);
}

function draw(){
  background("cyan");
  fill("#298f12");
  
  rect(0,350,swidth,50);
  
  //Wooden Recs//
  fill("#a56f36")
  rec1.draw();
  rec2.draw();
  rec3.draw();
  rec4.draw();
  rec5.draw();
  rec6.draw();
  rec7.draw();

  //Slingshot//
  rect(250,265, 15, 85);
  

  //Glass Ellipse and Rectangles//
  fill("#ccfffe");
  glassrec1.draw();
  glassrec2.draw();
  ellip1.draw();

}

