const BasePage = require('./base.page')

class LoginPage extends BasePage {
    get campo_usuario() {
        return $('id=com.saucelabs.mydemoapp.android:id/nameET')
    }
    get campo_senha() {
        return $('id=com.saucelabs.mydemoapp.android:id/passwordET')
    }
    get botao_login() {
        return $('~Tap to login with given credentials')
    }
}

module.exports = new LoginPage()