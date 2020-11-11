//Create variables here
var dog,happyDog,foodS,foodStock,dogImage;
var database;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog = createSprite(300,300)
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
dog.addImage(dogImage)
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  foodS--
  writeStock(foodS);
  dog.addImage(happyDog)

}
  drawSprites();
  textSize(25)
  fill("red")
  text("food Stock is "+foodS,300,50)
  //add styles here

}

function readStock(data){
  //Function to read values from DB
foodS = data.val();
}
//Function to write values in DB
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

