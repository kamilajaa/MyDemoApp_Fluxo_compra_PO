Feature: Fluxo de compra

Scenario Outline: comprar um produto com sucesso
Given que estou na tela de produtos
When na "<rolagem1>" do produto seleciono o produto na posição "<index1>"
Then verifico o "<produto1>" e o "<preco1>"
When adiciono o produto no carrinho
When retorno ao catalogo
When na "<rolagem2>" adiciono mais um produto na posição "<index2>"
Then verifico o "<produto2>" e o "<preco2>"
When adiciono o produto no carrinho
Then exibe o numero 2 no icone do carrinho
When clico no carrinho
Then verifico o "<precoFinal>" no carrinho
When clico em checkout
When faco login com "JoaoSilva" e "Teste!123"
When preencho o endereco com "João Silva", "Rua Juquinha", "Apto 10", "São Paulo", "SP", "01001000", "Brazil"
When preencho o pagamento com "Joao Silva", "5252525252525252", "01/31", "101"
Then verifico os produtos na tela de review
When completo o checkout
Then vejo a mensagem de sucesso

Examples:
|produto1             | preco1    |rolagem1|index1|produto2                     |preco2     |rolagem2|index2|precoFinal|
|Sauce Labs Backpack   |$ 29.99    |0       |0     |Sauce Labs Backpack (yellow) |$ 29.99    |1       |1     |$ 59.98   |