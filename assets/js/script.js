
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd%2Cbrl
`).then(resposta=>{ 
        return resposta.json() 

}).then(corpo=>{ 
    document.getElementById("btc").innerHTML += `${corpo.bitcoin.usd},00 R$${corpo.bitcoin.brl},00 `
    document.getElementById("eth").innerHTML += `${corpo.ethereum.usd},00 R$${corpo.ethereum.brl},00`
    document.getElementById("tet").innerHTML += `${corpo.tether.usd},00 R$${corpo.tether.brl},00`
})


