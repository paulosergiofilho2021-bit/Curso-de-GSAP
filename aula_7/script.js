import gsap from "gsap"; // Importando Gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importando ScrollTriger


gsap.registerPlugin(ScrollTrigger); // Registrando scrollTrigger
console.log(5)
gsap.from(".box", {
    x: -500,
    scrollTrigger: {
        trigger: ".box", // Define qual elemento vai ser usado como referência.
        start: "top 80%", // Define o ponto de começo.
        end: "top 20%", // Define o ponto que a região do scroll termina.
        scrub: 1, // Faz a animação acompanhar o scroll.
        markers: true // Marca os ponto de início e fim do scroll.
    }
});
/*
o Scrub pode receber um valor numérico, qua vai determinar a suavidade da animação quanto maior for o número, e o valor true acompanha o progresso da animação conforme você rola para baixo e para cima
*/