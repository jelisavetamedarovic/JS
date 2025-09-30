let x = 1;
const y = 5;
x = 6;
// y = 1;
// console.log(x,y);

const t1 = 1.123;
const t2 = "test 123"
// console.log(t1, t2);

const ime = "Jelisaveta";
const prezime = "Medarovic";
// console.log("Zovem se", ime, prezime);
// console.log(`Zovem se ${ime}   ${prezime}`);

// console.log("String 1");
// console.log('String 2');
// console.log(`String 3`);

const maminaRecenica = "kako si dete";

// console.log('Mama je rekla "kako si dete" i to je bilo lepo od nje');
// console.log("Mama je rekla 'kako si dete' i to je bilo lepo od nje");

// console.log("Mama je rekla", maminaRecenica, "i to je bilo lepo od nje");
// console.log(`Mama je rekla "${maminaRecenica}" i to je bilo lepo od nje`)

const isWoman = true;

if(ime === "Jelisaveta") {
    // console.log(`Cao drugarice ${ime}`);
} else {
    // console.log(`Cao druze ${ime}`);
}

if(1 !== "1") {
    // console.log("usao sam u IF");
}

if(1>5) {
    // console.log("usao sam u IF");
}

if(1<5) {
    // console.log("usao sam u IF");
}

if(5 <= 5) {
    // console.log("usao sam u IF");
}

if(isWoman && 2===1) {
    // console.log('1');
}

if(isWoman || 2===1){
    // console.log('1');
}

if((isWoman || 2===1)) {
    // console.log(1);
} else if(3>1) {

} else {

};

const ocene = [1,2,4,5,1,5,1];
// console.log(ocene);
// console.log(ocene.length);
// console.log(ocene[0]);

// ocene = [1,2,3]
ocene[0] = 3;

console.log(ocene);


for(let i = 0; i<ocene.length; i = i + 1) {
    // console.log('cao ',i);
}

for (const ocena of ocene) {
    // console.log(ocena);
}

let sabraneOcene = 0;
for(let trenutnaOcena of ocene){
    sabraneOcene = sabraneOcene + trenutnaOcena;
}
const prosek = sabraneOcene/ocene.length;
// console.log(prosek);

for (let i = 0; i < ocene.length; i++) {
    const x = ocene[i];
}

let i = 0;
while (i<ocene.length) {
    console.log("test");
    i++;
}

for (const trenutnaOcena of ocene) {
    switch (trenutnaOcena) {
    case 1:
        console.log("Ja sam saznao da imam jednog keca");
        break;
    case 2:
        console.log("Ja sam saznao da imam jednu dvojku");
    default:
        console.log("Profesor mi je dao nemogucu ocenu");
        break;
}
}

switch (true) {
    case 1===1:
        console.log('1 je zaista 1');
        break;


    default:
        break;
}