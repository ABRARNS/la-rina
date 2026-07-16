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
export const bloody_goofy = {
    speed: 2.5,
    damage:14,
    sprite: "bloody goofy.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:104,
    animations: {
        idle: {
            row: 0,
            frames: 6
        },
        run: {
            row: 1,
            frames: 8
        },
       
        punch1: {
            row: null,
            frames: null
        },
        punch:{
            row:3,
            frames:8,
        },
        hurt: {
            row: 4,
            frames: 4
        },
        death: {
            row: 5,
            frames: 4
        },
        shield:{
            row:2,
            frames:8
        }
    }
};
export const kelly= {
    speed: 5,
    damage:19,
    sprite: "kelly.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:105,
    animations: {
        idle: {
            row: 0,
            frames: 7
        },
        run: {
            row: 3,
            frames: 7
        },
       
        punch1: {
            row: 5,
            frames: 6
        },
        punch:{
            row:12,
            frames:16,
        },
        hurt: {
            row: 17,
            frames: 10
        },
        death: {
            row: null,
            frames: null,
        },
        shield:{
            row:7,
            frames:5
        }
    }
};
export const ash= {
    speed: 4,
    damage:16,
    sprite: "ash.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:105,
    animations: {
        idle: {
            row: 0,
            frames: 6
        },
        run: {
            row: 2,
            frames: 6
        },
       
        punch1: {
            row: 5,
            frames: 8
        },
        punch:{
            row:6,
            frames:8,
        },
        hurt: {
            row: 10,
            frames: 4
        },
        death: {
            row: 11,
            frames: 8,
        },
        shield:{
            row:8,
            frames:4
        }
    }
};
export const ben= {
    speed: 4,
    damage:10,
    sprite: "ben.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:98,
    animations: {
        idle: {
            row: 0,
            frames: 3
        },
        run: {
            row: 2,
            frames: 4
        },
       
        punch1: {
            row: 3,
            frames: 7
        },
        punch:{
            row:4,
            frames:9,
        },
        hurt: {
            row: 5,
            frames: 3
        },
        death: {
            row: 6,
            frames: 4,
        },
        shield:{
            row:null,
            frames:null
        }
    }
};
export const ben2= {
    speed: 3,
    damage:10,
    sprite: "ben2.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:100,
    animations: {
        idle: {
            row: 0,
            frames: 3
        },
        run: {
            row: 2,
            frames: 4
        },
       
        punch1: {
            row: null,
            frames: null
        },
        punch:{
            row:4,
            frames:9,
        },
        hurt: {
            row: 5,
            frames: 3
        },
        death: {
            row: 6,
            frames: 4,
        },
        shield:{
            row:null,
            frames:null,
        }
    }
};
export const old_bob= {
    speed: 2,
    damage:14,
    sprite: "old_bob.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:100,
    animations: {
        idle: {
            row: 0,
            frames: 3
        },
        run: {
            row: 2,
            frames: 4
        },
       
        punch1: {
            row: null,
            frames: null
        },
        punch:{
            row:4,
            frames:9,
        },
        hurt: {
            row: 5,
            frames: 3
        },
        death: {
            row: 6,
            frames: 4,
        },
        shield:{
            row:null,
            frames:null,
        }
    }
};
export const purple_snap= {
    speed: 4,
    damage:19,
    sprite: "purple snap.png",

    spriteWidth: 100,
    spriteHeight: 100,
    drawWidth: 250,
    drawHeight: 250,
    health:106,
    animations: {
        idle: {
            row: 0,
            frames: 6
        },
        run: {
            row: 2,
            frames: 6
        },
       
        punch1: {
            row: 5,
            frames: 7
        },
        punch:{
            row:6,
            frames:7,
        },
        hurt: {
            row: 10,
            frames: 4
        },
        death: {
            row: 11,
            frames: 8,
        },
        shield:{
            row:8,
            frames:6
        }
    }
};