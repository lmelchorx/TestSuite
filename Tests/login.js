const { utils } = require('mocha');
const loginpage = require('../Pages/loginpage');
const { Driver } = require('selenium-webdriver/chrome');
require('dotenv').config();
describe('TestSuite', function(){
    this.timeout(50000);
   
    beforeEach(function(){

    });

    it('userLogin', async function(){
        await loginpage.go_to_url(process.env.URL);
        await loginpage.enterTextById("Username", process.env.USER_ID);
        await loginpage.enterTextById("Password", process.env.PASSWORD_ID);
        await loginpage.clickByClassName("btn btn-primary");
        await loginpage.findElement("employeesTable");
        await loginpage.clickByClassName("nav justify-content-end");
        
    })
    it('user login with empty credentials', async function(){

        await loginpage.go_to_url(process.env.URL);
        await loginpage.enterTextById("Username", "");
        await loginpage.enterTextById("Password", "");
        await loginpage.clickByClassName("btn btn-primary");
        await loginpage.findElementbyClassN("text-danger validation-summary-errors");
            
        })
    it('user login with invalid credentials', async function(){

        await loginpage.go_to_url(process.env.URL);
        await loginpage.enterTextById("Username", "user");
        await loginpage.enterTextById("Password", "pass123");
        await loginpage.clickByClassName("btn btn-primary");
        await loginpage.findElement("text-danger validation-summary-errors");
            
        })

        it('banner is redirecting to login page if user is not logged in', async function(){

            await loginpage.go_to_url(process.env.URL);
            await loginpage.clickByClassName("navbar-brand");
            await loginpage.validate_url(process.env.URL);                
            })
    afterEach(async function(){
    });

})