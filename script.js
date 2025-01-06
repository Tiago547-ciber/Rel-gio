let hora = new Date().getHours();
let minuto = new Date().getMinutes();
let segundo = 0;
let segC = 0;
let minC = 0;
let horC = 0;
let mili = 0;
let stop = 0;
var div = document.getElementById("divisoria");
var div1 = document.getElementById("divisoria1");
var div2 = document.getElementById("divisoria2");
var numero2 = document.getElementById("minuto");
var numero3 = document.getElementById("hora");
var croN = document.getElementById("croN");
var croN2 = document.getElementById("croN2");
var m = document.getElementById("minutoC");
var h = document.getElementById("horaC");
var botao = document.getElementById("Bplay");
var botao2 = document.getElementById("Bstop");
var botao3 = document.getElementById("Bzerar");

botao.onclick = playC;

function relogio() {setInterval(() => {
    div.innerText = ":";
    div.style.position = "absolute";
    div.style.marginLeft = "110px";
    div.style.color = "gray";
    setTimeout(() => {
        numero2.style.marginLeft = "20px";
        div.innerText = "";
    }, 100);
    if (segundo <= 60) {
        numero2.innerText = minuto;
        numero3.innerText = hora;
        segundo = segundo + 1;
    }
    if (segundo == 60){
        segundo = 0;
        minuto = minuto + 1;
    }
    if (minuto == 60){
        segundo = 0;
        minuto = 0;
        hora = hora + 1;
    }
    if (hora == 24){
        segundo = 0;
        minuto = 0;
        hora = 0;
    }else {
        "";
    }

       
}, 1000)};

function playC() {
    botao.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    setTimeout(() => {
        botao.style.backgroundColor = "rgba(104, 104, 104, 0.8)";
    }, 100);
    botao.onclick = "";
    stop = 0;
    pause = 0;
   const intervalo = setInterval(() => {
    if (mili <= 100) {
        mili = mili + 1;
        croN2.innerText = mili;
    }
    if (mili == 100){
        mili = 0;
        segC = segC + 1;
        croN.innerText = segC;
        
    }
    if (horC == 0 && minC == 0 && segC >= 10) {
        croN.style.marginLeft= "80px";
        croN2.style.textAlign= "center";
    }

    if (segC == 60) {
        croN.style.fontSize = "60px";
        croN2.style.fontSize = "30px";
        croN.style.marginLeft = "170px";
        croN2.style.marginLeft = "200px";
        m.style.fontSize = "60px";
        m.style.marginLeft = "95px";
        m.style.position = "absolute";
        segC = 0;
        minC = minC + 1;
        m.innerText = minC + ":";
        croN.innerText = segC;
        
    }
    if (minC == 60) {
        h.style.fontSize = "60px";
        h.style.marginLeft = "20px";
        m.style.marginLeft = "110px";
        h.style.position = "absolute";
        minC = 0;
        horC = horC + 1;
        h.innerText = horC + ":";
        croN.innerText = segC;
        m.innerText = minC + ":";
        
    }   

    if (stop == 1){
        clearInterval(intervalo);
    }else {
        "";
    }

       
}, 10)};


function stopC() {
    botao2.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    setTimeout(() => {
        botao2.style.backgroundColor = "rgba(104, 104, 104, 0.8)";
    }, 100);
    botao.onclick = playC;
    stop = 1;
};

function zerar() {
    botao3.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    setTimeout(() => {
        botao3.style.backgroundColor = "rgba(104, 104, 104, 0.8)";
    }, 100);
    setTimeout(() => {
        window.location.href = "about.html";
    }, 100);
    
};

function menu() {
    var menu = document.getElementById("espaco");
    menu.innerHTML = '<div id="opcoes"><br><a href="index.html"><p>Relogio</p></a><br><a href="about.html"><p>Cronometro</p></a></div><button id="x" onclick="fechar()">x</button>';
}

function fechar() {
    var menu = document.getElementById("espaco");
    menu.innerHTML = "";
}



