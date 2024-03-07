let CabeloTrasSelecionado = '';
let PeleSelecionado = '';
let RoupaSelecionada = '';
let CabeloFrenteSelecionado = '';
let AccSelecionado = '';

function desenharCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (CabeloTrasSelecionado !== '') {
        const imgCabeloTras = new Image();
        imgCabeloTras.src = CabeloTrasSelecionado;
        ctx.drawImage(imgCabeloTras, 0, 0, canvas.width, canvas.height);
    }
    if (PeleSelecionado !== '') {
        const imgPele = new Image();
        imgPele.src = PeleSelecionado;
        ctx.drawImage(imgPele, 0, 0, canvas.width, canvas.height);
    }
    if (RoupaSelecionada !== '') {
        const imgRoupa = new Image();
        imgRoupa.src = RoupaSelecionada;
        ctx.drawImage(imgRoupa, 0, 0, canvas.width, canvas.height);
    }
    if (CabeloFrenteSelecionado !== '') {
        const imgCabeloFrente = new Image();
        imgCabeloFrente.src = CabeloFrenteSelecionado;
        ctx.drawImage(imgCabeloFrente, 0, 0, canvas.width, canvas.height);
    }
    if (AccSelecionado !== '') {
        const imgAcc = new Image();
        imgAcc.src = AccSelecionado;
        ctx.drawImage(imgAcc, 0, 0, canvas.width, canvas.height);
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

// Restante do código permanece o mesmo
