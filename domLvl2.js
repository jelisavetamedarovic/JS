/**
 * Zadatak 1:

const tekst = document.getElementById("tekst");
const btn = document.getElementById("toggle");

tekst.style.display = "block";
const toggle = () => {
    
    if (tekst.style.display === "block") {
        tekst.style.display="none";
    } else {
        tekst.style.display="block";
}


}
btn.addEventListener("click", toggle);

*/

// const text = document.getElementById("unos");
// const brojac = document.getElementById("broj");

// const count = () => {
//     console.log(text.value);
//     brojac.textContent = text.value.length;
// }
// text.addEventListener('input', count);

// const btn = document.getElementById("tema");
// const body = document.getElementsByTagName("body");

// body[0].classList = "white";
// const tema = () => {
//     console.log(body[0].classList);
//     if(body[0].classList[0] === "white"){
//         body[0].classList = "dark";
//     }else {
//         body[0].classList = "white";
//     }
// }
// btn.addEventListener('click', tema);

// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const clearBtn = document.getElementById("clear");
// const secEl = document.getElementById("sekunde");
// let sec = 0;
// let min = 0;
// let intervalId;

// const renderTime = () => {
//     sec++;
//     min = Math.floor(sec/60);
//     let displaySec = sec-min*60;
//     secEl.textContent = `${min}:${displaySec}`;
// }
// const startTime = () => {
//     intervalId = setInterval(renderTime, 1000);
//     startBtn.disabled = true;
//  }
// const stopTime = () => {
//     clearInterval(intervalId);
//     intervalId = null;
//     startBtn.disabled = false;
// }
// const clearTime = () => {
//     min = 0;
//     sec = 0;
//     secEl.textContent = `0:0`;
// }
// startBtn.addEventListener('click', startTime);
// stopBtn.addEventListener('click', stopTime);
// clearBtn.addEventListener('click', clearTime);

const inputEl = document.getElementById("stavka");
const btnEl = document.getElementById("dodaj");
const ulEl = document.getElementById("lista");

const add = () => {
    const input = inputEl.value;
    const liEl = document.createElement("li");
    liEl.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
            <p>${input}</p>
            <button onclick="del(${liEl})">obrisi</button>
        </div>
    `;
    ulEl.appendChild(liEl);    
}
const del = (liEl) => {
    console.log(liEl);
    
    liEl.remove();
}
btnEl.addEventListener('click', add);