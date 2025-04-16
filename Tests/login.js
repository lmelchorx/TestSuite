const { utils } = require('mocha');
const modelPage = require('../Pages/modelPage');
const { Driver } = require('selenium-webdriver/chrome');
require('dotenv').config();
describe('login tests', function(){
    this.timeout(50000);
   
    beforeEach(function(){

    });

    it('userLogin', async function(){
        await modelPage.go_to_url(process.env.URL);
        await modelPage.enterTextById("Username", process.env.USER_ID);
        await modelPage.enterTextById("Password", process.env.PASSWORD_ID);
        await modelPage.clickByClassName("btn btn-primary");
        await modelPage.findElement("employeesTable");
        await modelPage.clickByClassName("nav justify-content-end");
        
    })
    it('user login with empty credentials', async function(){

        await modelPage.go_to_url(process.env.URL);
        await modelPage.enterTextById("Username", "");
        await modelPage.enterTextById("Password", "");
        await modelPage.clickByClassName("btn btn-primary");
        await modelPage.findElementbyClassN("text-danger validation-summary-errors");
            
        })
    it('user login with invalid credentials', async function(){

        await modelPage.go_to_url(process.env.URL);
        await modelPage.enterTextById("Username", "user");
        await modelPage.enterTextById("Password", "pass123");
        await modelPage.clickByClassName("btn btn-primary");
        await modelPage.findElement("text-danger validation-summary-errors");
            
        })

        it('banner is redirecting to login page if user is not logged in', async function(){

            await modelPage.go_to_url(process.env.URL);
            await modelPage.clickByClassName("navbar-brand");
            await modelPage.validate_url(process.env.URL);                
            })
    afterEach(async function(){
    });

})