import{player,player2} from "./main.js"
export const larina_1 = new Audio("./La Riña (official).mp3")
larina_1.loop = true
larina_1.volume = 0.03;
const a_punch =  new Audio("punchSound1.mp3")
const a_walk = new Audio("runSound1.mp3")
a_punch.volume = 1
window.addEventListener('click',()=>{
  larina_1.play()
  
})
export function punchSound1(){
  a_punch.play()
}
export function runSound1(){
  a_walk.play()
}