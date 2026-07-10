import{entity} from "./entity.js"
let ground_y = 325
export const soldier = {
    speed: 3,
    damage:18,
    sprite: "Soldier.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:100,
    animations: {
        idle: {
            row: 0,
            frames: 6
        },
        run: {
            row: 1,
            frames: 8
        },
        punch: {
            row: 2,
            frames: 6
        },
        attack2: {
            row: 3,
            frames: 6
        },
        hurt: {
            row: 4,
            frames: 4
        },
        death: {
            row: 5,
            frames: 6
        },
        shield:{
            row:null,
            frames:null
        }
    }
};
export const shadow = {
    speed:6,
    damage:10,
    sprite:"shadow_dog.png",
    spriteHeight :523,
    spriteWidth:573,
    drawWidth : 70,
    drawHeight : 70,
    health:100,
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
export const olly = {
    speed: 2.5,
    damage:8,
    sprite: "OLLY.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:100,
    animations: {
        idle: {
            row: 0,
            frames: 6
        },
        run: {
            row: 1,
            frames: 8
        },
        punch2: {
            row: 2,
            frames: 6
        },
        punch: {
            row: 3,
            frames: 6
        },
        hurt: {
            row: 4,
            frames: 4
        },
        death: {
            row: 5,
            frames: 6
        },
        shield:{
            row:null,
            frames:null
        }
    }
};