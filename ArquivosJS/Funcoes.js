function ProximoCabeloTras(fileName) {
    CabeloTrasSelecionado = fileName;
    document.getElementById('CabeloTras').src = fileName;
    desenharCanvas();
}

function ProximaPele(fileName) {
    PeleSelecionado = fileName;
    document.getElementById('Pele').src = fileName;
    desenharCanvas();
}

function ProximaRoupa(fileName) {
    RoupaSelecionada = fileName;
    document.getElementById('Roupa').src = fileName;
    desenharCanvas();
}

function ProximoCabeloFrente(fileName) {
    CabeloFrenteSelecionado = fileName;
    document.getElementById('CabeloFrente').src = fileName;
    desenharCanvas();
}

function ProximoAcc(fileName) {
    AccSelecionado = fileName;
    document.getElementById('Acc').src = fileName;
    desenharCanvas();
}



function toggleOpcoesCabeloTras() {
    var opcoesCabeloTras = document.getElementById("Opcoes-Cabelo-Tras");
    var novosBotoesCabeloTras = document.getElementById("Novos-Botoes-Cabelo-Tras");

    if (opcoesCabeloTras.style.display === "block") {
        opcoesCabeloTras.style.display = "none";
    } else {
        if (novosBotoesCabeloTras.style.display === "block") {
            novosBotoesCabeloTras.style.display = "none";
        } else {
            opcoesCabeloTras.style.display = "block";
        }
    }
}
function toggleOpcoesPele() {
    var opcoesPele = document.getElementById("Opcoes-Pele");
    var novosBotoesPele = document.getElementById("Novos-Botoes-Pele");

    if (opcoesPele.style.display === "block") {
        opcoesPele.style.display = "none";
    } else {
        if (novosBotoesPele.style.display === "block") {
            novosBotoesPele.style.display = "none";
        } else {
            opcoesPele.style.display = "block";
        }
    }
}
function toggleOpcoesRoupa() {
    var opcoesRoupa = document.getElementById("Opcoes-Roupa");
    opcoesRoupa.style.display = (opcoesRoupa.style.display === "block") ? "none" : "block";
}
function toggleOpcoesCabeloFrente() {
    var opcoesCabeloFrente = document.getElementById("Opcoes-Cabelo-Frente");
    var novosBotoesCabeloFrente = document.getElementById("Novos-Botoes-Cabelo-Frente");

    if (opcoesCabeloFrente.style.display === "block") {
        opcoesCabeloFrente.style.display = "none";
    } else {
        if (novosBotoesCabeloFrente.style.display === "block") {
            novosBotoesCabeloFrente.style.display = "none";
        } else {
            opcoesCabeloFrente.style.display = "block";
        }
    }
}
function toggleOpcoesAcc() {
    var opcoesAcc = document.getElementById("Opcoes-Acc");
    opcoesAcc.style.display = (opcoesAcc.style.display === "block") ? "none" : "block";
}


function selecionarCabeloTras(cabeloTrasSelecionado) {
    var opcoesCabeloTras = document.getElementById("Opcoes-Cabelo-Tras");
    opcoesCabeloTras.style.display = "none";
    var novosBotoesCabeloTras = document.getElementById("Novos-Botoes-Cabelo-Tras");
    novosBotoesCabeloTras.style.display = "block";

    if(cabeloTrasSelecionado === 1) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-001.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-002.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-003.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-004.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-005.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-006.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-007.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-008.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-009.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-010.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 2) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-011.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-020.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-019.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-015.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-012.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-017.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-013.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-018.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-014.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-016.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 3) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-021.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-022.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-023.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-024.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-025.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-026.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-027.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-028.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-029.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-030.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 4) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-031.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-032.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-033.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-034.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-035.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-036.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-037.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-038.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-039.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-040.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 5) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-041.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-042.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-043.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-044.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-045.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-046.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-047.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-048.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-049.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-050.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 6) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-051.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-052.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-053.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-054.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-055.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-056.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-057.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-058.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-059.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-060.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 7) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-061.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-070.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-069.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-068.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-067.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-063.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-065.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-066.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-064.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-062.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 8) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-071.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-072.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-073.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-074.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-075.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-076.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-077.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-078.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-079.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-080.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 9) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-081.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-082.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-083.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-084.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-085.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-086.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-087.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-088.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-089.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-090.png')">Rosa</button>
            </div>
        `;
    } else if (cabeloTrasSelecionado === 10) {
        novosBotoesCabeloTras.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloTras()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-091.png')">Castanho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-092.png')">Branco</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-093.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-094.png')">Azul Claro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-095.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-096.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-097.png')">Vermelho</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-098.png')">Loiro</button>
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-099.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloTras('Imagens/Cabelos-Tras/back-wig-100.png')">Rosa</button>
            </div>
        `;
    }
}
function voltarOpcoesCabeloTras() {
    var opcoesCabeloTras = document.getElementById("Opcoes-Cabelo-Tras");
    opcoesCabeloTras.style.display = "block";
    var novosBotoesCabeloTras = document.getElementById("Novos-Botoes-Cabelo-Tras");
    novosBotoesCabeloTras.style.display = "none";
}

