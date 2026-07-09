
export class entity{
    constructor({position,health,status,animation_status,Issave,speed,damage,sprite,spriteHeight,spriteWidth,drawWidth,animations,
    drawHeight}){
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
           this.drawHeight = drawHeight
           this.drawWidth = drawWidth

    }
    //s = select c = charecyer
   s_c(character) {
    this.playerImg.src = character.sprite;
    this.spriteWidth = character.spriteWidth;
    this.spriteHeight = character.spriteHeight;
    this.drawWidth = character.drawWidth;
    this.drawHeight = character.drawHeight;
    this.speed = character.speed;
    this.damage = character.damage;
    this.health = character.health;
    this.animations = character.animations;
    this.animation_status = "idle";
    this.frame = 0;
}
// s = select e = enemy
s_e(character) {
    this.playerImg.src = character.sprite;
    this.spriteWidth = character.spriteWidth;
    this.spriteHeight = character.spriteHeight;
    this.drawWidth = character.drawWidth;
    this.drawHeight = character.drawHeight;
    this.speed = character.speed;
    this.damage = character.damage;
    this.health = character.health;
    this.animations = character.animations;
    this.animation_status = "idle";
    this.frame = 0;
}
 draw(c) {
    const currentAnimation = this.animations[this.animation_status];

this.row = currentAnimation.row;
this.totalFrame = currentAnimation.frames;
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
    -this.position.x - this.drawWidth,
    this.position.y,
    this.drawWidth,
    this.drawHeight
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
    this.drawWidth,
    this.drawHeight

);
}
c.restore();
   
   
   
           

    this.animationDelay++

    if (this.animationDelay >= 5) {
    this.frame++;
    this.animationDelay = 0;

    if (this.frame >= this.totalFrame) {
        this.frame = 0;
    }
    
}
}
}