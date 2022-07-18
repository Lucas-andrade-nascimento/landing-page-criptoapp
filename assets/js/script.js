
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd%2Cbrl
`).then(resposta=>{ 
        return resposta.json() 

}).then(corpo=>{ 
    document.getElementById("btc-dolar").innerHTML += `$${corpo.bitcoin.usd}.00`
    document.getElementById("eth-dolar").innerHTML += `$${corpo.ethereum.usd}`
    document.getElementById("tet-dolar").innerHTML += `$${corpo.tether.usd}`
    document.getElementById("btc-real").innerHTML += `R$${corpo.bitcoin.brl}.00 `
    document.getElementById("eth-real").innerHTML += `R$${corpo.ethereum.brl}0`
    document.getElementById("tet-real").innerHTML += `R$${corpo.tether.brl}0`
})


