var contadorG = 0;
var contadorP = 0;
var contadorI = 0;
var tickets = [];
var clientesAtendidos = [];
var deslogar = function () {
    location.reload();
};
document.getElementById("atendimento").innerHTML = "Status: Deslogado",
    document.getElementById("atendimento2").innerHTML = "Status: Deslogado",
    document.getElementById("atendimento3").innerHTML = "Status: Deslogado";
var logar = function () {
    var iniciar = 0;
    if (iniciar === 0) {
        document.getElementById("botao-container").innerHTML =
            "<button class='botoes' onclick='guicheOne()' id= 'atenderBtn' disabled>Atender</button>";
        document.getElementById("botao-container2").innerHTML =
            "<button class='botoes' onclick='guicheTwo()' id= 'atenderBtn' disabled>Atender</button>";
        document.getElementById("botao-container3").innerHTML =
            "<button class='botoes' onclick='guicheTree()' id= 'atenderBtn' disabled>Atender</button>";
    }
    var botoesAtn = document.getElementsByClassName("botoesAtendimento");
    for (var d = 0; d < botoesAtn.length; d++) {
        botoesAtn[d].disabled = false;
    }
    document.getElementById("atendimento").innerHTML = "Status: logado";
    document.getElementById("atendimento2").innerHTML = "Status: logado";
    document.getElementById("atendimento3").innerHTML = "Status: logado";
};
var gerarTicket = function (ticket) {
    var lista = "";
    for (var tick = 0; tick < ticket.length; tick++) {
        lista += "<li>" + ticket[tick] + "</li>";
    }
    var botoes = document.getElementsByClassName("botoes");
    for (var d = 0; d < botoes.length; d++) {
        botoes[d].disabled = false;
    }
    return lista;
};
var ticketGeral = function () {
    contadorG++;
    var numeroAtendimento = "GR00" + contadorG.toString();
    tickets.push(numeroAtendimento);
    document.getElementById("senhas").innerHTML = gerarTicket(tickets);
};
var ticketIdoso = function () {
    contadorI++;
    var numeroAtendimento = "ID00" + contadorI.toString();
    tickets.push(numeroAtendimento);
    document.getElementById("senhas").innerHTML = gerarTicket(tickets);
};
var ticketPreferencial = function () {
    contadorP++;
    var numeroAtendimento = "PR00" + contadorP.toString();
    tickets.push(numeroAtendimento);
    document.getElementById("senhas").innerHTML = gerarTicket(tickets);
};
var guicheOne = function () {
    atendimentos("atendimento");
    var atenderBtn = document.getElementById("botao-container");
    atenderBtn.innerHTML = "<button onclick='finalizarAtendimento()'>Finalizar Atendimento</button>";
};
var guicheTwo = function () {
    atendimentos("atendimento2");
    var atenderBtn = document.getElementById("botao-container2");
    atenderBtn.innerHTML = "<button id='finalizarBtn' onclick='finalizarAtendimentoDois()'>Finalizar Atendimento</button>";
};
var guicheTree = function () {
    atendimentos("atendimento3");
    var atenderBtn = document.getElementById("botao-container3");
    atenderBtn.innerHTML = "<button id='finalizarBtn' onclick='finalizarAtendimentoTres()'>Finalizar Atendimento</button>";
};
var atendimentos = function (elementId) {
    var atnGeral = "";
    var emAtendido = "";
    var clientesEmAtendimento = [];
    if (tickets.length > 0) {
        for (var atn = 0; atn < tickets.length; atn++) {
            if (tickets[atn].indexOf("ID") !== -1 && !emAtendido) {
                emAtendido = tickets[atn];
            }
            else {
                clientesEmAtendimento.push(tickets[atn]);
            }
        }
        if (!emAtendido) {
            for (var atn = 0; atn < clientesEmAtendimento.length; atn++) {
                if (clientesEmAtendimento[atn].indexOf("PR") !== -1 && !emAtendido) {
                    emAtendido = clientesEmAtendimento[atn];
                    clientesEmAtendimento.splice(atn, 1);
                    break;
                }
            }
        }
        if (!emAtendido) {
            emAtendido = tickets[0];
            clientesEmAtendimento = tickets.slice(1);
        }
        atnGeral += "<li>" + emAtendido + "</li>";
        tickets.length = 0;
        for (var i = 0; i < clientesEmAtendimento.length; i++) {
            tickets.push(clientesEmAtendimento[i]);
        }
        document.getElementById("senhas").innerHTML = gerarTicket(tickets);
    }
    document.getElementById(elementId).innerHTML = atnGeral;
};
var finalizarAtendimento = function () {
    document.getElementById("botao-container").innerHTML =
        "<button id= 'atenderBtn' onclick='guicheOne()'>Atender</button>";
    mostrarAtendidos("concluido");
    if (!tickets.length) {
        document.getElementById("botao-container").innerHTML =
            "<button class='botoes' onclick='guicheOne()' disabled id= 'atenderBtn'>Atender</button>";
    }
    document.getElementById("atendimento").innerHTML = "Status: disponivel";
};
var finalizarAtendimentoDois = function () {
    document.getElementById("botao-container2").innerHTML =
        "<button id= 'atenderBtn' onclick='guicheTwo()'>Atender</button>";
    mostrarAtendidosDois("concluido");
    if (!tickets.length) {
        document.getElementById("botao-container2").innerHTML =
            "<button class='botoes' onclick='guicheTwo()' disabled id= 'atenderBtn'>Atender</button>";
    }
    document.getElementById("atendimento2").innerHTML = "Status: disponivel";
};
var finalizarAtendimentoTres = function () {
    document.getElementById("botao-container3").innerHTML =
        "<button class='botoes' onclick='guicheTree()' id= 'atenderBtn'>Atender</button>";
    mostrarAtendidosTres("concluido");
    if (!tickets.length) {
        document.getElementById("botao-container3").innerHTML =
            "<button class='botoes' onclick='guicheTree()' disabled id= 'atenderBtn'>Atender</button>";
    }
    document.getElementById("atendimento3").innerHTML = "Status: disponivel";
};
var mostrarAtendidos = function (elementId) {
    var listaAtendidos = "";
    var ticketGuiche1 = document.getElementById("atendimento").innerText;
    if (ticketGuiche1 !== "Status: disponivel") {
        clientesAtendidos.push(ticketGuiche1);
    }
    for (var i = 0; i < clientesAtendidos.length; i++) {
        listaAtendidos += "<li>" + clientesAtendidos[i] + "</li>";
    }
    document.getElementById(elementId).innerHTML = listaAtendidos;
};
var mostrarAtendidosDois = function (elementId) {
    var listaAtendidos = "";
    var ticketGuiche2 = document.getElementById("atendimento2").innerText;
    if (ticketGuiche2 !== "Status: disponivel") {
        clientesAtendidos.push(ticketGuiche2);
    }
    for (var i = 0; i < clientesAtendidos.length; i++) {
        listaAtendidos += "<li>" + clientesAtendidos[i] + "</li>";
    }
    document.getElementById(elementId).innerHTML = listaAtendidos;
};
var mostrarAtendidosTres = function (elementId) {
    var listaAtendidos = "";
    var ticketGuiche3 = document.getElementById("atendimento3").innerText;
    if (ticketGuiche3 !== "Status: disponivel") {
        clientesAtendidos.push(ticketGuiche3);
    }
    for (var i = 0; i < clientesAtendidos.length; i++) {
        listaAtendidos += "<li>" + clientesAtendidos[i] + "</li>";
    }
    document.getElementById(elementId).innerHTML = listaAtendidos;
};
