const wins = document.getElementById("wins");
const death = document.getElementById("death");
const dealt = document.getElementById("dealt");
const taken = document.getElementById("taken");

wins.textContent = "Wins: " + (localStorage.getItem("total_win") || 0);
death.textContent = "Deaths: " + (localStorage.getItem("total_lose") || 0);
dealt.textContent = " Damage Dealt: " +(localStorage.getItem("total_dealt") || 0);
taken.textContent = " Damage Taken: " +(localStorage.getItem("total_taken") || 0);