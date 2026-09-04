const botao = document.querySelector(".botao");
botao.addEventListener("click", () => {
    gsap.to(".caixa", {
        x: 300,
        rotation: 360,
        duration: 1
    });
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3
        });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3
        });
    });
});