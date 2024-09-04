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
    if(atendimentoI !== atendimentoG && atendimentoI !== atendimentoP && atendimentoP !== atendimentoG){
        for(let geral = 0; geral< atendimentoI.length; geral++){
        atnGeral += "<li>I-00" + atendimentoI[geral] + "</li>"        
    }}
    if(atendimentoP !== atendimentoI && atendimentoP !== atendimentoG && atendimentoI !== atendimentoG){
        for(let geral = 0; geral< atendimentoP.length; geral++){
        atnGeral += "<li>P-00" + atendimentoP[geral] + "</li>"        
    }}
    if(atendimentoG !== atendimentoI && atendimentoG !== atendimentoP && atendimentoI !== atendimentoP){
        for(let geral = 0; geral< atendimentoG.length; geral++){
            atnGeral += "<li>G-00" + atendimentoG[geral] + "</li>"
        
        }
    }

    document.getElementById("atendimentoGeral").innerHTML = atnGeral
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


// if(atendimentoG !== atendimentoI && atendimentoG !== atendimentoP && atendimentoI !== atendimentoP){
//     for(let geral = 0; geral< atendimentoG.length; geral++){
//         atnGeral += "<li>G-00" + atendimentoG[geral] + "</li>"
    
//     }
// } else{for(let geral = 0; geral< atendimentoP.length; geral++){
//     atnGeral += "<li>P-00" + atendimentoP[geral] + "</li>"        
// }} 
// if(atendimentoI !== atendimentoG && atendimentoI !== atendimentoP && atendimentoP !== atendimentoG)
//     {for(let geral = 0; geral< atendimentoI.length; geral++){
//     atnGeral += "<li>I-00" + atendimentoI[geral] + "</li>"
    
// }}
//Guardar


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


    
//PREFERENCIAL

// const ticketPrefencial = (atendimentoP, quantidade) => {
//     let atnPrefencial = ""
//     for(let tick = 0; tick < quantidade; tick++){
//         contador++
//         let numeroAtendimento = contador.toString()
//         atendimentoP.push(numeroAtendimento)
//     }
//     for(let geral = 0; geral< atendimentoP.length; geral++){
//         atnPrefencial += "<li>P-00" + atendimentoP[geral] + "</li>"       
//     }
//     document.getElementById("atendimentoPreferencial").innerHTML = atnPrefencial
// }

//IDOSO

// const ticketIdoso = (atendimentoI, quantidade) => {
//     let atnIdoso = ""
//     for(let tick = 0; tick < quantidade; tick++){
//         contador++
//         let numeroAtendimento = contador.toString()
//         atendimentoI.push(numeroAtendimento)
//     }
//     for(let geral = 0; geral< atendimentoI.length; geral++){
//         atnIdoso += "<li>I-00" + atendimentoI[geral] + "</li>"       
//     }
//     document.getElementById("atendimentoIdoso").innerHTML = atnIdoso
// }