var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('firefox').build();
let query_element;
let submit_btn_element;

driver.get('http://www.google.com').then(function() {
  return driver.getTitle();
}).then(function(title) {
  console.log('Page title is: ' + title);
  return driver.findElement(webdriver.By.name('q'));
}).then(function(ele){
  query_element = ele;
  return query_element.sendKeys('Cheese!');
}
).then(function(){
  return driver.findElement(webdriver.By.name('btnK'));
}
)
.then(function(submitbtnele){
  submit_btn_element = submitbtnele;
  return driver.wait(webdriver.until.elementIsVisible(submit_btn_element), 10000);
}
).then(function () {
  return submit_btn_element.click();
})
.then(function(){
  return driver.getTitle();
}
)
.then(function(title){
  console.log('Page title is: ' + title);
  driver.quit();
}
);

// const {Builder, By, Key, until} = require('selenium-webdriver');

// (async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();
