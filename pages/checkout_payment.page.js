const BasePage = require('./base.page')

class CheckoutPaymentPage extends BasePage {
    get campo_nome_cartao() {
        return $('id=com.saucelabs.mydemoapp.android:id/nameET')
    }
    get campo_numero_cartao() {
        return $('id=com.saucelabs.mydemoapp.android:id/cardNumberET')
    }
    get campo_data_expiracao() {
        return $('id=com.saucelabs.mydemoapp.android:id/expirationDateET')
    }
    get campo_cvv() {
        return $('id=com.saucelabs.mydemoapp.android:id/securityCodeET')
    }
    get botao_salvar() {
        return $('~Saves payment info and launches screen to review checkout data')
    }
}

module.exports = new CheckoutPaymentPage()