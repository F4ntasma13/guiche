var contador = 0
var atendimentoG = []
var atendimentoI = []
var atendimentoP = []
var clientesAtendidos = []
const reload = () => location.reload()


const gerarTicket = (ticket, prefixo) =>{
    let lista = ""
    for(let tick = 0; tick < ticket.length; tick++){
        lista += "<li>" + prefixo + ticket[tick] + "</li>"
        console.log("ticket[tick]: ", ticket[tick]);
    }
    return lista
}
const ticketGeral = (atendimento, prefixo) => {
    listaGeral = ""
    contador++
    let numeroAtendimento = contador.toString()
    atendimento.push(numeroAtendimento)

    listaGeral += gerarTicket(atendimentoG, prefixo)    

    document.getElementById("senha").innerHTML = listaGeral
}
const ticketIdoso = (atendimento, prefixo) => {
    listaIdoso = ""
    contador++
    let numeroAtendimento = contador.toString()
    atendimento.push(numeroAtendimento)

    listaIdoso += gerarTicket(atendimentoI, prefixo)  
    document.getElementById("idoso").innerHTML = listaIdoso
}
const ticketPreferencial = (atendimento, prefixo) => {
    listaPr = ""
    contador++
    let numeroAtendimento = contador.toString()
    atendimento.push(numeroAtendimento)

    listaPr += gerarTicket(atendimentoP, prefixo)  
    document.getElementById("preferencial").innerHTML = listaPr
}

const geral = () => {
    ticketGeral(atendimentoG, "GR00");

}
const preferencial = () => {
    ticketPreferencial(atendimentoP, "PR00");
}
const idoso = () => {
    ticketIdoso(atendimentoI, "ID00");
}

const guicheOne = () => {
    atendimentos("atendimento")
    if(clientesAtendidos.length > 0){
        mostrarAtendidos("concluido")
    }
}
const guicheTwo = () => {
    atendimentos("atendimento2")
    if(clientesAtendidos.length > 0){
        mostrarAtendidos("concluido")
    }
}
const guicheTree = () => {
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
