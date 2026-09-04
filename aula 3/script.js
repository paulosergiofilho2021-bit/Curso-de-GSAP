const tl = gsap.timeline();

tl
.to(".caixa", {
    x: 200,
    duration: 1
})
.to(".circulo", {
    y: 200,
    duration: 1
})
.to(".caixa", {
    y: 250,
    duration: 1
}, /*"-=1"*/ "<");

/*
gsap.timeline () -> Anima um elemento, após terminar inicia outro elemento que esteja na sequência do código.

# O terceiro parâmtro "-=1" significa que a animação vai iniciar 1 segundo antes da anterior terminar. O "<" pede para iniciar junto com a animação anterior.
 */