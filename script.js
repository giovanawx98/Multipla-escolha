const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você se sente em relação aos vestibulares?",
        alternativas: [
            {
                texto: "Estou seguro (a) e tranquilo (a)",
                afirmacao: "Está confiante para realizar as provas."
            },
            {
                texto: "Estou ansioso (a) / Com medo",
                afirmacao: "Tem medo de prestar tais provas."
            }
        ]
    },
    {
        enunciado: "Você já tomou a decisão do curso que deseja?",
        alternativas: [
            {
                texto: "Sim, já estou seguro (a) quanto a isso.",
                afirmacao: "Bacana!"
            },
            {
                texto: "Não, ainda tenho dúvidas :(",
                afirmacao: "Poxa!"
            }
        ]
    },
    {
        enunciado: "Você tem estudado ou se planejado para o fim do ensino médio?",
        alternativas: [
            {
                texto: "Sim, me preocupo muito com o meu futuro acadêmico!",
                afirmacao: "Isso é bom!"
            },
            {
                texto: "Não, estou perdido e com medo do futuro",
                afirmacao: "Talvez seja bom trabalhar em práticas para melhorar isso."
            }
        ]
    },
    {
        enunciado: "Sua família/professores conversam e oferecm apoio?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: ":)"
            },
            {
                texto: "Não!",
                afirmacao: ":("
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Vestibulares...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();