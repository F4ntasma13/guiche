var atendimentoI = []
var atendimentoP = []
var atendimentoG = []

var contador = 0
var listaGeral = ""

const ticketGeral = (atendimento) => {
    let atnGeral = ""
    contador++
    let numeroAtendimento = contador.toString()
    atendimento.push(numeroAtendimento)

    const gerarTicket = (ticket, prefixo) =>{
        let lista = ""
        for(let tick = 0; tick < ticket.length; tick++){
            lista += "<li>" + prefixo + ticket[tick] + "</li>"
        }
        return lista
    }
    atnGeral += gerarTicket(atendimentoI, "ID00")
    atnGeral += gerarTicket(atendimentoP, "PR00")
    atnGeral += gerarTicket(atendimentoG, "GR00")

    document.getElementById("senha").innerHTML = atnGeral
}

const geral = () => {
    ticketGeral(atendimentoG);
}
const preferencial = () => {
    ticketGeral(atendimentoP);
}
const idoso = () => {
    ticketGeral(atendimentoI);
}

const atendenteOne = () => {
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
const atendenteTwo = () => {
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
    document.getElementById("atendimento2").innerHTML = atnGeral;
}
const atendenteTree = () => {
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
    document.getElementById("atendimento3").innerHTML = atnGeral;
}


    // if(!atendimentoG || atendimentoI !== atendimentoP){
    //     for(let geral = 0; geral< atendimentoG.length; geral++){
    //         atnGeral += "<li>GR20" + atendimentoG[geral] + "</li>"        
    // }}
    // else if(!atendimentoI || atendimentoP !== atendimentoG){
    //     for(let geral = 0; geral< atendimentoI.length; geral++){
    //     atnGeral += "<li>ID00" + atendimentoI[geral] + "</li>"        
    // }}
    // else{
    //     for(let geral = 0; geral< atendimentoP.length; geral++){
    //     atnGeral += "<li>PR10" + atendimentoP[geral] + "</li>"        
    // }}