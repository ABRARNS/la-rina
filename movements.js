import{entity} from "./entity.js"
import{punchSound1,runSound1} from "./bgSounds.js"
import{c,player,player2,canvas,health_box_2_width,health_box_2_height,health_box_1_width,health_box_1_height} from "./main.js"
window.addEventListener('keydown',(e)=>{
    let key = e.code
    console.log(key)
    if(key === "KeyD" || key === "ArrowRight"){
        player.status ="run"
        runSound1()
        player.position.x += player.speed
        player.animation_status = "run_right"
    }
    if(key === "KeyA" || key === "ArrowLeft"){
        player.status ="run";
        runSound1()
        player.position.x -= player.speed
        player.animation_status = "run_left"
    }
    
    
    if(key === "KeyJ"){
        player.status ="punch"
        punchSound1()
        let distance = Math.abs(player.position.x - player2.position.x)
        if(!player2.Issave){
          if(distance <= 40){
            
            player2.health -= player.damage
        }
        if(player.health <= 0 ){
            player.health = 0;
        }
        if(player2.health <= 0){
            player2.health = 0;
        }
        }
        
       
    }
    if(key === "KeyK"){
     player.Issave = true;
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
    console.log(player2.health)
})
window.addEventListener("keyup", (e) => {
    if (e.code === "KeyK") {
        player.Issave = false;
    }
});
