var canvas, backgroundImage;

var gameState = 0;

var stock = 0;
var database;

var form, player, game;

function preload(){
  
}

function setup(){
  canvas = createCanvas(1000,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
    background(rgb(46, 139, 87));

    form.display();

  if(playerCount === 0){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
}
