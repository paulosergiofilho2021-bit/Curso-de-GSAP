gsap.from(".box", {
  x: -400,
  duration: 3,
  onStart: () => {
    console.log("Começou");
  },
  onUpdate: () => {
    console.log("Andou");
  },
  onComplete: () => {
    console.log("Terminou");
  }
});


/*
onStart: -> Executa uma ação ao início de uma animação.

onUpdate: -> Executa uma ação durante a animação. 

onComplete: -> Executa uma ação quando termina a animação. 
 */