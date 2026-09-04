const tl = gsap.timeline();

tl
.from(".titulo",{
    y: -200,
    opacity: 0,
    duration: 1
})
.from(".texto", {
    x: 200,
    opacity: 0,
    duration: 1
})
.from(".caixa", {
    x: -200,
    opacity: 0,
    duration: 1
}, "<")
.from(".botao", {
    opacity: 0,
    x: -200,
    duration: 1
}, "-=0.5");