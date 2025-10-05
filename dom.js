const contentElement = document.getElementById("content");
const element = document.getElementsByClassName("content");
const paragraphElement = document.getElementsByTagName("p");
const targetElement = document.getElementById("userList");

const errorFun = () => {
    paragraphElement[0].textContent = "GRESKA!";
    paragraphElement[0].classList = "error";
}
const normalFun = () => {
    paragraphElement[0].textContent = "Jupi!";
    paragraphElement[0].classList = "normal";
}

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

initialRender();