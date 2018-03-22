var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();




function ingresar_al_sistema(){
    driver.get("https://swebse32.univalle.edu.co/sra/");
    //Se espera hasta que aparezca la alerta.
    driver.wait(webdriver.until.alertIsPresent()).then(()=> {
        driver.switchTo().alert().then(function(alert){
            //se acepta la alerta
            alert.accept();

            //Al momento en que se acepte la alerta se capturan los elementos de 'login' y 'contraseña'
            var login = driver.wait(until.elementLocated({xpath: "/html/body/table/tbody/tr/td/table/tbody/tr[2]/td/form/table/tbody/tr[2]/td[2]/input"}),
                10000, 'Could not locate the frame element within the time specified');

            var pass =driver.wait(until.elementLocated({xpath: "/html/body/table/tbody/tr/td/table/tbody/tr[2]/td/form/table/tbody/tr[3]/td[2]/input"}),
                10000, 'Could not locate the frame element within the time specified');


            //Se digitan las credenciales y al final ya se presiona el botón de ingresar
            var credenciales = [login, pass];
            Promise.all(credenciales).then(resultado =>{

                resultado[0].sendKeys("consulta_ases");
                resultado[1].sendKeys("3str4t3g144s3s2018");
                driver.findElement(By.name("boton")).click();

            });

        });
        
    });

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ingresar_al_sistema_rapido(){
    driver.get("https://swebse32.univalle.edu.co/sra/");
    //Se espera hasta que aparezca la alerta.
    driver.wait(webdriver.until.alertIsPresent()).then(()=> {
        driver.switchTo().alert().then(function(alert){
            //se acepta la alerta
            alert.accept();
            //sleep(10000);

            var login = driver.findElement({xpath: "/html/body/table/tbody/tr/td/table/tbody/tr[2]/td/form/table/tbody/tr[2]/td[2]/input"});
            var pass = driver.findElement({xpath: "/html/body/table/tbody/tr/td/table/tbody/tr[2]/td/form/table/tbody/tr[3]/td[2]/input"});

            var credenciales = [login, pass];
            Promise.all(credenciales).then(resultado =>{

                resultado[0].sendKeys("consulta_ases");
                resultado[1].sendKeys("3str4t3g144s3s2018");
                driver.findElement(By.name("boton")).click();

            });


            //Esperamos a que cargue la página y se presiona en la imágen de "consular carpeta académica de estudiante"
            sleep(1000).then(()=>{
                driver.findElement({xpath: "/html/body/table/tbody/tr[2]/td/table[1]/tbody/tr/td[2]/table/tbody/tr[2]/td/form/input[2]"})
                .click();
            })

            //Esperamos a que cargue la página y aparezca el buscador 
            sleep(1500).then(()=>{
                buscar_estudiante()
            })
            
            
        });

        
        
    });
}

function buscar_estudiante(){

    var barra_busqueda = driver.findElement({xpath: "/html/body/table/tbody/tr[2]/td/table/tbody/tr/td[2]/span/form/table/tbody/tr/td/table/tbody/tr[2]/td[2]/input[3]"});
    barra_busqueda.sendKeys("hola");

}


ingresar_al_sistema_rapido()


