function egerEnter(){
    const gomb = document.getElementById('gomb');
    gomb.innerHTML = "Sikerült";
}

function zoldSzin(inputMezo){
    inputMezo.style.color = "green";
}

function feketeSzin(inputMezo) {
    inputMezo.style.color = "black";
}

function betoltodott(){
    const bekezdes = document.getElementById('bekezdes');
    bekezdes.innerHTML = "Betöltődött";
}

function rakattint(){
    const bekezdes = document.getElementById('bekezdes');
    bekezdes.innerHTML = "Rákattintott";

}