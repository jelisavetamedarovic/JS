🕹️ 1. Toggle vidljivosti elementa

Zadatak:
Napravi dugme koje prikazuje ili sakriva tekst svaki put kada se klikne.

Primer HTML-a:

```
<p id="tekst">Ovo je neki tekst koji može da nestane.</p>
<button id="toggle">Sakrij / Prikaži</button>
```


Zadatak (JS):
Kada korisnik klikne, proveri da li je tekst vidljiv.
Ako jeste — sakrij ga (style.display = "none").
Ako nije — prikaži ga (style.display = "block").

💡 Napomena: možeš ovo kasnije uraditi i pomoću dodavanja/uklanjanja klase (classList.toggle).

💬 2. Brojanje unetih karaktera u realnom vremenu

Zadatak:
Napravi polje za unos teksta i ispod njega broj koji pokazuje koliko je karaktera trenutno uneto.

Primer HTML-a:

```
<input id="unos" type="text" placeholder="Upiši nešto...">
<p>Karaktera: <span id="broj">0</span></p>
```


Zadatak (JS):
Na svaki input događaj, izračunaj dužinu (value.length) i ažuriraj prikaz broja.

⏰ 3. Jednostavan tajmer (sekundara)

Zadatak:
Kada se klikne dugme „Start“, pokreće se brojač sekundi.
Drugo dugme „Stop“ zaustavlja tajmer.

Primer HTML-a:

```
<p id="sekunde">0</p>
<button id="start">Start</button>
<button id="stop">Stop</button>
```


Zadatak (JS):
Koristi setInterval() da svake sekunde poveća broj, i clearInterval() da ga zaustavi.

🧾 4. Dinamičko dodavanje i brisanje elemenata iz liste

Zadatak:
Napravi listu u koju možeš dodavati stavke (kao pre), ali sada svaka stavka ima i dugme “Obriši” pored sebe.

Primer HTML-a:

```
<input id="stavka" type="text" placeholder="Upiši stavku">
<button id="dodaj">Dodaj</button>
<ul id="lista"></ul>
```


Zadatak (JS):
Kada se klikne „Dodaj“, ubaci novi `<li>` koji sadrži:

tekst koji je korisnik uneo

dugme „Obriši“ koje briše baš tu stavku (koristi element.remove())

🎨 5. Svetlo i tamni režim (Dark/Light Mode)

Zadatak:
Napravi dugme koje menja temu stranice između “light” i “dark”.

Primer HTML-a:

```
<button id="tema">Promeni temu</button>
<p>Ovo je primer teksta.</p>
```


Zadatak (JS + CSS):
U JavaScript-u koristi document.body.classList.toggle("dark"),
a u CSS-u definiši:

```
.dark {
  background-color: #222;
  color: white;
}
```


Hoćeš da ti napravim i rešenja za svih 5 (čist JS, bez komentara — samo radi testiranja)?
Mogu ti ih dati sve u jednom fajlu da prođeš kroz njih kao mini vežbe.