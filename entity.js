import{c} from "./main.js"
export class entity{
    constructor({position,health,status,animation_status,damage,Issave,speed,sprite,spriteHeight,spriteWidth,animations}){
           this.position = position;
           this.health = health
           this.status = status
           this.animation_status = animation_status
           this.damage = damage
           this.Issave = Issave
           this.speed = speed
           this.playerImg = new Image();
           this.playerImg.src = sprite;
           console.log(sprite);
           this.spriteWidth = spriteWidth;
           this.spriteHeight = spriteHeight;
           this.animations = animations     
           this.animationDelay = 0;
           this.frame = 0;
           this.animationDelay = 0;
           this.row = 0;
           this.totalFrame = 0;
           this.facing = "right";
      

    }
   
 draw(c) {
     let frameX = this.frame * this.spriteWidth;
           let frameY = this.row * this.spriteHeight;
   c.save();
   if (this.facing === "left") {
    c.scale(-1, 1);
    c.drawImage(
    this.playerImg,
    frameX,
    frameY,
    this.spriteWidth,
    this.spriteHeight,
    -this.position.x - 70,
    this.position.y,
     70,
70
);
}else{
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
c.restore();
   const currentAnimation = this.animations[this.animation_status];

this.row = currentAnimation.row;
this.totalFrame = currentAnimation.frames;
   
   
           

    this.animationDelay++

    if (this.animationDelay >= 5) {
    this.frame++;
    this.animationDelay = 0;

    if (this.frame > this.totalFrame) {
        this.frame = 0;
    }
    
}
}
}