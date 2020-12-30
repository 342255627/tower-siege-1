var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var img, slingShot, polygon, gameState;

const Engine= Matter.Engine;
const World= Matter.World;
const Events= Matter.Events;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;


function preload(){
    img  = loadImage('polygon.png')
}


function setup(){
    createCanvas(1200,400)
    engine = Engine.create();
    world = engine.world;  
ground = new Ground();
stand = new Ground();
gameState= "onSling";

//1
block1 = new Box(330,235,30,40);
block2 = new Box(360,235,30,40);
block3 = new Box(390,235,30,40);
block4 = new Box(420,235,30,40);
block5 = new Box(450,235,30,40);
//2
block6 = new Box(360,195,30,40);
block7 = new Box(390,195,30,40);
block8 = new Box(420,195,30,40);
//top
block9 = new Box(390,155,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
slingShot=new SlingShot(this.polygon, {x:100,y:200});

}

function draw(){

    background("white");
    imageMode(CENTER);

image(img, polygon.position.x,polygon.position.y,20,20);
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 ground.display();
 stand.display(); 
 slingShot.display(); 
}

function mouseDragged(){
    if(gameState!=="launched"){
   
              Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingShot.fly();
    gameState="launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}


