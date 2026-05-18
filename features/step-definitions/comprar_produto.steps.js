import { Given, When, Then } from "@wdio/cucumber-framework"
import ProductPage from "../../pages/products.page"
import ProductDetailPage from "../../pages/product_details.page"
import CartPage from "../../pages/cart.page"
import CatalogPage from "../../pages/catalog.page"
import LoginPage from "../../pages/login.page"
import CheckoutAddressPage from "../../pages/checkout_address.page"
import CheckoutPaymentPage from "../../pages/checkout_payment.page"
import CheckoutReviewPage from "../../pages/checkout_review.page"
import CompletePage from "../../pages/complete.page"

Given("que estou na tela de produtos", async () => {
    await driver.pause(1000);
})

When("na {string} do produto seleciono o produto na posição {string}", async (rolagem, index) => {
    await ProductPage.arrastaParaCima(rolagem)
    await ProductPage.clicar_no_produto(index)
})

When("na {string} adiciono mais um produto na posição {string}", async (rolagem, index) => {
    await ProductPage.arrastaParaCima(rolagem)
    await ProductPage.clicar_no_produto(index)
})

When("adiciono o produto no carrinho", async () => {
    await ProductDetailPage.arrastaParaCima(1)
    await ProductDetailPage.botao_adicionar_no_carrinho.click()
})

When("retorno ao catalogo", async () => {
    await CatalogPage.icone_catalog.click()
    await CatalogPage.botao_retornar_catalog.click()
    await driver.pause(1000);
})

When("clico no carrinho", async () => {
    await ProductDetailPage.icone_carrinho.click()
})

Then("verifico o {string} e o {string}", async (nome, preco) => {
    await ProductDetailPage.titulo_produto.waitForDisplayed({ timeout: 5000 });
    await expect(ProductDetailPage.titulo_produto).toHaveText(nome)
    await expect(ProductDetailPage.preco_produto).toHaveText(preco)
})

Then("exibe o numero 2 no icone do carrinho", async () => {
    await expect(ProductDetailPage.icone_carrinho).toHaveText('2')
})

Then("verifico o {string} no carrinho", async (precoFinal) => {
    await CartPage.preco_produto.waitForDisplayed({ timeout: 5000 });
    await expect(CartPage.preco_produto).toHaveText(precoFinal)
})

When("clico em checkout", async () => {
    await CartPage.botao_checkout.click()
})

When("faco login com {string} e {string}", async (usuario, senha) => {
    await LoginPage.campo_usuario.waitForDisplayed({ timeout: 5000 })
    await LoginPage.campo_usuario.addValue(usuario)
    await LoginPage.campo_senha.addValue(senha)
    await LoginPage.botao_login.click()
})

When("preencho o endereco com {string}, {string}, {string}, {string}, {string}, {string}, {string}", async (nome, end1, end2, cidade, estado, cep, pais) => {
    await CheckoutAddressPage.campo_nome_completo.waitForDisplayed({ timeout: 5000 })
    await CheckoutAddressPage.campo_nome_completo.addValue(nome)
    await CheckoutAddressPage.campo_endereco1.addValue(end1)
    await CheckoutAddressPage.campo_endereco2.addValue(end2)
    await CheckoutAddressPage.campo_cidade.addValue(cidade)
    await CheckoutAddressPage.campo_estado.addValue(estado)
    await CheckoutAddressPage.campo_cep.addValue(cep)
    await CheckoutAddressPage.campo_pais.addValue(pais)
    await CheckoutAddressPage.botao_salvar.click()
})

When("preencho o pagamento com {string}, {string}, {string}, {string}", async (nome, numero, data, cvv) => {
    await CheckoutPaymentPage.campo_nome_cartao.waitForDisplayed({ timeout: 5000 })
    await CheckoutPaymentPage.campo_nome_cartao.addValue(nome)
    await CheckoutPaymentPage.campo_numero_cartao.addValue(numero)
    await CheckoutPaymentPage.campo_data_expiracao.addValue(data)
    await CheckoutPaymentPage.campo_cvv.addValue(cvv)
    await CheckoutPaymentPage.botao_salvar.click()
})

Then("verifico os produtos na tela de review", async () => {
    await CheckoutReviewPage.produto_backpack.waitForDisplayed({ timeout: 5000 })
    await expect(CheckoutReviewPage.produto_backpack).toBeDisplayed()
    await expect(CheckoutReviewPage.produto_backpack_yellow).toBeDisplayed()
    await expect(CheckoutReviewPage.titulo_checkout).toBeDisplayed()
})

When("completo o checkout", async () => {
    await CheckoutReviewPage.botao_completar.click()
})

Then("vejo a mensagem de sucesso", async () => {
    await CompletePage.mensagem_sucesso.waitForDisplayed({ timeout: 10000 })
    await expect(CompletePage.mensagem_sucesso).toBeDisplayed()
})