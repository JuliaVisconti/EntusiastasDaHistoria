
// NESTE ARQUIVO, TEMOS TUDO QUE SERIA DA TAG <SCRIPT> DA PÁGINA "QUIZ.HTML", OU SEJA, OS VETORES, FUNCTIONS, VARIÁVEIS, ETC.

const listaDeQuestoes = [                                                                  // vetor que guarda cada uma das perguntas do quiz num grande array de jsons

    {                                                                                      // questão 1 do quiz
        pergunta: "O que marca o fim da Pré-História?",                                         // enunciado
        alternativaA: "O surgimento da agricultura",                                            // alternativa A
        alternativaB: "A invenção da roda",                                                     // alternativa B
        alternativaC: "O domínio do fogo",                                                      // alternativa C
        alternativaD: "A invenção da escrita",                                                  // alternativa D
        alternativaCorreta: "alternativaD"                                                      // alternativa correta desta questão
    },

    {                                                                                      // questão 2 do quiz
        pergunta: "Durante o Paleolítico, os humanos:",                                         // enunciado
        alternativaA: "Já viviam em cidades e praticavam agricultura",                          // alternativa A
        alternativaB: "Eram sedentários e criavam gado",                                        // alternativa B
        alternativaC: "Eram nômades e usavam ferramentas de pedra lascada",                     // alternativa C
        alternativaD: "Tinham escrita e sistema de leis",                                       // alternativa D
        alternativaCorreta: "alternativaC"                                                      // alternativa correta desta questão
    },

    {                                                                                     // questão 3 do quiz
        pergunta: "Uma conquista crucial do período Paleolítico foi:",                          // enunciado
        alternativaA: "A cerâmica",                                                             // alternativa A
        alternativaB: "O domínio do fogo",                                                      // alternativa B
        alternativaC: "A tecelagem",                                                            // alternativa C
        alternativaD: "A criação de moedas",                                                    // alternativa D
        alternativaCorreta: "alternativaB"                                                      // alternativa correta desta questão
    },

    {                                                                                    // questão 4 do quiz
        pergunta: "A principal característica do Neolítico foi:",                               // enunciado
        alternativaA: "Nomadismo",                                                              // alternativa A
        alternativaB: "Uso do ferro",                                                           // alternativa B
        alternativaC: "Sedentarismo e agricultura",                                             // alternativa C
        alternativaD: "Pinturas rupestres",                                                     // alternativa D
        alternativaCorreta: "alternativaC"                                                      // alternativa correta desta questão
    },

    {                                                                                    // questão 5 do quiz
        pergunta: "A Idade dos Metais ficou marcada pela(o):",                                  // enunciado
        alternativaA: "Invenção da escrita e surgimento das civilizações",                      // alternativa A
        alternativaB: "Caça e coleta",                                                          // alternativa B
        alternativaC: "Vida nômade",                                                            // alternativa C
        alternativaD: "Surgimento das pinturas rupestres",                                      // alternativa D
        alternativaCorreta: "alternativaA"                                                      // alternativa correta desta questão
    },

    {                                                                                    // questão 6 do quiz
        pergunta: "A Idade Média começou com:",                                                 // enunciado
        alternativaA: "A Revolução Francesa",                                                   // alternativa A
        alternativaB: "A tomada de Constantinopla",                                             // alternativa B
        alternativaC: "A queda do Império Romano do Ocidente",                                  // alternativa C
        alternativaD: "O início das Cruzadas",                                                  // alternativa D
        alternativaCorreta: "alternativaC"                                                      // alternativa correta desta questão
    },

    {                                                                                    // questão 7 do quiz
        pergunta: "O sistema social e econômico dominante na Idade Média era:",                 // enunciado
        alternativaA: "Capitalismo",                                                            // alternativa A
        alternativaB: "Mercantilismo",                                                          // alternativa B
        alternativaC: "Comunismo",                                                              // alternativa C
        alternativaD: "Feudalismo",                                                             // alternativa D
        alternativaCorreta: "alternativaD"                                                      // alternativa correta desta questão
    },

    {                                                                                    // questão 8 do quiz
        pergunta: "No sistema feudal, os servos:",                                              // enunciado
        alternativaA: "Eram livres e donos de terras",                                          // alternativa A
        alternativaB: "Recebiam salários do rei",                                               // alternativa B
        alternativaC: "Trabalhavam em troca de proteção e subsistência",                        // alternativa C
        alternativaD: "Viviam nas cidades e eram comerciantes",                                 // alternativa D
        alternativaCorreta: "alternativaC"                                                      // alternativa correta desta questão
    },

    {                                                                                    // questão 9 do quiz
        pergunta: "O que caracterizou a Baixa Idade Média?",                                    // enunciado
        alternativaA: "Expansão islâmica na Europa",                                            // alternativa A
        alternativaB: "Declínio do comércio",                             
        alternativaC: "Renascimento urbano e crescimento das cidades",
        alternativaD: "Fim do cristianismo",
        alternativaCorreta: "alternativaC"
    },

        {
            pergunta: "A Peste Negra causou:",
            alternativaA: "Crescimento da população",
            alternativaB: "Crise econômica e social",
            alternativaC: "Expansão da Igreja Católica",
            alternativaD: "Fim das Cruzadas",
            alternativaCorreta: "alternativaB"
        },

        {
            pergunta: "Um dos marcos iniciais da Idade Moderna foi:",
            alternativaA: "A Revolução Industrial",
            alternativaB: "A queda do Muro de Berlim",
            alternativaC: " A Guerra dos Cem Anos",
            alternativaD: "A tomada de Constantinopla",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "O Renascimento destacou-se por valorizar:",
            alternativaA: "O humanismo e o conhecimento científico",
            alternativaB: "A fé cega e o misticismo",
            alternativaC: "A obediência à Igreja",
            alternativaD: "O sistema feudal",
            alternativaCorreta: "alternativaA"
        },

        {
            pergunta: "A Reforma Protestante foi iniciada por:",
            alternativaA: "João Calvino",
            alternativaB: "Henrique VIII",
            alternativaC: "Santo Agostinho",
            alternativaD: "Martinho Lutero",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "O absolutismo é caracterizado pelo:",
            alternativaA: "Governo parlamentar",
            alternativaB: "Poder compartilhado entre povo e rei",
            alternativaC: "Poder concentrado nas mãos do monarca",
            alternativaD: "Voto direto nas decisões políticas",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "O mercantilismo defendia:",
            alternativaA: "Livre mercado sem intervenção",
            alternativaB: "Acúmulo de riquezas pelo Estado e intervenção na economia",
            alternativaC: "Igualdade de renda",
            alternativaD: "Eliminação de impostos sobre importações",
            alternativaCorreta: "alternativaB"
        },

        {
            pergunta: "A Revolução Francesa foi motivada por:",
            alternativaA: "Apoio ao absolutismo",
            alternativaB: "Interesses coloniais",
            alternativaC: "Expansão do feudalismo",
            alternativaD: "Ideais de liberdade, igualdade e fraternidade",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "A Revolução Industrial teve início na:",
            alternativaA: "Inglaterra",
            alternativaB: "França",
            alternativaC: "Alemanha",
            alternativaD: "Itália",
            alternativaCorreta: "alternativaA"
        },

        {
            pergunta: "A Primeira Guerra Mundial terminou com:",
            alternativaA: "A Revolução Francesa",
            alternativaB: "A queda do Império Romano",
            alternativaC: "O Tratado de Versalhes",
            alternativaD: "A queda do Muro de Berlim",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "A Guerra Fria foi marcada por:",
            alternativaA: "Combates diretos entre EUA e URSS",
            alternativaB: "Paz mundial e cooperação",
            alternativaC: "Fim das alianças militares",
            alternativaD: "Disputas ideológicas e corrida armamentista",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "A globalização é caracterizada por:",
            alternativaA: "Interconexão entre países e mercados",
            alternativaB: "Isolamento econômico dos países",
            alternativaC: "Desconexão cultural e tecnológica",
            alternativaD: "Volta ao feudalismo",
            alternativaCorreta: "alternativaA"
        }
        
    ]

    // variáveis globais    
    let numeroDaQuestaoAtual = 0
    let pontuacaoFinal = 0
    let tentativaIncorreta = 0
    let certas = 0
    let erradas = 0
    let quantidadeDeQuestoes = listaDeQuestoes.length
    // let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

    function onloadEsconder() {
        document.getElementById('pontuacao').style.display = "none"
        document.getElementById('jogo').style.display = "none"
    }

    function iniciarQuiz() {
        document.getElementById('pontuacao').style.display = "flex"
        document.getElementById('jogo').style.display = "flex"
        document.getElementById('btnIniciarQuiz').style.display = "none"

        document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

        preencherHTMLcomQuestaoAtual(0)

        btnSubmeter.disabled = false
        btnProx.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = true
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaDeQuestoes[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
        document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
        document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
        document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
    }

    function submeter() {
        const options = document.getElementsByName("option"); // recupera alternativas no html

        let hasChecked = false
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                hasChecked = true
                break
            }
        }

        if (!hasChecked) {
            alert("Não há alternativas escolhidas. Escolha uma opção.")
        } else {
            btnSubmeter.disabled = true
            btnProx.disabled = false

            habilitarAlternativas(false)

            checarResposta()
        }
    }

    function habilitarAlternativas(trueOrFalse) {
        let opcaoEscolhida = trueOrFalse ? false : true

        primeiraOpcao.disabled = opcaoEscolhida
        segundaOpcao.disabled = opcaoEscolhida
        terceiraOpcao.disabled = opcaoEscolhida
        quartaOpcao.disabled = opcaoEscolhida

    }

    function avancar() {
        btnProx.disabled = true
        btnSubmeter.disabled = false

        desmarcarRadioButtons()

        if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
            alert("Atenção... a próxima é a ultima questão!")
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else {
            finalizarJogo()
        }
        limparCoresBackgroundOpcoes()
    }

    function checarResposta() {
        const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
        const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

        const options = document.getElementsByName("option"); // recupera alternativas no html

        let alternativaCorreta = null // variável para armazenar a alternativa correta

        options.forEach((option) => {
            if (option.value === respostaQuestaoAtual) {
                console.log("alternativaCorreta está no componente: " + alternativaCorreta)
                alternativaCorreta = option.labels[0].id
            }
        })

        // verifica se resposta assinalada é correta
        let acertou;
        options.forEach((option) => {
            if (option.checked === true && option.value === respostaQuestaoAtual) {
                acertou = 1
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                pontuacaoFinal++
                certas++
                document.getElementById("spanCertas").innerHTML = certas
                numeroDaQuestaoAtual++
            } else if (option.checked && option.value !== respostaQuestaoAtual) {
                const wrongLabelId = option.labels[0].id
                acertou = 0
                document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                tentativaIncorreta++
                erradas++
                document.getElementById("spanErradas").innerHTML = erradas
                numeroDaQuestaoAtual++
            }
        })

        let idUsuario = sessionStorage.ID_USUARIO;

        fetch("/dashboard/submeterResposta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idQuestaoServer: numeroDaQuestaoAtual,
                pontuacaoServer: acertou,
                idUsuarioServer: idUsuario
            })
        }).then(resultado => {
            console.log(resultado);
        })
    }

    function limparCoresBackgroundOpcoes() {
        const options = document.getElementsByName("option");
        options.forEach((option) => {
            document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
            document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
        })
    }

    function desmarcarRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }

    function finalizarJogo() {

        jogo.innerHTML = `<div class="mensagem_final_quiz">PARABÉNS! <br><br>QUIZ FINALIZADO!</div>`;

        let textoParaMensagemFinal = null;

// HELP ---------------------------------------------------------------------------------------------------------------------
 
        textoParaMensagemFinal = `Você acertou: ${HELP} questões.<br><br>E errou: ${HELP} questões neste questionário.`

        document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal

        document.getElementById('jogo').classList.add("text-new-gray") 

        btnProx.disabled = true
        btnSubmeter.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = false

    }