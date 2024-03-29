let CabeloTrasSelecionado = 'Imagens/blank.png';
let PeleSelecionado = 'Imagens/Peles/skin-05.png';
let RoupaSelecionada = 'Imagens/blank.png';
let CabeloFrenteSelecionado = 'Imagens/blank.png';
let AccSelecionado = 'Imagens/blank.png';

const canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 1550;
desenharCanvas();

function desenharCanvas() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgCabeloTras = new Image();
    imgCabeloTras.src = CabeloTrasSelecionado;
    imgCabeloTras.onload = function() {
        ctx.drawImage(imgCabeloTras, 0, 0, canvas.width, canvas.height);
    };

    const imgPele = new Image();
    imgPele.src = PeleSelecionado;
    imgPele.onload = function() {
        ctx.drawImage(imgPele, 0, 0, canvas.width, canvas.height);
    };

    const imgRoupa = new Image();
    imgRoupa.src = RoupaSelecionada;
    imgRoupa.onload = function() {
        ctx.drawImage(imgRoupa, 0, 0, canvas.width, canvas.height);
    };

    const imgCabeloFrente = new Image();
    imgCabeloFrente.src = CabeloFrenteSelecionado;
    imgCabeloFrente.onload = function() {
        ctx.drawImage(imgCabeloFrente, 0, 0, canvas.width, canvas.height);
    };

    if (AccSelecionado !== 'Imagens/blank.png') {
        const imgAcc = new Image();
        imgAcc.src = AccSelecionado;
        imgAcc.onload = function() {
            ctx.drawImage(imgAcc, 0, 0, canvas.width, canvas.height);
        };
    }
}


function BaixarCanvas() {
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'Newcete.png';
    link.click();
}