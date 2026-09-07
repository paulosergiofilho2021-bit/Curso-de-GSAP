gsap.to(".ball",{
    y: -300,
    rotate: 360,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power5.inOut"
});


/*
repeat -> Repete uma animação determinadas vezes, se passar 2, ela executa 3 vezes, pois ele conta a primeira animação mais 2.

yoyo -> A animação precisa retornar para o lugar depois de ser executada, por isso existe o yoyo, que recebe um valor true.

ease -> É a forma que a animação vai se comportar, se ela vai ser linear, se vai ter aceleração, etc. No caso, o power2.in é uma aceleração que começa devagar e termina rápido. O número depois de power quer dizer a intensidade da aceleração, quanto maior o número, mais intensa será a aceleração. O in significa que a animação vai começar devagar e terminar rápido, o out é o contrário, começa rápido e termina devagar, e o inOut é uma mistura dos dois, começa devagar, acelera no meio e termina devagar.
*/