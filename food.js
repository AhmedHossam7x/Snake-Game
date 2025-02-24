let food = getRandomFoodPosition();
const EXPANTION_RATE = 2;

import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANTION_RATE);
        food = getRandomFoodPosition();
    }
}
export function draw(gameBoard){
    const foodElement = document.createElement("div");
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}
function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}