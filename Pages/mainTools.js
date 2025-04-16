const {By} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const assert = require('assert');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class mainTools{
    constructor(){
        global.driver = driver;
    }
    async go_to_url(theURL){
        await driver.get(theURL);
    }
    async validate_url(expected){
    assert.deepEqual((await driver.getCurrentUrl()) , expected);
    }
    async enterTextById(Id, searchText){
        await driver.findElement(By.id(Id)).sendKeys(searchText);
    }
    async clickById(id){
        await driver.findElement(By.id(id)).click();
    }
    async clickByClassName(id){
        await driver.findElement(By.className(id)).click();
    }
    async findElement(id){
         await driver.findElement(By.id(id));
    }
    async findElementbyClassN(id){
        await driver.findElement(By.className(id));
   }

    async user(id){
        await driver.findElement(By.id(id));
   }
    async closeBrowser(){
        await driver.quit();
    }
    async findRow(userName){
        await driver.wait(webdriver.until.elementLocated(By.xpath(`//tr[td[contains(text(), '${userName}')]]`), 5000));
    }

    async deleteUser(userName){
       const userRow =  await driver.findElement(By.xpath(`//tr[td[contains(text(), '${userName}')]]`));
       const userID = await userRow.findElement(By.xpath('./td[1]')).getText();
       await userRow.findElement(By.className('fas fa-times')).click();
       await driver.findElement(By.id("deleteEmployee")).click();
       webdriver.until.stalenessOf(userRow.findElement(By.xpath(`//tr[td[contains(text(), '${userID}')]]`)),
       5000);
    }
    async modifyUser(userName, newName, newLastName, newDependants){
        const userRow =  await driver.findElement(By.xpath(`//tr[td[contains(text(), '${userName}')]]`));
        await userRow.findElement(By.className('fas fa-edit')).click();
        await driver.findElement(By.id('firstName')).clear();
        await driver.findElement(By.id('firstName')).sendKeys(newName);
        await driver.findElement(By.id('lastName')).clear();
        await driver.findElement(By.id('lastName')).sendKeys(newLastName);
        await driver.findElement(By.id('dependants')).clear();
        await driver.findElement(By.id('dependants')).sendKeys(newDependants);
        await driver.findElement(By.id("updateEmployee")).click();
        webdriver.until.stalenessOf(userRow.findElement(By.xpath(`//tr[td[contains(text(), '${newName}')]]`)),
        5000);
     }
}


module.exports = mainTools;