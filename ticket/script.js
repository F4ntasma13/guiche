var contadorG = 0
var contadorP = 0
var contadorI = 0
var tickets = []
var clientesAtendidos = []

const deslogar = () => location.reload()

document.getElementById("atendimento").innerHTML = "Status: Deslogado",
document.getElementById("atendimento2").innerHTML = "Status: Deslogado",
document.getElementById("atendimento3").innerHTML = "Status: Deslogado"




const logar = () => {
    let iniciar = 0
    if(iniciar === 0){
        document.getElementById("botao-container").innerHTML = 
        "<button class='botoes' onclick='guicheOne()' id= 'atenderBtn' disabled>Atender</button>"
        document.getElementById("botao-container2").innerHTML = 
        "<button class='botoes' onclick='guicheTwo()' id= 'atenderBtn' disabled>Atender</button>"
        document.getElementById("botao-container3").innerHTML = 
        "<button class='botoes' onclick='guicheTree()' id= 'atenderBtn' disabled>Atender</button>"
    }
    document.getElementById("atendimento").innerHTML = "Status: logado"
    document.getElementById("atendimento2").innerHTML = "Status: logado"
    document.getElementById("atendimento3").innerHTML = "Status: logado"  
}

const gerarTicket = (ticket) =>{
    let lista = ""
    for(let tick = 0; tick < ticket.length; tick++){
        lista += "<li>" + ticket[tick] + "</li>"
    }
    let botoes = document.getElementsByClassName("botoes")
    for(let d = 0; d < botoes.length; d++){
        botoes[d].disabled = false
    }
    return lista
    
};
const ticketGeral = () => {
    contadorG++
    let numeroAtendimento = "GR00" + contadorG.toString()

    tickets.push(numeroAtendimento)
    document.getElementById("senhas").innerHTML = gerarTicket(tickets)

};
const ticketIdoso = () => {
    contadorI++  
    let numeroAtendimento = "ID00" + contadorI.toString();
  
    tickets.push(numeroAtendimento)
    document.getElementById("senhas").innerHTML = gerarTicket(tickets)
};
const ticketPreferencial = () => {
    contadorP++
    let numeroAtendimento = "PR00" + contadorP.toString()

    tickets.push(numeroAtendimento)
    document.getElementById("senhas").innerHTML = gerarTicket(tickets)
};

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
    let atnGeral = "";
    let emAtendido = "";
    let clientesEmAtendimento = [];


    if (tickets.length > 0) {
        for (let atn = 0; atn < tickets.length; atn++) {
            if (tickets[atn].indexOf("ID") !== -1 && !emAtendido) {
                emAtendido = tickets[atn];
            } else {
                clientesEmAtendimento.push(tickets[atn]);
            }
        }
        if (!emAtendido) {
            for (let atn = 0; atn < clientesEmAtendimento.length; atn++) {
                if (clientesEmAtendimento[atn].indexOf("PR") !== -1 && !emAtendido) {
                    emAtendido = clientesEmAtendimento[atn];
                    clientesEmAtendimento.splice(atn, 1)
                    break;
                }
            }
        }
        if (!emAtendido) {
            emAtendido = tickets[0]
            clientesEmAtendimento = tickets.slice(1)
        }

        atnGeral += "<li>" + emAtendido + "</li>";

        tickets.length = 0;
        for (let i = 0; i < clientesEmAtendimento.length; i++) {
            tickets.push(clientesEmAtendimento[i]);
        }
        document.getElementById("senhas").innerHTML = gerarTicket(tickets);

    }

    document.getElementById(elementId).innerHTML = atnGeral;

}

const finalizarAtendimento = () => {
    document.getElementById("botao-container").innerHTML = 
    "<button id= 'atenderBtn' onclick='guicheOne()'>Atender</button>"
    mostrarAtendidos("concluido")   
    if(!tickets.length){
        document.getElementById("botao-container").innerHTML =
        "<button class='botoes' onclick='guicheOne()' disabled id= 'atenderBtn'>Atender</button>"
    }

    document.getElementById("atendimento").innerHTML = "Status: disponivel"
}
const finalizarAtendimentoDois = () => {
    document.getElementById("botao-container2").innerHTML = 
    "<button id= 'atenderBtn' onclick='guicheTwo()'>Atender</button>"
    mostrarAtendidosDois("concluido")
    if(!tickets.length){
        console.log("tickets.length >= 0: ", tickets.length >= 0);
        document.getElementById("botao-container2").innerHTML =
        "<button class='botoes' onclick='guicheTwo()' disabled id= 'atenderBtn'>Atender</button>"
    }   
    document.getElementById("atendimento2").innerHTML = "Status: disponivel"
}
const finalizarAtendimentoTres = () => {
    document.getElementById("botao-container3").innerHTML = 
    "<button class='botoes' onclick='guicheTree()' id= 'atenderBtn'>Atender</button>"
    mostrarAtendidosTres("concluido")  
    if(!tickets.length){
        document.getElementById("botao-container3").innerHTML =
        "<button class='botoes' onclick='guicheTree()' disabled id= 'atenderBtn'>Atender</button>"
    }
 
    document.getElementById("atendimento3").innerHTML = "Status: disponivel"


}
const mostrarAtendidos = (elementId) => {
    let listaAtendidos = "";
    let ticketGuiche1 = document.getElementById("atendimento").innerText;

    if (ticketGuiche1 !== "Status: disponivel") {
        clientesAtendidos.push(ticketGuiche1)
    }

    for (let i = 0; i < clientesAtendidos.length; i++) {
        listaAtendidos += "<li>" + clientesAtendidos[i] + "</li>";
    }

    document.getElementById(elementId).innerHTML = listaAtendidos;
};

const mostrarAtendidosDois = (elementId) => {
    let listaAtendidos = "";
    let ticketGuiche2 = document.getElementById("atendimento2").innerText

    if (ticketGuiche2 !== "Status: disponivel") {
        clientesAtendidos.push(ticketGuiche2)
    } 

    for (let i = 0; i < clientesAtendidos.length; i++) {
        listaAtendidos += "<li>" + clientesAtendidos[i] + "</li>";
    }

    document.getElementById(elementId).innerHTML = listaAtendidos;
};

const mostrarAtendidosTres = (elementId) => {
    let listaAtendidos = "";
    let ticketGuiche3 = document.getElementById("atendimento3").innerText;

    if (ticketGuiche3 !== "Status: disponivel") {
        clientesAtendidos.push(ticketGuiche3)
    }
    for (let i = 0; i < clientesAtendidos.length; i++) {
        listaAtendidos += "<li>" + clientesAtendidos[i] + "</li>";
    }

    document.getElementById(elementId).innerHTML = listaAtendidos;
};
