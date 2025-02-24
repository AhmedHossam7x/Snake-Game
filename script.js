let lastRenderTime = 0;
let gameover = false;

import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from "./snake.js";
import { update as updatFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let gameBoard = document.getElementById("game-board");

function main(current_time){
    if(gameover){
        if(confirm("You Lose !!, Press ok to restart")){
            window.location = "/";
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondSinkeLastRensder = (current_time - lastRenderTime) / 1000;
    if(secondSinkeLastRensder < 1/SNAKE_SPEED) return;

    lastRenderTime = current_time;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updatFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function checkDeath(){
    gameover = outsideGrid(getSnakeHead()) || snakeIntersection();
}