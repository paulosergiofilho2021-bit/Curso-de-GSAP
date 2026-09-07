gsap.from(".card", {
    y: 100,
    opacity: 0,
    duration: 1,
    rotate: 90,

    stagger: 0.3,
});

/*
stagger -> Anima elementos com indentidades iguais (class e id por exemplo), em sequência. Recebe um valor em segundos, que vai ser o intervalo entre a animação de cada elemento.
 */