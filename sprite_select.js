import { entity } from "./entity.js";

const ss = document.getElementById("ss")
const d1 = document.getElementById("d2")
const skello = document.getElementById("s_chose_1")
const violence_enjoyer= document.getElementById("s_chose_2")
const olly = document.getElementById("s_chose_3")
const red_bobo = document.getElementById("s_chose_4")

if(ss){
   ss.addEventListener("click", () => {
        d1.classList.remove("d2");
        d1.classList.add("d2-activate");
    });
}
if(ss){
  skello.addEventListener("click",()=>{
   localStorage.setItem("character", "skello");
  })
  violence_enjoyer.addEventListener("click",()=>{
    localStorage.setItem("character", "soldier1");
  })
  olly.addEventListener("click",()=>{
    localStorage.setItem("character", "olly");
  })
  red_bobo.addEventListener("click",()=>{
    localStorage.setItem("character","red_bobo")
  })
}