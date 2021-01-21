//Create variables here

var dog,happyDog,foodS, foodStock,database,fedTime, lastFed, feed,addFood, foodObj, changeGameState, 
readGameState,bedroomImg,gardenImg,washroomImg,bedroom;

function preload()
{
  //load images here
  bedroomImg=loadImage("virtual+pet+images/Bed Room.png");
  gardenImg=loadImage("virtual+pet+images/Garden.png");
  washroomImg=loadImage("virtual+pet+images/Wash Room.png")
   dogImg=loadImage("images/dogImg.png")
   happyDog=loadImage("images/happyDogImg.png")

}

function setup() {
	createCanvas(500, 500);
  
  var dog=createSprite(0,0,0,0);
  var foodObj=createSprite

  feed=createButton("Feed the dog!"); 
  feed.position(700,95);
  feed.mousePressed(fedDog);

  addFood=createButton("Add food!");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  World.add(world,dog)
  imageMode(CENTER);
  image(dogImg,dog.position.x,dog.position.y);

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("Value",readStock);

}


function draw() {  

background(46, 139, 87);


if(keyWentDown(UP_ARROW)){


writeStock(foodS);
dog.addImage(happyDog)

}

if(gameState!="Hungry"){
feed.hide();
addFood.hide();
dog.remove();
} else{
feed.show();
addFood.show();
dog.addImage(sadDog);


}

  drawSprites();

  //add styles here
  fill("Blue");
  stroke("Yellow");
  text(foodS,120,20);
  textSize(20);

}

function readStock(data){

  foodS=data.val();

}

function writeStock(x){

if(x<=0){
  x=0;
}
else{

  x=x-1;
}


database.ref('/').update({

  Food:x
})

}