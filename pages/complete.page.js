const BasePage = require('./base.page')

class CompletePage extends BasePage {
    get mensagem_sucesso() {
        return $('id=com.saucelabs.mydemoapp.android:id/completeTV')
    }
}

module.exports = new CompletePage()