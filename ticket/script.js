var atendimentoI = []
var atendimentoP = []
var atendimentoG = []

var contador = 0

const ticketGeral = (atendimento) => {
    let atnGeral = ""
    contador++
    let numeroAtendimento = contador.toString()
    atendimento.push(numeroAtendimento)

    if(!atendimentoI || atendimentoP !== atendimentoG){
        for(let geral = 0; geral< atendimentoI.length; geral++){
        atnGeral += "<li>ID00" + atendimentoI[geral] + "</li>"        
    }}
    if(!atendimentoP || atendimentoI !== atendimentoG){
        for(let geral = 0; geral< atendimentoP.length; geral++){
        atnGeral += "<li>PR10" + atendimentoP[geral] + "</li>"        
    }}
    if(!atendimentoG || atendimentoI !== atendimentoP){
        for(let geral = 0; geral< atendimentoG.length; geral++){
            atnGeral += "<li>GR20" + atendimentoG[geral] + "</li>"        
    }}
    document.getElementById("senha").innerHTML = atnGeral
}
const geral = () => {
    ticketGeral(atendimentoG);
}
const prefencial = () => {
    ticketGeral(atendimentoP);
}
const idoso = () => {
    ticketGeral(atendimentoI);
}

const atendente = () => {
    let atnGeral = "";
    console.log("atnGeral: ", atnGeral);

    for (let geral = 0; geral < atendimentoI.length; geral++) {
        atnGeral += "<li>ID00" + atendimentoI[geral] + "</li>";
    }
    for (let geral = 0; geral < atendimentoP.length; geral++) {
        atnGeral += "<li>PR10" + atendimentoP[geral] + "</li>";
    }
    for (let geral = 0; geral < atendimentoG.length; geral++) {
        atnGeral += "<li>GR20" + atendimentoG[geral] + "</li>";
    }
    document.getElementById("atendimento").innerHTML = atnGeral;
}