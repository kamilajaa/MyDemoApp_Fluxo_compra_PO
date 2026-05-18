const BasePage = require('./base.page')

class CheckoutReviewPage extends BasePage {
    get produto_backpack() {
        return $('android=new UiSelector().text("Sauce Labs Backpack")')
    }
    get produto_backpack_yellow() {
        return $('android=new UiSelector().text("Sauce Labs Backpack (yellow)")')
    }
    get titulo_checkout() {
        return $('id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV')
    }
    get botao_completar() {
        return $('~Completes the process of checkout')
    }
}

module.exports = new CheckoutReviewPage()