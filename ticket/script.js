var listaGeral = ""
var contador = 0
var atendimentoG = []
var atendimentoI = []
var atendimentoP = []
var clientesAtendidos = []

const ticketGeral = (atendimento, prefixo) => {
    listaGeral = ""
    contador++
    console.log("contador: ", contador);
    let numeroAtendimento = contador.toString()
    atendimento.push(numeroAtendimento)

    const gerarTicket = (ticket, ) =>{
        let lista = ""
        for(let tick = 0; tick < ticket.length; tick++){
            lista += "<li>" + prefixo + ticket[tick] + "</li>"
        }
        return lista
    }
    listaGeral = gerarTicket(atendimentoI)  + gerarTicket(atendimentoP) + gerarTicket(atendimentoG)
    

    document.getElementById("senha").innerHTML = listaGeral
}

const geral = () => {
    ticketGeral(atendimentoG, "GR00");
}
const preferencial = () => {
    ticketGeral(atendimentoP, "PR00");
}
const idoso = () => {
    ticketGeral(atendimentoI, "ID00");
}

const atendenteOne = () => {
    atendimentos("atendimento")
    if(clientesAtendidos.length > 0){
        mostrarAtendidos("concluido")
    }
}
const atendenteTwo = () => {
    atendimentos("atendimento2")
    if(clientesAtendidos.length > 0){
        mostrarAtendidos("concluido")
    }
}
const atendenteTree = () => {
    atendimentos("atendimento3")
    if(clientesAtendidos.length > 0){
        mostrarAtendidos("concluido")
    }
}

const atendimentos = (elementId) => {
    let atnGeral = ""
 
    if (atendimentoI.length > 0) {
        let atendidos = atendimentoI[0]
        atnGeral += "<li>ID00" + atendidos + "</li>"
        
        for (let id = 0; id < atendimentoI.length - 1; id++) {
            atendimentoI[id] = atendimentoI[id + 1]
        }
        atendimentoI.length = atendimentoI.length - 1
        clientesAtendidos.push("ID00" + atendidos)

    }
    else if (atendimentoP.length > 0) {
        let atendidos = atendimentoP[0]
        atnGeral += "<li>PR10" + atendidos + "</li>"

        for (let pr = 0; pr < atendimentoP.length - 1; pr++) {
            atendimentoP[pr] = atendimentoP[pr + 1]
        }
        atendimentoP.length = atendimentoP.length - 1
        clientesAtendidos.push("PR10" + atendidos)
    }
    else if (atendimentoG.length > 0) {
        let atendidos = atendimentoG[0]
        atnGeral += "<li>GR20" + atendidos + "</li>"

        for (let gr = 0; gr < atendimentoG.length - 1; gr++) {
            atendimentoG[gr] = atendimentoG[gr + 1]
        }
        atendimentoG.length = atendimentoG.length - 1
        clientesAtendidos.push("GR20" + atendidos)
    }
    document.getElementById(elementId).innerHTML = atnGeral;
}
const mostrarAtendidos = (elementId) => {
    let listaAtendidos = "";
    for (let concluido = 0; concluido < clientesAtendidos.length; concluido++) {
        listaAtendidos += "<li>" + clientesAtendidos[concluido] + "</li>"
    }
    document.getElementById(elementId).innerHTML = listaAtendidos
}
