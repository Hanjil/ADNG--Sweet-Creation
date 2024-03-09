let CabeloTrasSelecionado = '';
let PeleSelecionado = '';
let RoupaSelecionada = '';
let CabeloFrenteSelecionado = '';
let AccSelecionado = '';

const canvas = document.getElementById('canvas');
canvas.width = 1200;
canvas.height = 1550;
desenharCanvas();

function desenharCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    const imgCabeloTras = new Image();
    imgCabeloTras.src = CabeloTrasSelecionado;
    ctx.drawImage(imgCabeloTras, 0, 0, canvas.width, canvas.height);

    const imgPele = new Image();
    imgPele.src = PeleSelecionado;
    ctx.drawImage(imgPele, 0, 0, canvas.width, canvas.height);

    const imgRoupa = new Image();
    imgRoupa.src = RoupaSelecionada;
    ctx.drawImage(imgRoupa, 0, 0, canvas.width, canvas.height);

    const imgCabeloFrente = new Image();
    imgCabeloFrente.src = CabeloFrenteSelecionado;
    ctx.drawImage(imgCabeloFrente, 0, 0, canvas.width, canvas.height);

    const imgAcc = new Image();
    imgAcc.src = AccSelecionado;
    ctx.drawImage(imgAcc, 0, 0, canvas.width, canvas.height);
}

function BaixarCanvas() {
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'Newcete.png';
    link.click();
}