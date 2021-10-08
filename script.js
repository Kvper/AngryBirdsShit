var swidth, vx

swidth = 1000;
vx = 0;

//Classes//

class RedBird{
  constructor(x, y, w, h, vx, vy){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.clor = "red";
    this.vx = vx;
    this.vy = vy;
  }
  draw(){

    ellipse(this.x, this.y,this.w, this.h);
    this.x += this.vx;
    this.y += this.vy;
  }

}

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

var rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, ellip1, glassrec1, glassrec2, redb

var rects = [];

let bg;

function setup() {
	createCanvas(swidth, 400);
  rec1 = new Woodrec(700, 335, 210, 15, "brown");
  rec2 = new Woodrec(720, 250, 10, 85);
  rec3 = new Woodrec(800, 250, 10, 85);
  rec4 = new Woodrec(880, 250, 10, 85);
  rec5 = new Woodrec(720, 240, 85, 10);
  rec6 = new Woodrec(805, 240, 85, 10);
  rec7 = new Woodrec(730, 150, 150, 10);

  rects.push(rec1);
  rects.push(rec2);
  rects.push(rec3);
  rects.push(rec4);
  rects.push(rec5);
  rects.push(rec6);
  rects.push(rec7);
  
  
  ellip1 = new GlassEllip(755, 130, 40, 40);
  glassrec1 = new GlassRec(750, 160, 10, 80);
  glassrec2 = new GlassRec(850, 160, 10, 80);
  redb = new RedBird(235, 295, 25, 25, 0, 0);
}

var lineY = 0;


function draw(){
  background("cyan");
  fill("#298f12");
  
  rect(0,350,swidth,50);

  line(235, 295, mouseX, mouseY);

  //lineY++;
  // keyUp => lineY --;
  // keyDown => lineY ++;

  
  //Wooden Recs//
  fill("#a56f36")
  rects.forEach(r=>r.draw());

  //Slingshot//
  rect(250, 285, 15, 65);
  
  


  fill("#f41e1e")
  //Birds//
  redb.draw();

  //Glass Ellipse and Rectangles//
  fill("#ccfffe");
  glassrec1.draw();
  glassrec2.draw();
  ellip1.draw();

}

function mouseClicked() {
  redb.vx = 3;
  let xdist = mouseX - redb.x;
  let ydist = redb.y - mouseY;

  let speed = xdist / redb.vx;
  redb.vy = (ydist / speed) *-1;
}


