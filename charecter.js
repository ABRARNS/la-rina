import{entity} from "./entity.js"
let ground_y = 435
export const shadow = {
  
    sprite:"shadow_dog.png",
    spriteHeight :523,
    spriteWidth:573,
    animations:{
        idle:{
            row:0,
            frames:6
        },

        run:{
            row:3,
            frames:8
        },

        punch:{
            row:7,
            frames:6
        },
        shield:{
            row:6,
            frames:6
        }
    }
    
}