function selecionarPele(PeleSelecionado) {
    var opcoesPele = document.getElementById("Opcoes-Pele");
    opcoesPele.style.display = "none";
    var novosBotoesPele = document.getElementById("Novos-Botoes-Pele");
    novosBotoesPele.style.display = "block";

    if(PeleSelecionado === 1) {
        novosBotoesPele.innerHTML = `
            <div class="MargemBotoes">
                <button onclick="voltarOpcoesPele()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximaPele('Imagens/Peles/skin-01.png')">Versão 1</button>
                <button onclick="ProximaPele('Imagens/Peles/skin-08.png')">Versão 2</button>
            </div>
        `;
    } else if (PeleSelecionado === 2) {
        novosBotoesPele.innerHTML = `
            <div class="MargemBotoes">
                <button onclick="voltarOpcoesPele()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximaPele('Imagens/Peles/skin-02.png')">Versão 1</button>
                <button onclick="ProximaPele('Imagens/Peles/skin-09.png')">Versão 2</button>
            </div>
        `;
    } else if (PeleSelecionado === 3) {
        novosBotoesPele.innerHTML = `
            <div class="MargemBotoes">
                <button onclick="voltarOpcoesPele()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximaPele('Imagens/Peles/skin-03.png')">Versão 1</button>
                <button onclick="ProximaPele('Imagens/Peles/skin-10.png')">Versão 2</button>
            </div>
        `;
    } else if (PeleSelecionado === 4) {
        novosBotoesPele.innerHTML = `
            <div class="MargemBotoes">
                <button onclick="voltarOpcoesPele()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximaPele('Imagens/Peles/skin-04.png')">Versão 1</button>
                <button onclick="ProximaPele('Imagens/Peles/skin-11.png')">Versão 2</button>
            </div>
        `;
    } else if (PeleSelecionado === 5) {
        novosBotoesPele.innerHTML = `
            <div class="MargemBotoes">
                <button onclick="voltarOpcoesPele()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximaPele('Imagens/Peles/skin-05.png')">Versão 1 (Padrão)</button>
                <button onclick="ProximaPele('Imagens/Peles/skin-12.png')">Versão 2</button>
            </div>
        `;
    } else if (PeleSelecionado === 6) {
        novosBotoesPele.innerHTML = `
            <div class="MargemBotoes">
                <button onclick="voltarOpcoesPele()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximaPele('Imagens/Peles/skin-06.png')">Versão 1</button>
                <button onclick="ProximaPele('Imagens/Peles/skin-13.png')">Versão 2</button>
            </div>
        `;
    } else if (PeleSelecionado === 7) {
        novosBotoesPele.innerHTML = `
            <div class="MargemBotoes">
                <button onclick="voltarOpcoesPele()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximaPele('Imagens/Peles/skin-07.png')">Versão 1</button>
                <button onclick="ProximaPele('Imagens/Peles/skin-14.png')">Versão 2</button>
            </div>
        `;
    }
}
function voltarOpcoesPele() {
    var opcoesPele = document.getElementById("Opcoes-Pele");
    opcoesPele.style.display = "block";
    var novosBotoesPele = document.getElementById("Novos-Botoes-Pele");
    novosBotoesPele.style.display = "none";
}

function selecionarCabeloFrente(CabeloFrenteSelecionado) {
    var opcoesCabeloFrente = document.getElementById("Opcoes-Cabelo-Frente");
    opcoesCabeloFrente.style.display = "none";
    var novosBotoesCabeloFrente = document.getElementById("Novos-Botoes-Cabelo-Frente");
    novosBotoesCabeloFrente.style.display = "block";

    if(CabeloFrenteSelecionado === 1) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-001.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-002.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-003.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-004.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-005.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-006.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-007.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-008.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-009.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-010.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 2) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-011.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-020.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-019.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-015.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-012.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-017.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-013.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-018.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-014.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-016.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 3) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-021.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-022.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-023.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-024.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-025.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-026.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-027.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-028.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-029.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-030.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 4) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-031.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-032.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-033.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-034.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-035.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-036.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-037.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-038.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-039.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-040.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 5) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-041.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-042.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-043.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-044.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-045.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-046.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-047.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-048.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-049.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-050.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 6) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-051.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-052.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-053.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-054.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-055.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-056.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-057.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-058.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-059.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-060.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 7) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-061.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-070.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-069.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-068.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-067.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-063.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-065.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-066.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-064.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-062.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 8) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-081.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-082.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-083.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-084.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-085.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-086.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-087.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-088.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-089.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-090.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 9) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-091.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-092.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-093.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-094.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-095.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-096.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-097.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-098.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-099.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-100.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 10) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-101.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-102.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-103.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-104.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-105.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-106.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-107.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-108.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-109.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-110.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 11) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-071.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-072.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-073.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-074.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-075.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-076.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-077.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-078.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-079.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-080.png')">Rosa</button>
            </div>
        `;
    } else if (CabeloFrenteSelecionado === 12) {
        novosBotoesCabeloFrente.innerHTML = `
            <div class="MargemBotoes">
            <button onclick="voltarOpcoesCabeloFrente()">Voltar</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-111.png')">Castanho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-112.png')">Branco</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-113.png')">Preto</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-114.png')">Azul Claro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-115.png')">Azul Escuro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-116.png')">Roxo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-117.png')">Vermelho</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-118.png')">Loiro</button>
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-119.png')">Ruivo</button>
            </div>
            <div class="MargemBotoes">
                <button onclick="ProximoCabeloFrente('Imagens/Cabelos-Frente/front-wig-120.png')">Rosa</button>
            </div>
        `;
    }
}
function voltarOpcoesCabeloFrente() {
    var opcoesCabeloFrente = document.getElementById("Opcoes-Cabelo-Frente");
    opcoesCabeloFrente.style.display = "block";
    var novosBotoesCabeloFrente = document.getElementById("Novos-Botoes-Cabelo-Frente");
    novosBotoesCabeloFrente.style.display = "none";
}

function toggleMensagem() {
    var MensagemAviso = document.getElementById("MensagemDeAviso");
    MensagemAviso.style.display = (MensagemAviso.style.display === "block") ? "none" : "block";
}