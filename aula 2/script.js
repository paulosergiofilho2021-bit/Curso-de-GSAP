gsap.from(".caixa", {
    x: -300,
    duration: 2
});
gsap.to(".caixa2", {
    x: -300,
    duration: 2
});
gsap.from(".titulo", {
    y: -100,
    opacity: 0,
    duration: 1
});
gsap.fromTo(".caixa3", 
    {
        x: -300,
        opacity: 0
    },

    {
        x: 300,
        opacity: 1,
        duration: 2
    }
);

/*
gsap.from() -> Anima a partir de um valor e vai até o ponto de origem.

gsap.fromTo () -> Recebe dois parâmetros objetos, o primeiro recebe o from e o segundo recebe o to. 
 */