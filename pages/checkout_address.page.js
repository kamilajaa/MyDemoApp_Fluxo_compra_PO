const BasePage = require('./base.page')

class CheckoutAddressPage extends BasePage {
    get campo_nome_completo() {
        return $('id=com.saucelabs.mydemoapp.android:id/fullNameET')
    }
    get campo_endereco1() {
        return $('id=com.saucelabs.mydemoapp.android:id/address1ET')
    }
    get campo_endereco2() {
        return $('id=com.saucelabs.mydemoapp.android:id/address2ET')
    }
    get campo_cidade() {
        return $('id=com.saucelabs.mydemoapp.android:id/cityET')
    }
    get campo_estado() {
        return $('id=com.saucelabs.mydemoapp.android:id/stateET')
    }
    get campo_cep() {
        return $('id=com.saucelabs.mydemoapp.android:id/zipET')
    }
    get campo_pais() {
        return $('id=com.saucelabs.mydemoapp.android:id/countryET')
    }
    get botao_salvar() {
        return $('~Saves user info for checkout')
    }
}

module.exports = new CheckoutAddressPage()