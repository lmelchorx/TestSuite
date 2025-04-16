const {Key} = require('selenium-webdriver');
const { until, By } = require('selenium-webdriver');
var BasePage = require ('./mainTools');

class loginPage extends BasePage{

    async validateLogin(id){
        await this.go_to_url(theURL);
    }
}
module.exports = new loginPage();