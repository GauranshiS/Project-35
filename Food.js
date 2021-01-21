class Food {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      var foodStock=createSprite;
      var lastFed=createSprite;

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("image/milkBottleImg.png")
    }
    display(){
     
      bedroom(){
        background(bedroom,550,500);
      }

      garden(){
        background(garden,550,500);

      }

      washroom(){
        background(washroom,550,500);

      }

      var pos =this.body.position;

      rectMode(CENTER);
      
      fill("brown");
      
      rect(pos.x, pos.y, this.width, this.height);
   
      fill(255,255,254);
      textSize(15);

      if(lastFed>=12){

        text("Last Feed: "+ lastFed%12 + "PM", 250,30);
      }

      else if(lastFed==0){
        text("Last Feed: 12 AM", 350,30);
      }
   
      else{

        text("Last Feed: "+ lastFed + "AM",350,30);
      }

      currentTime=hour();
      if(currentTime==(lastFed+1)){

        update("Playing");
        foodObj.garden();
        } else if(currentTime==(lastFed+2)){
          update("Sleeping");
          foodObj.bedroom();      
        } else if(currentTime>(lastFed+2)&& currentTime<=(lastFed+4)){
          update("Bathing");
          foodObj.washroom();

        } else{
          update("Hungry")
          foodObj.display();
        }
    }

  };
