var atendimentoI = []
var atendimentoP = []
var atendimentoG = []

var quantidade = 1
var contador = 0


//PREFERENCIAL

const ticketPrefencial = (atendimentoP, quantidade) => {
    let atnPrefencial = ""
    for(let tick = 0; tick < quantidade; tick++){
        contador++
        let numeroAtendimento = contador.toString()
        atendimentoP.push(numeroAtendimento)
    }
    for(let geral = 0; geral< atendimentoP.length; geral++){
        atnPrefencial += "<li>P-00" + atendimentoP[geral] + "</li>"       
    }
    document.getElementById("atendimentoPreferencial").innerHTML = atnPrefencial
}
const prefencial = () => {
    ticketPrefencial(atendimentoP, quantidade);
}


const ticketGeral = (atendimentoG, quantidade) => {
    let atnGeral = ""
    for(let tick = 0; tick < quantidade; tick++){
        contador++
        let numeroAtendimento = contador.toString()
        atendimentoG.push(numeroAtendimento)
    }
    for(let geral = 0; geral< atendimentoG.length; geral++){
        atnGeral += "<li>G-00" + atendimentoG[geral] + "</li>"
        
    }

    document.getElementById("atendimentoGeral").innerHTML = atnGeral
    // document.getElementById("atendimentoIdoso").innerHTML = atnIdoso
    // document.getElementById("atendimentoPreferencial").innerHTML = atnPrefencial

    // if(atnIdoso){
    //     document.getElementById("atendimentoIdoso").innerHTML = atnIdoso
    // }
    // if(atnPrefencial){
    //     document.getElementById("atendimentoPreferencial").innerHTML = atnPrefencial
    // }
    // document.getElementById("atendimentoGeral").innerHTML = atnGeral
    // document.getElementById("atendimentoIdoso").innerHTML = atnIdoso
    // document.getElementById("atendimentoPreferencial").innerHTML = atnPrefencial
}

//IDOSO

const geral = () => {
    ticketGeral(atendimentoG, quantidade);
}
const ticketIdoso = (atendimentoI, quantidade) => {
    let atnIdoso = ""
    for(let tick = 0; tick < quantidade; tick++){
        contador++
        let numeroAtendimento = contador.toString()
        atendimentoI.push(numeroAtendimento)
    }
    for(let geral = 0; geral< atendimentoI.length; geral++){
        atnIdoso += "<li>I-00" + atendimentoI[geral] + "</li>"       
    }
    document.getElementById("atendimentoIdoso").innerHTML = atnIdoso
}
const idoso = () => {
    ticketIdoso(atendimentoI, quantidade);
}

