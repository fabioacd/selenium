import { Capabilities } from "selenium-webdriver";

var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://campusvirtual.univalle.edu.co/moodle/");

driver.findElement({xpath: "/html/body/header/nav/div/div/div[2]/div[2]/div/button"}).click();

//var size = driver.findElements(By.tagName("iframe"));
//console.log(size);

//Se escribe el username
var username = driver.wait(until.elementLocated(By.id('username')), 20000, 'Could not locate the frame element within the time specified');
//username.sendKeys("sistemas1008");

//Se escribe la contraseña
var pass = driver.wait(until.elementLocated(By.id('password')), 20000, 'Could not locate the frame element within the time specified');
//pass.sendKeys("pilos%2015");

var arr = [username,pass];

Promise.all(arr).then(resultado => {
    resultado[0].sendKeys("sistemas1008");
    resultado[1].sendKeys("pilos%2015");
    //Se presiona el botón acceder
    //driver.wait(until.elementLocated(By.id('loginbtn')), 10000, 'Could not locate the frame element within the time specified').then(ele=>{
    //ele.click();
    //});
    driver.findElement(By.id('loginbtn')).click();
});


driver.get('https://campusvirtual.univalle.edu.co/moodle/blocks/ases/view/ases_report.php?courseid=25643&instanceid=450299').then(elemento=>{

    driver.findElement(By.id(""));

});

driver.wait(until.elementLocated(By.id('/html/body/div[4]/div/section/div/div[2]/div[2]/div/div/div[2]/label/input')), 20000, 
     'Could not locate the frame element within the time specified').then(elem =>{
         elem.sendKeys("1673784");
     });
     
     

//Cod: 1673784 ; Nombre: Maria Eugenia Trochez Correa