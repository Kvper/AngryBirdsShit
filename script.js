var swidth, mode, vx

swidth = 1000;
vx = 0;

//Classes//
class RedBird {
  constructor(x, y, w, h, vx, vy, r) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.clor = "red";
    this.vx = vx;
    this.vy = vy;
    this.r = r
  }

  draw() {

    rect(this.x, this.y, this.w, this.h);
    this.x += this.vx;
    this.y += this.vy;
  }
}

class GlassEllip {
  constructor(x, y, w, h, c, vx, vy) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.clor = c;
    this.vx = vx;
    this.vy = vy;

  }

  draw() {
    ellipse(this.x, this.y, this.w, this.h, this.c, this.vx, this.vy);
  }
}

class Block {
  constructor(x, y, w, h, c, vx, vy) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    if(!c || c == ""){
      c =  "#9e3700";
    }
    this.clor = c;
    this.vx = vx;
    this.vy = vy;

  }

  draw() {
    fill(this.clor);
    rect(this.x, this.y, this.w, this.h, this.c);
  }

  checkCollision(){
    if(redb.x + redb.w > this.x){
      // todo: niet rood maken maar blokje verwijderen? ofzo..
      redb.x = 1000;
      this.x = 1000;
      //redb.vx = redb.vx * -1
      //redb.vy = redb.vy * -1
    }
    else{
      redb.x = redb.x;
    }

  }
}

var rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, ellip1, glassrec1, glassrec2, redb

var rects = [];

let bg;

function setup() {
  createCanvas(swidth, 400);
  mode = 0;
  textSize(21);
  rec1 = new Block(700, 335, 210, 15);
  rec2 = new Block(720, 250, 10, 85);
  rec3 = new Block(800, 250, 10, 85);
  rec4 = new Block(880, 250, 10, 85);
  rec5 = new Block(720, 240, 85, 10);
  rec6 = new Block(805, 240, 85, 10);
  rec7 = new Block(730, 150, 150, 10);

  glassrec1 = new Block(750, 160, 10, 80, "lightblue");
  glassrec2 = new Block(850, 160, 10, 80, "lightblue");

  rects.push(rec1);
  rects.push(rec2);
  rects.push(rec3);
  rects.push(rec4);
  rects.push(rec5);
  rects.push(rec6);
  rects.push(rec7);

  rects.push(glassrec1);
  rects.push(glassrec2);


  ellip1 = new GlassEllip(755, 130, 40, 40, "lime");

  redb = new RedBird(235, 295, 25, 25, 0, 0);
}

var lineY = 0;

function mouseClicked() {
  if (mode == 1){
  redb.vx = 3;
  let xdist = mouseX - redb.x;
  let ydist = redb.y - mouseY;
  let speed = xdist / redb.vx;
  redb.vy = (ydist / speed) * -1;
  }
}

function draw() {

  if (mode == 0){
    background('white');
    text('Angry birbs press enter',250,200);
  }

  if (mode == 1){
background("cyan");
  fill("#298f12");

  rect(0, 350, swidth, 50);

  line(235, 295, mouseX, mouseY);
  //lineY++;
  // keyUp => lineY --;
  // keyDown => lineY ++;

  //Wooden Recs//
  fill("#a56f36")
  rects.forEach((r) => {
    r.draw();
    r.checkCollision();

  });

  //Slingshot//
  rect(250, 285, 15, 65);

  fill("#f41e1e")

  //Birds//
  redb.draw();

  //Glass Ellipse and Rectangles//
  fill("#ccfffe");
  ellip1.draw();
}



  
}
function keyPressed(){
 if (keyCode === ENTER){
   mode = 1;
 }
}