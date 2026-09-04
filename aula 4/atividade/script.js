const card = document.querySelectorAll(".card");
const botao = document.querySelector(".botao");

card.forEach(card => {
    card.addEventListener("mouseenter", () =>{
    gsap.to(card,  {
        y: -7,
        rotation: 2,
        duration: 0.3
    });
})
    card.addEventListener("mouseleave", () =>{
    gsap.to(card,  {
        y: 0,
        rotation: 0,
        duration: 0.3,
    });

    })
})