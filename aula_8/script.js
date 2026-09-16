import gsap from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);
console.log(5);
gsap.from(".box", {
    x: -500,
    scrollTrigger: {
        trigger: ".box",
        start: "top 80%", 
        end: "top 20%",
        toggleActions: "play reverse play reverse",
        markers: true,
    }
});


/*
ToggleAnimations -> Define o que vai acontecer quando o objeto entra ou sai da área da animação do scroll. Recebe 4 parêmtros, sendo eles:

onEnter —> Rolando para baixo, a trigger entra na viewport
onLeave —> Rolando para baixo, a trigger sai da viewport
onEnterBack —> Rolando para cima, a trigger entra novamente
onLeaveBack —> Rolando para cima, a trigger sai (acima do topo)

E cada um deles recebe um parâmetro:

play —> Toca a animação
pause —> Pausa
resume —> Retoma de onde parou
reverse —> Toca de trás pra frente
restart —> Reinicia do começo
reset —> Volta ao estado inicial (sem tocar)
complete —> Pula direto pro final
none —> Não faz nada
 */