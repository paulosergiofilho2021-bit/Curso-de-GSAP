gsap.registerPlugin(ScrollTrigger);

gsap.from(".box", {
  x: -400,
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play reverse play reverse",
    markers: true,
    // onEnter: () => {
    //   console.log("Entrou");
    //   document.body.classList.add("ativo");
    // },
    // onLeave: () => {
    //   console.log("Saiu");
    //   document.body.classList.remove("ativo");
    // },
    // onEnterBack: () => {
    //   console.log("Entrou voltando");
    //   document.body.classList.add("ativo");
    // },
    // onLeaveBack: () => {
    //   console.log("Saiu voltando");
    //   document.body.classList.remove("ativo");
    // },
    // onUpdate: (self) => {
    //   console.log(self.progress.toFixed(2));
    // },
    onToggle: (self) => {
      console.log(self.isActive);
    },
    onRefreshInit: () => {
        console.log("Preparando atualização");
    },
    onRefresh: () => {
        console.log("Atualização concluída");
    }
  },
});

/*
Chamando os executadores de entrada e saída, é possível definir o que acontece usando uma função, exemplo:

onEnter: () => {}
onLeave: () => {}
onEnterBack: () => {}
onLeaveBack: () => {}

onUpdate: -> Acontece enquanto a animação do ScrollTrigger está rolando. Pode receber um parâmetro nos parênteses, e esse parâmetro vai se referir ao objeto do ScrollTigger. O método progress serve pra mostrar o progresso da animação dentro do ScrollTrigger. Por exemplo:

console.log(self.progress) -> Saída = 0.5
                                       ^
                            Está na metade


onToggle: -> É chamdo toda vez que o estado da animação do ScrollTrigger muda. Recebe um parâmetro para o objeto e ganha método isActive, que retorna true ou false.
 */
