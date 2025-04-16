const { utils } = require('mocha');
const loginpage = require('../Pages/loginpage');
require('dotenv').config();
describe('TestSuite', function(){
    this.timeout(50000);
   
    beforeEach(function(){

    });
    it('add new user', async function(){

        await loginpage.go_to_url(process.env.URL);
        await loginpage.enterTextById("Username", process.env.USER_ID);
        await loginpage.enterTextById("Password", process.env.PASSWORD_ID);
        await loginpage.clickByClassName("btn btn-primary");
        await loginpage.findElement("employeesTable");
        await loginpage.clickById("add");
        await loginpage.enterTextById("firstName", "mark");
        await loginpage.enterTextById("lastName", "hoppus");
        await loginpage.enterTextById("dependants", "4");
        await loginpage.clickById("addEmployee");
        })

        it('modify user', async function(){
            await loginpage.modifyUser("mark", "tom", "delonge" , "6");
            })

        it('delete user', async function(){
            await loginpage.deleteUser("tom");
            })
})