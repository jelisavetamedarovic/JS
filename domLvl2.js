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

const text = document.getElementById("unos");
const brojac = document.getElementById("broj");

const count = () => {
    console.log(text.value);
    brojac.textContent = text.value.length;
}
text.addEventListener('input', count);