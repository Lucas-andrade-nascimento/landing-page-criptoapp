# ***2dCode***

### Projeto teve como foco tornar mais eficiente o acompanhamento do universo de criptoativos, consolidando as informações na palma da sua mão, através do nosso *CriptoApp*.

------------------------

_O projeto foi idealizado em **HTML**, **CSS** e **Bootstrap**._

Realizado em grupo pelos seguintes participantes:
* [Lucas Andrade](https://github.com/Lucas-andrade-nascimento)
* [Daniel Santos](https://github.com/danielfjs)
* [Gabriel Lúcio](https://github.com/Bieoool355)

## Acesse o nosso site e confira: [CriptoGama](https://lucas-andrade-nascimento.github.io/landing-page-criptoapp/)

### O figma ajudou bastante a termos "um norte" no quesito layout da nossa página
[Figma](https://www.figma.com/file/6aHp5yWLWxIpOHOWhHkJyP/Cripto-Gama?node-id=41733%3A754)

### Trabalhamos em equipe utilizando o fluxo Gitflow para alcançarmos este "norte" de forma eficiente
![Branchs](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Branchs.jpeg)

### Prezamos pela responsividade em todos os elementos da página
![Responsividade](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Responsividade.gif)
Utilizamos _Bootstrap_ na página inteira afim de agilizar o design e a responsividade em si. Houveram sim diversos ajustes através de _Media queries_, porém boa parte o _Bootstrap_ já deu conta.

### Através deste site conseguimos a API das cotações das principais criptos
* [Coingecko](https://www.coingecko.com/pt/api/documentation) - 
Dentre tantas opções que o _Coingecko_ oferece, escolhemos puxar e comparar somente o valor do dólar e do real das 3 criptos.
Tudo bem intuitivo.

### Consumimos a API utilizando o método _fetch_ e organizamos as informações nela contidas
![Consumo-API](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Consumo-API.PNG) - 
Como o método _[fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)_ retorna uma _[promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)_ e se essa 'promessa' der certo, ele é executada _.then_ e organiza e imprime as informações que nós direcionamos que apareçam na página. Se não, ela retorna um erro mas não comprometendo o andamento do código (pois ela é assincrona). Recomendamos utilizar o _catch_ pois, em caso de exceção ou erro, ele tomará alguma ação para contornar, no nosso caso não implementamos por falta de tempo, mas não é difícil de encontrar conteúdo na internet que te auxiliem no controle das APIs e suas nuances.

![Lista-de-cotacoes](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Lista-de-cotacoes.PNG)

### Implementamos o Iframe com a sede da CriptoGama
![Iframe](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Iframe.PNG)

### Também implementamos os Cards contendo detalhes interessantes sobre as moedas
![Cards](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Cards.gif)

### Outra implementação bacana foi o Carrossel
![Carrossel](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Carrossel.gif)

### Mais uma funcionalidade interessante é o redirecionamento dentro da página
![Redirecionamento](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Redirecionamento.gif)

### Veja também um pouco do nosso Trello, onde acompanhamos nossas atividades de perto
![Trello](https://github.com/Lucas-andrade-nascimento/2dCode/blob/main/img/documentacao/Trello.gif)

