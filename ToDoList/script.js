const inputEl = document.getElementById("taskInput");
const btnInputEl = document.getElementById("btnInput");
const ulEl = document.getElementById("list");

const addElement = () => {
    //citanje vrednosti inputa
    const input = inputEl.value;
    //validacija polja
    //ako je prazno kuliraj, ako ima vrednost nastavi dalje
    if (input === "") {
        return undefined;
    }
    //pravljenje novog li elementa
    const liEl = document.createElement("li");
    liEl.classList = "item";
    liEl.innerHTML = `
        <div class="itemName">
            <input type="checkbox">
            <p>${input}</p>
        </div>
        <button onclick="clearFun()">X</button>
    `;
    //dodavanje li elementa u ul element
    ulEl.appendChild(liEl);
    //praznjenje input polja
    inputEl.value = "";
}
btnInputEl.addEventListener('click', addElement);

const clearFun = () => {
    console.log("cao");
}

