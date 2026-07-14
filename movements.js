import{entity} from "./entity.js"
import{punchSound1,runSound1} from "./bgSounds.js"
import{c,player,player2,canvas,health_box_2_width,health_box_2_height,health_box_1_width,health_box_1_height,total_dealt,total_taken,ground_y} from "./main.js"
let dealt = Number(localStorage.getItem("total_dealt")) || 0;
let wins= Number(localStorage.getItem("total_win")) || 0;
const mobile =navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;

const left = document.getElementById("left")
const right = document.getElementById("right") 
const shield = document.getElementById("shield")
const punch = document.getElementById("punch") 
window.addEventListener('keydown',(e)=>{
    let key = e.code
    
    if(key === "KeyD" || key === "ArrowRight"){
        player.facing = "right"
        player.status ="run"
        runSound1()
        player.position.x += player.speed
        player.animation_status = "run"
    }
    if(key === "KeyA" || key === "ArrowLeft"){
        player.status ="run";
        player.facing = "left"
        runSound1()
        player.position.x -= player.speed
        player.animation_status = "run"
        
    }
    
    
    if(key === "KeyJ"){
        player.status ="punch"
        punchSound1()
        let distance = Math.abs(player.position.x - player2.position.x)
        if(!player2.Issave){
          if(distance <= 30){
            if(Math.floor(Math.random() * 10) > 4){
                player2.health -= player.damage
                player2.animation_status = "hurt"
            dealt += player.damage
            localStorage.setItem("total_dealt",dealt)
            
            }
            
        }
        if(player.health <= 0 ){
            player.health = 0;
        }
        if(player2.health <= 0){
            player2.health = 0;
        }
        }
        
       player.animation_status = "punch"
    }
    if(player2.health <= 0){
                wins +=1
                localStorage.setItem("total_win",wins)
            }
    if(key === "KeyK"){
     player.Issave = true;
     player.animation_status = "shield"
    } 
     
    
    
    //wall collusion detection for player
    if (player.position.x > canvas.width - 20 ) {
    player.position.x = canvas.width - 20;
    
}   if(player.position.x < 0){
    player.position.x = 0;
    
   
}
   // wall collusion detection for player2
   if (player2.position.x > canvas.width - 20 ) {
    player2.position.x = canvas.width - 20;
    
}   if(player2.position.x < 0){
    player2.position.x = 0;
   
}
   
})
window.addEventListener("keyup", (e) => {
    if (e.code === "KeyK") {
        player.Issave = false;
    }
    if(e.code === "KeyA" || e.code === "KeyD" || e.code === "KeyJ"|| e.code === "ArrowLeft"|| e.code === "ArrowRight" || e.code === "KeyK"){
        player.animation_status = "idle"
    }

});
// mobile controls
let holding_left = false 
let holding_right = false
addEventListener("touchstart",()=>{
    if(mobile){
    document.getElementById("mobile-controls").style.display="flex";
    console.log("mobile")
    screen.orientation.lock("landscape").catch(() => {});
}
})

right.addEventListener("touchstart", (e) => {
    e.preventDefault();
    holding_right = true;
    player.facing = "right";
    player.status = "run";
    player.animation_status = "run";
});
right.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (holding_right) {
        player.facing = "right";
        player.position.x += player.speed;
        player.animation_status = "run";
    }
});
right.addEventListener("touchend",()=>{
    player.animation_status="idle";
    player.holding_right = false
});
left.addEventListener("touchstart",(e)=>{
        e.preventDefault()
        holding_left = true
        player.facing = "left"
        runSound1()
        player.position.x -= player.speed
        player.animation_status = "run"
});
left.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (holding_left) {
        player.facing = "left";
        player.position.x -= player.speed;
        player.animation_status = "run";
    }
});
left.addEventListener("touchend",()=>{
    player.animation_status="idle";
    holding_left = false
});
shield.addEventListener("touchstart",(e)=>{
    e.preventDefault()
    player.Issave=true;
    player.animation_status = "shield"
});
shield.addEventListener("touchend",(e)=>{
    e.preventDefault()
    player.Issave=false;
    player.animation_status = "idle"

});
punch.addEventListener("touchstart",(e)=>{
    e.preventDefault()
    
    player.status ="punch"
        punchSound1()
        let distance = Math.abs(player.position.x - player2.position.x)
        if(!player2.Issave){
          if(distance <= 30){
            if(Math.floor(Math.random() * 10) > 4){
                player2.health -= player.damage
            dealt += player.damage
            localStorage.setItem("total_dealt",dealt)
            
            }
            
        }
        if(player.health <= 0 ){
            player.health = 0;
        }
        if(player2.health <= 0){
            player2.health = 0;
        }
        }
        
       player.animation_status = "punch"
})
punch.addEventListener("touchend",(e)=>{
    e.preventDefault()
    player.animation_status = "idle"
})