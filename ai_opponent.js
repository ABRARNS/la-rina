import { player, player2, canvas } from "./main.js";
import { punchSound1, runSound1 } from "./bgSounds.js";
let taken = Number(localStorage.getItem("total_taken")) || 0;
let  deaths= Number(localStorage.getItem("total_lose")) || 0;
let timer = 0;

export function aiUpdate() {
    timer++;

    const LEFT_LIMIT = 50;
    const RIGHT_LIMIT = canvas.width - player2.drawWidth;

    if (!player || !player2) return;

    let position1 = player.position.x;
    let position2 = player2.position.x;
    let distance = Math.abs(position1 - position2);

    // Decide AI state
    if (player2.health < 30) {
        player2.status = "runaway";
        player2.animation_status = "run";
        runSound1();
    } else if (distance > 30) {
        player2.status = "chase";
        player2.animation_status = "run";
        runSound1();
    } else if (distance < 20) {
        player2.status = "comeback";
        player2.animation_status = "run";
        runSound1();
    } else if (distance <= 20 && Math.random() > 0.2) {
        player2.status = "shield";
    } else if (distance <= 30) {
        player2.status = "attack";
    } else {
        player2.status = "idle";
        player2.animation_status = "idle";
    }

    
    if (player2.status === "chase") {
        if (position1 > position2) {
            player2.position.x += player2.speed;
            player2.facing = "right";
        } else {
            player2.position.x -= player2.speed;
            player2.facing = "left";
        }
    }

   
    if (player2.status === "comeback") {
        if (position1 > position2) {
            player2.position.x -= 2;
            player2.facing = "left";
        } else {
            player2.position.x += 2;
            player2.facing = "right";
        }
    }

    
    if (player2.status === "attack") {

        if (position1 > position2) {
            player2.facing = "right";
        } else {
            player2.facing = "left";
        }

        if (!player.Issave) {
            if (timer > 30) {
                if (Math.floor(Math.random() * 10) > 6) {

                    punchSound1();
                    player2.animation_status = "punch";

                    player.health -= player2.damage;

                    taken += player2.damage;
                    localStorage.setItem("total_taken", taken);

                    

                    if (player.health < 0) {
                        player.health = 0;
                    }

                    timer = 0;
                }
            }
        }

        if (distance <= 37) {
            player2.Issave = true;
        } else {
            player2.Issave = false;
        }
    }
if (player.health <= 0) {
                        deaths++;
                        localStorage.setItem("total_lose", deaths);
                    }
    //run away
    if (player2.status === "runaway") {

        if (distance <= 35) {
        if (!player.Issave) {
             if (timer > 30) {
            if (Math.floor(Math.random() * 10) > 6) {
                        punchSound1();
                        player.health -= player2.damage;
                        player2.animation_status = "punch"
                    }
                    timer = 0;
                }
            }
        }

        if (position1 > position2) {
            if (player2.position.x > LEFT_LIMIT) {
                player2.position.x -= player.speed * 2;
                player2.facing = "left";
            }
        } else {
            if (player2.position.x < RIGHT_LIMIT) {
                player2.position.x += player.speed * 2;
                player2.facing = "right";
            }
            if(player2.position.x === LEFT_LIMIT || player2.position.x === RIGHT_LIMIT){
                player2.animation_status = "idle"
            }
        }
           
        player2.animation_status = "run";
    }

    // Shield
    if (player2.status === "shield") {

        if (position1 > position2) {
            player2.facing = "right";
        } else {
            player2.facing = "left";
        }

        player2.Issave = true;
        player2.animation_status = "shield";

    } else {
        player2.Issave = false;
    }

    console.log(player2.status, player2.position.x, player2.health);
}