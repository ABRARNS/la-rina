import{entity}from "./entity.js";
import {shadow,soldier,olly}from "./charecter.js"
import "./movements.js";
import "./bgSounds.js";
import "./ai_opponent.js"
import{abg} from "./map_animation.js"
import { aiUpdate } from "./ai_opponent.js";
console.log("Current page:", window.location.pathname);
console.log("Canvas:", document.getElementById("c"));
export const canvas = document.getElementById('c')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
export const c = canvas.getContext('2d')
import "./map_animation.js"
//all constants here
export let total_win = Number(localStorage.getItem("total_win")) || 0;
export let total_lose = Number(localStorage.getItem("total_lose")) || 0;
export let total_dealt = Number(localStorage.getItem("total_dealt")) || 0;
export let total_taken = Number(localStorage.getItem("total_taken")) || 0;

const ground_y = 325;
const c_width = canvas.width
const c_height = canvas.height
let scoreSaved = false;
//map
import { new_map } from "./map_animation.js";

const map = localStorage.getItem("map") || "first-map.png";

new_map(map);
console.log(shadow)
// Steps to create player
export const player = new entity({
    position:{x:200,y:ground_y},
    health:100,
    status:"normal",
    animation_status:"idle",
    Issave:false,
   
    ...shadow
})
console.log(canvas);
//create villan
export const player2 = new entity({
   position:{x:1000,y:ground_y},
    health:100,
    status:"normal",
    animation_status:"idle",
    Issave:false,
   
    ...shadow
})
if(player.health <=0){
            player.health =0;
        }
//all let here
export let health_box_2_width =player2.health;
export let health_box_2_height = 10;

export let health_box_1_width = player.health;
export let health_box_1_height = 10;
let gameOver1 = false;
function animate(){
 c.clearRect(0,0,c_width,c_height)
 requestAnimationFrame(animate)
 c.drawImage(abg,0,0,canvas.width,canvas.height)
 
 player.draw(c)
 player2.draw(c)
 //ai update 
 aiUpdate()
 c.fillStyle ='red'
 //health for player1
 c.font = "15px Tahoma"
 c.fillText(`Your Health:${player.health}`,20,40,)
 // health for player2
 c.fillText(`Opponent Health:${player2.health}`,canvas.width - 150,40)
// box health level for player1

c.fillRect(20,50, player.health, 10)
// box health level for player2

c.fillRect(canvas.width-120,50,player2.health, 10)
//game over
if(player.health <= 0 || player2.health <= 0){
        gameOver1 = true;
        
    }
     
if (gameOver1) {

    if (player2.health <= 0) {
        
        c.font = "50px Arial";
        c.fillText("GAME OVER", 200, 100);
        c.fillText("You Win", 200, 150);
        c.fillText(`Your Health: ${player.health}`, 200, 200);

        return;
    }

    if (player.health <= 0) {
        
        c.font = "50px Arial";
        c.fillText("GAME OVER", 200, 100);
        c.fillText("You Lose", 200, 150);
        c.fillText(`Opponent Health: ${player2.health}`, 200, 200);

        return;
    }
}

}
canvas.addEventListener("click", () => {
    if (gameOver1) {
        resetGame();
        gameOver1= false;
    }
});

//Game Over
function resetGame() {
   
        player.position.x = 200;
    player.position.y = ground_y;
    player.health = 100;

    player2.position.x = 500;
    player2.position.y = ground_y;
    player2.health = 100;
    
    

    
}

//sprite selection
let selected_sprite = localStorage.getItem("character")
if(selected_sprite === "shadow_dog"){
   player.s_c(shadow)
}
if(selected_sprite === "soldier1"){
    player.s_c(soldier)
}
if(selected_sprite === "olly"){
    player.s_c(olly)
}
// enemy selection
let selected_enemy = localStorage.getItem("enemy")
if(selected_enemy === "shadow_dog"){
   player2.s_e(shadow)
}
if(selected_enemy === "soldier1"){
    player2.s_e(soldier)
}
if(selected_sprite === "olly"){
    player.s_e(olly)
}
console.log(localStorage.getItem("character"))
console.log(localStorage.getItem("enemy"))
//canvad resize issue fixed 
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

})
animate()
