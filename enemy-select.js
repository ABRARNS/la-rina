import { entity } from "./entity.js";

const ss = document.getElementById("ss")
const d1 = document.getElementById("d2")
const shadow_dog = document.getElementById("s_chose_1")
const violence_enjoyer= document.getElementById("s_chose_2")
const olly  = document.getElementById("s_chose_3s")

if(ss){
   ss.addEventListener("click", () => {
        d1.classList.remove("d2");
        d1.classList.add("d2-activate");
    });
}
if(ss){
  shadow_dog.addEventListener("click",()=>{
   localStorage.setItem("enemy", "shadow_dog");
  })
  violence_enjoyer.addEventListener("click",()=>{
    localStorage.setItem("enemy", "soldier1");
  })
  olly.addEventListener("click",()=>{
    localStorage.setItem("enemy", "olly");
  })
}