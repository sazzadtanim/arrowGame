let circle = [];
let angle = 0;
let arrowThrowed = false;
let arrowSpeed = .01;
let pressed = false;
let keyCounter = 0;


function setup() {
  createCanvas(400, 400);
  resetSketch();
  let button1 = createButton("reset");
  let button2 = createButton("Throw");
  button1.mousePressed(resetSketch);
  button2.mousePressed(addArrow);

}
function resetSketch(){
   circle = [];
  let circleNumber=  Math.floor(Math.random()*15)+1;
  for (var i = 0; i < circleNumber; i++) {
    circle[i] = new Circle(100, (i - 1) * (TWO_PI / circleNumber));
    print(circleNumber);
  }
  arrowSpeed = .01;

}

function addArrow(){
  let newCircle = new Circle(100, PI / 2, 150,10);
  circle.push(newCircle);

}

function draw() {
  translate(200, 200);
  background(50, 89, 100);

  //uporer boro circle
  fill(255)
  ellipse(0, 0, 200);
  // nicher arrow circle
  ellipse(0, 200, 10);


  for (let i = 0; i < circle.length; i++) {
    circle[i].rotate();
    circle[i].show();
  }


  for(let k=0; k<circle.length-1;k++){
    let d= dist(circle[circle.length-1].x,circle[circle.length-1].y,circle[k].x,circle[k].y);
    if(d<15){
      print("ok");
      arrowSpeed=0;
      resetSketch();
      break;
    }

  }

  keyCounter = 0;

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    keyCounter++;
    // print(keyCounter);

  }
}

class Circle {
  constructor(radius, angle, color = 255,r=20) {
    this.radius = radius;
    this.angle = angle;
    this.color = color;
    this.r=r;
    this.x = this.radius * cos(this.angle);
    this.y = this.radius * sin(this.angle);
  }
  show() {
    fill(this.color);
    ellipse(this.x, this.y, this.r);
  }
  rotate() {
    this.x = this.radius * cos(this.angle);
    this.y = this.radius * sin(this.angle);
    this.angle = this.angle + arrowSpeed;

  }
  intercepts(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d <= this.r + other.r) {
      // print(d);
      return true;
    } else
      return false;
  }
}
