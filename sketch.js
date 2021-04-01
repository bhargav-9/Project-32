const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg="sunrise1.png" ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    

}

async function getBackgroundImg(){

    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var JSONresponds=await response.json();
    var Datetime=JSONresponds.datetime;
    hour=Datetime.slice(11,13)
     
    if(hour>=04 && hour<=06){
        bg="sunrise1.png";
    }
    else if(hour>=07 && hour<=08){
        bg="sunrise2.png";
    }
    else if(hour>=09 && hour<=10){
        bg="sunrise3.png";
    }
    else if(hour>=11 && hour<=12){
        bg="sunrise4.png";
    }
    else if(hour>=13 && hour<=14){
        bg="sunrise5.png";
    }
    else if(hour>=15 && hour<=16){
        bg="sunrise6.png";
    }
    else if(hour==17){
        bg="sunset7.png";
    }
    else if(hour==18){
        bg='sunset8.png';
    }
    else if(hour>=19 && hour <=20){
        bg="sunset9.png";
    }
    else if(hour>=21 && hour<= 22){
        bg="sunset10.png";
    }
    else if(hour==23){
        bg="sunset11.png";
    }
    else {
        bg="sunset12.png";
    }


    backgroundImg=loadImage(bg)

}
