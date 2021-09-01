
var END=0;
var PLAY=1;

var gamestate = PLAY;

var score=0;

var gameover
var reset

var playbtn
var road
var car
var coin
var fruit

var boy

var left_invisible
var right_invisible

function preload() {
    roadImg = loadImage("Road.png")
    carImg = loadImage("bluecar.png")
    coinImg = loadImage("Gold_coin_icon.png")
    playbtnImg = loadImage("playbtn.webp")
    fruitImg = loadImage("1-strawberry-png-images.png")
    boyImg = loadImage("boy-png.png")

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  

  road = createSprite(width/2,height/2,400,400)
  road.scale = 0.9

  car = createSprite(width/2,height-100)
  car.scale = 0.3

  playbtn = createSprite(windowWidth/4,windowWidth/7.5,300,200)
  playbtn.scale = 0.2

  
  
      
  
  
  
    

  

  road.addImage(roadImg)
  car.addImage(carImg)
  playbtn.addImage(playbtnImg)
  

  left_invisible = createSprite(windowWidth+100, windowHeight/3+6,310,1000)
  right_invisible = createSprite(-100, windowHeight/3+6,310,1000)

  left_invisible.visible = false;
  right_invisible.visible = false;

  coinG = new Group();
  fruitG = new Group();
  boyG = new Group();

  
  


}


function draw() {
  
  background(220);

  drawSprites();

  textSize(69)
  fill(255)
  text("Score: "+score,windowWidth/6,windowHeight/9)

 
    if(road.y > 400) {
      road.y = 200
    }

    
  
    if(keyDown("RIGHT_ARROW")) {
        car.x = car.x+5
    }
  
    if(keyDown("LEFT_ARROW")) {
        car.x = car.x-5
    }
  
    car.collide(left_invisible)
    car.collide(right_invisible)

    if(mousePressedOver(playbtn)) {
      road.velocityY = 4
      playbtn.visible = false
    }

    

    if(car.isTouching(coinG)) {
      coinG.destroyEach();
      score=score+1
    }

    if(car.isTouching(boyG)) {
      boyG.destroyEach();
      text("Click the play button to play this game again!",270,300)
      road.velocityY = 0 
      playbtn.visible = true
      playbtn.x = 100
      playbtn.y = 100
      car.destroy();
     fruitG.destroyEach();
     coinG.destroyEach();
      
    }

    if(car.isTouching(fruitG)) {
      score=score+1.5
      fruitG.destroyEach();
      
    }


    createCoin();
    createFruit();
    createBoy();
  
  }

  



     
  



  
function createCoin() {
  if(World.frameCount % 320===0) {
    coin = createSprite(Math.round(random(30,windowWidth),50,20,20))
    coin.addImage(coinImg)
    coin.velocityY = 2
    coin.lifetime = 300
    coin.scale = 0.05
    coinG.add(coin)

}


}

function createFruit() {
  if(World.frameCount %350===0) {
    fruit = createSprite(Math.round(random(20,windowWidth),50,40,30))
    fruit.addImage(fruitImg)
    fruit.scale = 0.05
    fruit.velocityY = 3
    fruit.lifetime = 300
    fruit.scale = 0.1
    fruitG.add(fruit)
    
  }
}

function createBoy() {
  if(World.frameCount % 370===0)  {
    boy = createSprite(Math.round(random(40,windowWidth),30,40,50))
    boy.addImage(boyImg)
    boy.scale = 0.05
    boy.velocityY = 2.5
    boy.scale = 0.15
    boy.lifetime = 300
    boyG.add(boy)
  }
}





