var atendimentoI = []
var atendimentoP = []
var atendimentoG = []

var quantidade = 1
var contador = 0

const ticketGeral = (atendimento) => {
    let atnGeral = ""
    for(let tick = 0; tick < quantidade; tick++){
        contador++
        let numeroAtendimento = contador.toString()
        atendimento.push(numeroAtendimento)
    }
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
            atnGeral += "<li>GE20" + atendimentoG[geral] + "</li>"        
        }
    }
    document.getElementById("senha").innerHTML = atnGeral
}
const geral = () => {
    ticketGeral(atendimentoG, "G");
}
const prefencial = () => {
    ticketGeral(atendimentoP);
}
const idoso = () => {
    ticketGeral(atendimentoI);
}
