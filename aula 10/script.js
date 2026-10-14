gsap.from(".box", {
  x: -400,
  duration: 1,
  repeat: 2,
  yoyo: true,
  repeatDelay: 1,
  // onRepeat: () => {
  //   document.body.style.backgroundColor = "chartreuse"
  // },
  // onStart: () => {
  //   console.log("Começou");
  // },
  // onUpdate: () => {
  //   console.log("Andou");
  // },
  // onComplete: () => {
  //   console.log("Terminou");
  // }
});


/*
onStart: -> Executa uma ação ao início de uma animação.

onUpdate: -> Executa uma ação durante a animação. 

onUpdate: -> Executa uma ação quando termina a animação.

onRepeat: -> Executa todas vez que a animação se repete

repeatDelay -> Determina o tempo e segundos que a animação demora pra se repetir
 */