# conversor-de-moeda | Convert Money.

Essa aplicação converte o valor informado pelo usuário em três opções de moedas que pode ser indicada em uma lista supensa pelo próprio usuário.

As opções são de:

* Real x Dólar,
* Real x Euro,
* Real x BitCoin.

Para essa aplicação não utilizei framework para o front-end, somente HTML, CSS e JavaScript.

Foi utilizado o fetch, função nativa do JavaScript para consumir a API do AwesomeAPI e retornar um objeto json com a cotação (na alta - high) da moeda desejada atualizando dinamicamente a página conforme cotação atual retornada pela API.

Conforme seleciona a moeda que deseja converter, ao submeter a conversão a bandeira também se altera. Recursos javaScript.

Incrementei a função de tratamento do valor informado pelo usuário para amenizar erros na digitação inputado pelo mesmo.

A aplicação tem como finalidade aplicar conceitos acadêmico visando a prática em cenários cotidiano do dia a dia.
