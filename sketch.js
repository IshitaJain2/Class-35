var database;
var canvas,backgroundImg,gameState=0,playerCount,form,player,game;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}