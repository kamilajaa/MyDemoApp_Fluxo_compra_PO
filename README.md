# MyDemoApp - Testes de Fluxo de Compra 🛒

![Mobile Tests](https://github.com/kamilajaa/MyDemoApp_Fluxo_compra_PO/actions/workflows/mobile-tests.yml/badge.svg)

> Projeto de automação de testes mobile usando WebdriverIO + Appium + Cucumber

## O que esse projeto faz?

Esse projeto testa o fluxo completo de compra do app **MyDemoApp Android**. Ele simula um usuário real escolhendo produtos, colocando no carrinho, fazendo login, preenchendo endereço, pagamento e finalizando a compra.

## Tecnologias usadas

- **WebdriverIO** - framework de automação
- **Appium** - pra controlar o celular/emulador
- **Cucumber** - pra escrever os testes em linguagem natural (Given/When/Then)
- **Page Object** - padrão que separa os seletores da lógica dos testes
- **Node.js** - rodar tudo

## Estrutura de pastas

```
├── config/           → Configurações (local, Sauce Labs, etc.)
├── features/         → Cenários BDD (.feature) + Steps
│   ├── comprar_produto.feature
│   └── step-definitions/
│       └── comprar_produto.steps.js
├── pages/            → Page Objects (onde ficam os seletores do app)
│   ├── base.page.js
│   ├── products.page.js
│   ├── cart.page.js
│   ├── login.page.js
│   ├── checkout_address.page.js
│   ├── checkout_payment.page.js
│   ├── checkout_review.page.js
│   └── complete.page.js
├── wdio.conf.js      → Config principal do WebdriverIO
└── package.json      → Dependências do projeto
```

## Como rodar os testes

### 1. Pré-requisitos

- Node.js instalado
- Appium instalado (`npm install -g appium`)
- Emulador Android aberto OU celular conectado no USB com debug ativado
- App MyDemoApp instalado no device

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar os testes

```bash
npm run wdio
```

Isso vai:
1. Subir o Appium automaticamente
2. Conectar no device/emulador
3. Executar o cenário de compra
4. Mostrar o resultado no terminal

## O que cada arquivo faz?

| Arquivo | Função |
|---------|--------|
| `comprar_produto.feature` | Cenário escrito em Gherkin (linguagem natural) |
| `comprar_produto.steps.js` | Código JavaScript que executa cada step do cenário |
| `*.page.js` | Onde ficam os seletores (id, xpath, etc.) de cada tela do app |
| `base.page.js` | Classe base com o método de scroll pra cima |
| `wdio.conf.js` | Configura o WebdriverIO pra rodar com Cucumber e Appium |

## Dica importante 💡

Se der erro de **"Cannot find module"**, verifica se o nome do arquivo no `import` está igual ao nome real do arquivo na pasta `pages/` (com ou sem `.js` no final do import).

## Autor

Feito durante estudos de automação mobile com Page Object + BDD para o curso do Iterasys.
