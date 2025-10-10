const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const btnElement = document.getElementById("btn");
const pElement = document.getElementById("text");

const login = () => {
    const username = usernameElement.value;
    const password = passwordElement.value;
    pElement.textContent = `Tvoje ime je "${username}" i tvoj pasvord je "${password}"`;
    usernameElement.value = "";
    passwordElement.value = "";
}


btnElement.addEventListener('click', login);