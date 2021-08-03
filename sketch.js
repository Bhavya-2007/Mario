
var backgroundImg
var mario1
var marioImg
function preload() {
    backgroundImg = loadImage("Background.jpg");
    mario1 =  loadAnimation("Marion run.png","Mario walk.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
   marioImg. addAnimation("run", mario1);
}

function draw(){
    background(backgroundImg);
    if (ground.x < 0){
        ground.x = ground.width/2;
}
}
