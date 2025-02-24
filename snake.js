import {getInputDirection} from "./input.js";

const snakeBody = [{x:11, y:11},];
let newSegmants = 0;

export let SNAKE_SPEED = 2;
export function update(){
    addSegment();
    let inputDirection = getInputDirection();
    for(let i = snakeBody.length -2; i >= 0; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard){
    snakeBody.forEach((segment)=>{
        const snakeElement = document.createElement("div");
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
}
export function expandSnake(amount){newSegmants += amount;}
export function onSnake(position, {ignoeHead = false} = {}){
    return snakeBody.some((segment, index) => {
        if(ignoeHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}
export function getSnakeHead(){return snakeBody[0];}
export function snakeIntersection(){return onSnake(snakeBody[0], { ignoeHead: true});}
function equalPositions(pos1, pos2){return(pos1.x === pos2.x && pos1.y === pos2.y);}
function addSegment(){
    for(let i = 0; i < newSegmants; i++){
        snakeBody.push({...snakeBody[snakeBody.length -1]});
    }
    newSegmants = 0;
}