import{entity} from "./entity.js"
 let ground_y = 325
export const soldier = {
    speed: 3,
    damage:15,
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
    

export const skello = {
    speed:5,
    damage:15,
    sprite:"skello.png",
    spriteHeight :64,
    spriteWidth:64,
    drawWidth : 250,
    drawHeight : 250,
    health:100,
    animations: {
        idle: {
            row: 0,
            frames: 11
        },
        run: {
            row: 1,
            frames: 8
        },
        punch2: {
            row: 2,
            frames: 10
        },
        punch: {
            row: 3,
            frames: 12
        },
        shield: {
            row: 4,
            frames: 2
        },
        death: {
            row: 5,
            frames: 6
        },
       hurt:{
        row:null,
        frames:null
       }
    }
};
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
export const red_bobo = {
    speed: 6,
    damage:16,
    sprite: "red_bobo.png",

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
            row:2,
            frames:7
        }
    }
};