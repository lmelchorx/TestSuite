const { utils } = require('mocha');
const modelPage = require('../Pages/modelPage');
require('dotenv').config();
describe('TestSuite', function(){
    this.timeout(50000);
   
    beforeEach(function(){

    });
    it('add new user', async function(){

        await modelPage.go_to_url(process.env.URL);
        await modelPage.enterTextById("Username", process.env.USER_ID);
        await modelPage.enterTextById("Password", process.env.PASSWORD_ID);
        await modelPage.clickByClassName("btn btn-primary");
        await modelPage.findElement("employeesTable");
        await modelPage.clickById("add");
        await modelPage.enterTextById("firstName", "mark");
        await modelPage.enterTextById("lastName", "hoppus");
        await modelPage.enterTextById("dependants", "4");
        await modelPage.clickById("addEmployee");
        await modelPage.checkDeductions("mark","4");
        })

        it('modify user', async function(){
            await modelPage.modifyUser("mark", "tom", "delonge" , "6");
            })

        it('delete user', async function(){
            await modelPage.deleteUser("tom");
            await modelPage.closeBrowser();
            })
})