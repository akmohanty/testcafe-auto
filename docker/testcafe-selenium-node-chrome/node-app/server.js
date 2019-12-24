'use strict';

const express = require('express');
const PORT = 3002;
var app = express();
const { Builder, By, until } = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const bodyParser = require('body-parser');
app.use(bodyParser());

// const screen = {
//     width: 640,
//     height: 480
// };

app.get('/', (req, res) => res.send('Ready!'))

app.post('/', (req, res) => {
    console.dir(req.body.url);
    (async function example() {
        let driver = await new Builder().forBrowser('chrome')
            .setChromeOptions(new chrome.Options()
                // .headless()
                // .windowSize(screen)
            )
            .build();
        driver.manage().window().maximize();
        try {
            await driver.get(req.body.url);
            let testcafeDisconnected = await driver.wait(until.elementLocated(By.xpath("//span[text()='DISCONNECTED']")));

            console.log('Test ended successfully');
            res.send('Test ended successfully');
        }
        catch (e) {
            console.error(e);
            res.send(e);
        } finally {
            await driver.quit();
        }
    })();
});

app.listen(PORT, () => console.log(`Remote Device Container app listening on port ${PORT}!`))