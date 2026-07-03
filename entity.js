import{player,c} from "./main.js"
export class entity{
    constructor({position,health,status,animation_status,damage,Issave,speed}){
           this.position = position;
           this.health = health
           this.status = status
           this.animation_status = animation_status
           this.damage = damage
           this.Issave = Issave
           this.speed = speed
           this.playerImg = new Image();
           this.playerImg.src = "shadow_dog.png";
           this.playerImg.onload = () => {
    console.log("Image loaded!");
};
           this.frame = 0;
           this.spriteWidth = 573;
           this.spriteHeight = 523;
           this.row = 0;
           this.totalFrame = 6;
           

    }
    
 draw(c) {
    let frameX = this.totalFrame * this.spriteWidth;
           let frameY = this.row * this.spriteHeight;
    c.drawImage(
        
        this.playerImg,
        frameX,
        frameY,
        this.spriteWidth,
        this.spriteHeight,
        this.position.x,
        this.position.y,
        70,
        70
        
    );
}
}