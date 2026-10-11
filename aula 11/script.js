const buttonStart = document.querySelector(".buttonstart");
const buttonStop = document.querySelector(".buttonstop");
const buttonReverse = document.querySelector(".buttonreverse");
const buttonRestart= document.querySelector(".buttonrestart");

const animation1 = 
gsap.to(".box", {
  x: 400,
  duration: 2,
  rotate: 360,
  repeat: -1,
  yoyo: true
});

buttonStart.addEventListener("click",() => {
  animation1.play();
});
buttonStop.addEventListener("click",() => {
  animation1.pause();
});
buttonReverse.addEventListener("click",() => {
  animation1.reverse();
});
buttonRestart.addEventListener("click",() => {
  animation1.restart();
});

/*
Controlando a animação:

Definimos uma variável para uma animação no gsap. Assim podemos usar alguns métodos nela.

play() -> Inicia a animação.
pause() -> Pausa a animação.
reverse() -> Faz a animação voltar ao início.
restart() -> Faz a animação recomeçar. 
*/