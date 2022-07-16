
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd%2Cbrl
`).then(resposta=>{ 
        return resposta.json() 

}).then(corpo=>{ 
    document.getElementById("btc").innerHTML += " R$" + corpo.bitcoin.brl
    document.getElementById("eth").innerHTML += corpo.ethereum.usd  
    document.getElementById("eth").innerHTML += " R$" + corpo.ethereum.brl
    document.getElementById("tet").innerHTML += corpo.tether.usd  
    document.getElementById("tet").innerHTML += " R$" + corpo.tether.brl
})

