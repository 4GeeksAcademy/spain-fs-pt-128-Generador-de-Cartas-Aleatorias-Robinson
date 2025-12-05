import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generarCard() {

  let suits = [
    { clase: "heart", simbolo: "♥" },
    { clase: "spade", simbolo: "♠" },
    { clase: "club", simbolo: "♣" },
    { clase: "diamond", simbolo: "♦" }
  ];
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'A'];

  let SuitAleatorio = suits[Math.floor(Math.random() * suits.length)];
  let ValueAleatorio = values[Math.floor(Math.random() * values.length)];
  console.log(SuitAleatorio);
  console.log(ValueAleatorio);

  let card = document.getElementById("theCard");

  card.innerHTML = `
    <div class="top-suit ${SuitAleatorio.clase}">${SuitAleatorio.simbolo}</div>
    <div class="value">${ValueAleatorio}</div>
    <div class="bottom-suit ${SuitAleatorio.clase}">${SuitAleatorio.simbolo}</div>
  `;  
}









