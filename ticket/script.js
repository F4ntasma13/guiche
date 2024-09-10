var contadorG = 0
var contadorP = 0
var contadorI = 0
var atendimentoG = []
var atendimentoI = []
var atendimentoP = []
var clientesAtendidos = []
const deslogar = () => location.reload()

document.getElementById("atendimento").innerHTML = "Status: Deslogado",
document.getElementById("atendimento2").innerHTML = "Status: Deslogado",
document.getElementById("atendimento3").innerHTML = "Status: Deslogado"       



const gerarTicket = (ticket, prefixo) =>{
    let lista = ""
    for(let tick = 0; tick < ticket.length; tick++){
        lista += "<li>" + prefixo + ticket[tick] + "</li>"
    }
    return lista
}
const ticketGeral = (atendimento, prefixo) => {
    listaGr = ""
    contadorG++
    let numeroAtendimento = contadorG.toString()
    atendimento.push(numeroAtendimento)

    listaGr += gerarTicket(atendimentoG, prefixo)    
    document.getElementById("senha").innerHTML = listaGr
}
const ticketIdoso = (atendimento, prefixo) => {
    listaId = ""
    contadorI++
    let numeroAtendimentoI = contadorI.toString()
    atendimento.push(numeroAtendimentoI)

    listaId += gerarTicket(atendimentoI, prefixo)  
    document.getElementById("idoso").innerHTML = listaId

}
const ticketPreferencial = (atendimento, prefixo) => {
    listaPr = ""
    contadorP++
    let numeroAtendimentoP = contadorP.toString()
    atendimento.push(numeroAtendimentoP)

    listaPr += gerarTicket(atendimentoP, prefixo)  
    document.getElementById("preferencial").innerHTML = listaPr
}
const geral = () => {
    ticketGeral(atendimentoG, "GR20");
}
const preferencial = () => {
    ticketPreferencial(atendimentoP, "PR10")
}
const idoso = () => {
    ticketIdoso(atendimentoI, "ID00")
}
const guicheOne = () => {
    atendimentos("atendimento")
    const atenderBtn = document.getElementById("botao-container");
    atenderBtn.innerHTML = "<button onclick='finalizarAtendimento()'>Finalizar Atendimento</button>"
}
const guicheTwo = () => {
    atendimentos("atendimento2")
    const atenderBtn = document.getElementById("botao-container2");
    atenderBtn.innerHTML = "<button id='finalizarBtn' onclick='finalizarAtendimentoDois()'>Finalizar Atendimento</button>"
}

const guicheTree = () => {
    atendimentos("atendimento3")
    const atenderBtn = document.getElementById("botao-container3");
    atenderBtn.innerHTML = "<button id='finalizarBtn' onclick='finalizarAtendimentoTres()'>Finalizar Atendimento</button>"
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
const finalizarAtendimento = () => {
    document.getElementById("botao-container").innerHTML = 
    "<button id= 'atenderBtn' onclick='guicheOne()'>Atender</button>"
    mostrarAtendidos("concluido")   
    document.getElementById("atendimento").innerHTML = "Status: disponivel"
}
const finalizarAtendimentoDois = () => {
    document.getElementById("botao-container2").innerHTML = 
    "<button id= 'atenderBtn' onclick='guicheTwo()'>Atender</button>"
    mostrarAtendidos("concluido")   
    document.getElementById("atendimento2").innerHTML = "Status: disponivel"
}
const finalizarAtendimentoTres = () => {
    document.getElementById("botao-container3").innerHTML = 
    "<button id= 'atenderBtn' onclick='guicheTree()'>Atender</button>"
    mostrarAtendidos("concluido")   
    document.getElementById("atendimento3").innerHTML = "Status: disponivel"
    // let ticketGr = document.getElementById("senha")
    // let ticketId = document.getElementById("idoso")
    // let ticketPr = document.getElementById("preferencial")

    // let listaTicketsGr = ticketGr.getElementsByTagName("li")
   
    // if (listaTicketsGr.length > 0 ) {
    //     ticketGr.removeChild(listaTicketsGr[0])
    // }

}
const mostrarAtendidos = (elementId) => {
    let listaAtendidos = "";
    for (let concluido = 0; concluido < clientesAtendidos.length; concluido++) {
        listaAtendidos += "<li>" + clientesAtendidos[concluido] + "</li>"
    }
    document.getElementById(elementId).innerHTML = listaAtendidos
}
const logar = () => {
    let iniciar = 0
    if(iniciar === 0){
        document.getElementById("botao-container").innerHTML = 
            "<button id= 'atenderBtn' onclick='guicheOne()'>Atender</button>"
        document.getElementById("botao-container2").innerHTML = 
            "<button id= 'atenderBtn' onclick='guicheTwo()'>Atender</button>"
        document.getElementById("botao-container3").innerHTML = 
            "<button id= 'atenderBtn' onclick='guicheTree()'>Atender</button>"
    }
    document.getElementById("atendimento").innerHTML = "Status: logado"
    document.getElementById("atendimento2").innerHTML = "Status: logado"
    document.getElementById("atendimento3").innerHTML = "Status: logado"
    
}