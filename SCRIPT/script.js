
let segundos = 0; //guarda a variável/valor do segundo
let minutos = 0; //guarda a variável/valor do minuto
let intervalo = null; // vai guardar o ID do setInterval

const timerEl = document.getElementById("timer") //puxa o elemento timer que tá no html
const startBtn = document.getElementById("start") //puxa o elemento start que tá no html
const pauseBtn = document.getElementById("pause") //puxa o elemento pause que tá no html
const finishBtn = document.getElementById("finish") //puxa o elemento finish que tá no html
const resetBtn = document.getElementById("reset") //puxa o elemento reset que tá no html
const mensagemEl = document.getElementById("mensagem");

// Função para atualizar o display do timer
function atualizarDisplay() {
    let min = minutos < 10 ? "0" + minutos : minutos;
    /* isso é uma condição. ela diz que a variável é menor do que 10.
    se for verdade, ele vai executar o que vem depois do "?", que é "0" + minutos.
    se for falso, ele vai executar o que vem depois do ":", que é apenas minutos
    isso faz com que se o valor for menor que 10, por exemplo 7, seja exibido 07.
    e se for maior que 10, por exemplo 12, seja exibido apenas 12.*/

    let seg = segundos < 10 ? "0" + segundos : segundos;
    //mesma lógica dos minutos, só que para os segundos

    timerEl.textContent = `${min}:${seg}`;
    /*o "timerEl" tá chamando a variável const timerEl lá em cima.
    o .textContext diz "coloque esse texto dentro do elemento timerEl".
    `${min}:${seg}` é uma string que exibe os minutos e segundos guardados dentro deles.
    o : entre eles é só um caractere que vai aparecer entre os dois, formando o
    formato 00:00*/
}

//Função que roda a cada segundo
function contar() {
    segundos ++
    /*o operador ++ adiciona a variavel "segundos" o valor de 1.
    isso quer dizer que vai adicionar 1 segundo ao contador atual.
    cada vez que a função contar for chamada, os segundos aumentam*/

    //quando chega em 60 segundos, vira 1 minuto
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    atualizarDisplay()
}

//Iniciar o timer

startBtn.addEventListener("click", function(){
    if (intervalo === null) {
        intervalo = setInterval(contar, 1000);
    }
});

//pausar o timer

pauseBtn.addEventListener("click", function(){
    clearInterval(intervalo);
    intervalo = null;
});

//finalizar o timer
finishBtn.addEventListener("click", function() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }  

    let min = minutos < 10 ? "0" + minutos : minutos;
    let seg = segundos < 10 ? "0" + segundos : segundos;

    mensagemEl.textContent = `Você estudou por ${min}:${seg}`

    minutos = 0;
    segundos = 0;
    atualizarDisplay()

});

//resetar o timer

resetBtn.addEventListener("click", function() {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    atualizarDisplay();
});

atualizarDisplay()

