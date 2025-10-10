const elements = document.getElementsByClassName("content"); 
const paragraphElements = document.getElementsByTagName("p");
const targetElement = document.getElementById("userList");
const btn = document.getElementById("btn");
let isPositiveTextOnTurn = true;
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const pElement = document.getElementById("number");


//console.log(paragraphElements);

// elements[0].style=`background-color: #09ff00ff`

const errorFun = () => {
    paragraphElements[0].textContent = "GRESKA!";
    paragraphElements[0].classList = "error";
}
const normalFun = () => {
    paragraphElements[0].textContent = "Jupi!";
    paragraphElements[0].classList = "normal";
}
const controler = () => {
    if (isPositiveTextOnTurn){
        normalFun();
        isPositiveTextOnTurn = false;
    } else {
        errorFun();
        isPositiveTextOnTurn = true;
    }
}
let number = 0;
pElement.textContent = number;
const plus = () => {
    number++;
    pElement.textContent = number;

}
const minus = () => {
    number--;
    pElement.textContent = number;

}

btn.addEventListener('click', controler);
btnPlus.addEventListener('click', plus);
btnMinus.addEventListener('click', minus);

const initialRender = () => {
    backendResponse = [
        {
            ime: "Jovan",
            prezime: "Medarovic",
        },
        {
            ime: "Jelisaveta",
            prezime: "Medarovic",
        },
        {
            ime: "Nikola",
            prezime: "Petrovic",
        },
        {
            ime: "Milica",
            prezime: "Jankovic",
        },
        {
            ime: "Marko",
            prezime: "Nikolic",
        },
        {
            ime: "Ana",
            prezime: "Stankovic",
        },
        {
            ime: "Lazar",
            prezime: "Popovic",
        },
        {
            ime: "Teodora",
            prezime: "Milenkovic",
        },
        {
            ime: "Stefan",
            prezime: "Savic",
        },
        {
            ime: "Ivana",
            prezime: "Ristic",
        },
        {
            ime: "Uros",
            prezime: "Vukovic",
        },
        {
            ime: "Natalija",
            prezime: "Radovanovic",
        },
        {
            ime: "Dusan",
            prezime: "Todorovic",
        },
        {
            ime: "Sara",
            prezime: "Kovacevic",
        },
        {
            ime: "Vladimir",
            prezime: "Ilic",
        },
        {
            ime: "Marija",
            prezime: "Jovic",
        },
        {
            ime: "Petar",
            prezime: "Zivkovic",
        },
        {
            ime: "Kristina",
            prezime: "Pavlovic",
        },
        {
            ime: "Aleksandar",
            prezime: "Simic",
        },
        {
            ime: "Tamara",
            prezime: "Stojanovic",
        },
        {
            ime: "Milos",
            prezime: "Bogdanovic",
        },
        {
            ime: "Jelena",
            prezime: "Grujic",
        },
        {
            ime: "Filip",
            prezime: "Antic",
        },
        {
            ime: "Andjela",
            prezime: "Lazic",
        },
        {
            ime: "Vuk",
            prezime: "Djordjevic",
        },
        {
            ime: "Katarina",
            prezime: "Milosevic",
        },
        {
            ime: "Nenad",
            prezime: "Gavrilovic",
        },
        {
            ime: "Isidora",
            prezime: "Zdravkovic",
        },
        {
            ime: "Bogdan",
            prezime: "Markovic",
        },
        {
            ime: "Dragana",
            prezime: "Veselinovic",
        },
        {
            ime: "Ognjen",
            prezime: "Arsenijevic",
        },
        {
            ime: "Milena",
            prezime: "Trifunovic",
        }
    ];


    backendResponse.map((osoba) => {
        const listElement = document.createElement("li");
        listElement.textContent = osoba.ime + " " + osoba.prezime;
        targetElement.appendChild(listElement);
    });
}

// initialRender();