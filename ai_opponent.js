import { player, player2,canvas} from "./main.js";
let timer =0;
import { punchSound1,runSound1} from "./bgSounds.js";
export function aiUpdate() {
    timer++
const LEFT_LIMIT = 50;
const RIGHT_LIMIT = canvas.width - 70;
    if (!player || !player2) return;
    let position1 = player.position.x
    let position2 = player2.position.x
     
    let distance = Math.abs(player.position.x - player2.position.x);
    
 
     if(player2.health < 50){
    player2.status = "runaway";
    runSound1()
}
else if(distance <= 37 && Math.random() > 0.5){
    player2.status = "shield";
    
}
else if(distance > 50){
    player2.status = "chase";
    runSound1()
}
else   if(distance < 20){
    player2.status = "comeback";
    runSound1()
}
    else{
    player2.status = "attack";
    
}
    //status management
    if(player2.status === "chase"){
        if(position1> position2){
            player2.position.x += player2.speed
        } else{
            player2.position.x -= player2.speed
        }
    }
    if (player2.status === "comeback") {
    if (player.position.x > player2.position.x) {
        player2.position.x -= 2; 
        
        // small step back
    } else {
        player2.position.x += 2;
         // small step backa
    }}
    if(player2.status === "attack"){
    if(!player.Issave){
       if(timer > 30){
       if(Math.floor(Math.random() * 10) > 6 ){
            punchSound1()
            player.health -= player2.damage
            
        }
        timer=0
         }
    }
        
     if(distance <= 37 ){
     player2.Issave = true
    
}  else{
    player2.Issave = false
}
    }
    if (player2.status === "runaway") {
     if(distance <= 35){
        if(!player.Issave){
       if(timer > 30){
       if(Math.floor(Math.random() * 10) > 6 ){
            punchSound1()
            player.health -= player2.damage
            
        }
        timer=0
         }
    }
     }
        if (player.position.x > player2.position.x) {
    if (player2.position.x >= LEFT_LIMIT) {
        player2.position.x -= player2.speed * 2;
        
    }
} else {
    if (player2.position.x <= RIGHT_LIMIT) {
        player2.position.x += player2.speed * 2;
    }

}

}
if(player2.status === "shield"){
    player2.Issave = true;
} else{
    player2.Issave = false;
}

    }
