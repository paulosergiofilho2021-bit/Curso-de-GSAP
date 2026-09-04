const button = document.querySelector("#button");

button.addEventListener("click", () => {
    gsap.to(".caixa", {
    x: 300,
    y: 100,
    rotation: 360,
    scale: 1.5,
    duration: 2
    });
})




/*
gsap.to () -> Inicia o gsap. Recebe dois parâmetros, o primeiro é o elemento que vai ser animado e o segundo é a execução.
 */