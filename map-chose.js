 export let activated_map = "first-map.png"
const smap = document.getElementById("smap")
const d1 = document.getElementById("d2")
const japan1 = document.getElementById("map_chose_1")
const spain1 = document.getElementById("map_chose_2")
const italy1 = document.getElementById("map_chose_3")
const barca1 = document.getElementById("map_chose_4")
const bd1 = document.getElementById("map_chose_5")
const france1 = document.getElementById("map_chose_6")
const istanbul1 = document.getElementById("map_chose_7")
if (smap) {
    smap.addEventListener("click", () => {
        d1.classList.remove("d2");
        d1.classList.add("d2-activate");
    });
}
if (spain1) {
    spain1.addEventListener("click", () => {
        localStorage.setItem("map", "spain_map1.png");
    });
}
if(japan1){
    japan1.addEventListener("click",()=>{
        localStorage.setItem("map", "japan1.png");
        
    })
}
if(italy1){
    italy1.addEventListener("click",()=>{
        localStorage.setItem("map", "italy1.png");
        
    })
}
if(barca1){
    barca1.addEventListener("click",()=>{
        localStorage.setItem("map", "barca1.png");
        
    })
}
if(bd1){
    bd1.addEventListener("click",()=>{
        localStorage.setItem("map", "bangla1.jpeg");
        
    })
}
if(france1){
    france1.addEventListener("click",()=>{
        localStorage.setItem("map", "france1.png");
        
    })
}
if(istanbul1){
    istanbul1.addEventListener("click",()=>{
        localStorage.setItem("map", "istanbul1.png");
        
    })
}
console.log(document.getElementById("map_chose_2"));
let bg1 = new Audio("./La Riña (official).mp3")
    bg1.loop = true
    bg1.volume = 0.8
    addEventListener("click",()=>{
        bg1.play()
    })