const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const btnElement = document.getElementById("btn");
const pElement = document.getElementById("text");
const myButtonElement = document.getElementById("myButton");
const textElement = document.getElementById("itemInput");
const btnAddElement = document.getElementById("addItem");
const itemListElement = document.getElementById("itemList");

const login = () => {
    const username = usernameElement.value;
    const password = passwordElement.value;
    pElement.textContent = `Tvoje ime je "${username}" i tvoj pasvord je "${password}"`;
    usernameElement.value = "";
    passwordElement.value = "";
}
const btnChange = () => {
    myButtonElement.textContent = `Kliknuto`;
}
const addItem = () => {
    const newItem = textElement.value;
    const liElement = document.createElement('li');
    liElement.textContent = newItem;
    itemListElement.appendChild(liElement);
    textElement.value = "";
}
btnElement.addEventListener('click', login);
myButtonElement.addEventListener('click', btnChange);
btnAddElement.addEventListener('click', addItem);