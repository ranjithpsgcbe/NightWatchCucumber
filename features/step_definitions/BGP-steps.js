const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const { browser } = require('nightwatch-cucumber');

defineSupportCode(({ Given, Then, When }) => {
    Given(/^User navigate to BGP Page$/, () => {
        return client
            .url('https://public:Let$BeC001@bgp-qa.gds-gov.tech/saml/sso_stub')
            .waitForElementVisible('body', 1000)
            .maximizeWindow()
    })    
         
    Then(/^I click on the BGP User ID$/, () => {
    return client.click('select[name="SAMLart"]')
    .click('option:nth-child(30)')
      
    })
    
    When(/^I click on the login button$/, () => {
    return client.click('form:nth-child(6) > button')
})

Then(/^I click on the grand new button$/, () => {
    return client.waitForElementPresent('#grants > div:nth-child(2) > div > a:nth-child(2) > section > div > div.dashboard-action-text-wrapper > h4', 10000)
    .useCss().click('#grants > div:nth-child(2) > div > a:nth-child(2) > section > div > div.dashboard-action-text-wrapper > h4')
    .pause(5000)
})

Then(/^I click on the building & construction button$/, () => {
    return client.waitForElementPresent('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div:nth-child(2) > div:nth-child(1) > div > label > div > div', 10000)
    .useCss().click('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div:nth-child(2) > div:nth-child(1) > div > label > div > div')
    .pause(3000)
    .waitForElementPresent('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div:nth-child(2) > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > label > div > div', 10000)
    .useCss().click('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div:nth-child(2) > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > label > div > div')
    .pause(5000)
})

Then(/^I click on the select grand button$/, () => {
    return client.waitForElementPresent('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div > div:nth-child(2) > div > label > div > div', 10000)
    .useCss().click('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div > div:nth-child(2) > div > label > div > div')
    .pause(1000)
})

Then(/^I click on the devlop grand button$/, () => {
    return client.waitForElementPresent('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div > div:nth-child(1) > div > label > div > span', 10000)
    .useCss().click('#grant-wizard > div.bgp-applyquestion-taxonomy.col-sm-12 > div > div > div:nth-child(1) > div > label > div > span')
    .pause(5000)
})

Then(/^I click on the apply button$/, () => {
    return client.waitForElementPresent('#go-to-grant', 10000)
    .useCss().click('#go-to-grant')
    .pause(5000)
})

Then(/^I click on the proceed button$/, () => {
    return client.waitForElementPresent('#keyPage-form-button', 10000)
    .useCss().click('#keyPage-form-button')
    .pause(5000)
})

Then(/^I click on the eligible criteria$/, () => {
    return client.waitForElementPresent('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > div.form-horizontal.bgp-radio-group > div > div.controls.bgp-radio-text-format > label:nth-child(2) > span.radiobutton', 10000)
    .useCss().click('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > div.form-horizontal.bgp-radio-group > div > div.controls.bgp-radio-text-format > label:nth-child(2) > span.radiobutton')
    .pause(1000)
})


Then(/^verify the Next button and side menu should disable$/, () => {
    
    try{
    	return client.useCss().click('#next-btn')
    }   catch (err) {
    	console.log(err)
    } 
})

Then(/^user click on the  Yes button eligible critiria$/, () => {
    return client.waitForElementPresent('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > div.form-horizontal.bgp-radio-group > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton', 10000)
    .useCss().click('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > div.form-horizontal.bgp-radio-group > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton')
    .pause(5000)
})


Then(/^NEXT button should enable$/, () => {
    return client.expect.element('#next-btn').to.be.visible
   
})


Then(/^Side Menu should enable$/, () => {
    return client.expect.element('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._3KFk7ULnHvFKHfd0A-n1vE > div > div > ul > li:nth-child(3) > a > span').to.be.visible
    
})

Given(/^user click on the  No button eligible critiria$/, () => {
    return client.waitForElementPresent('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > div.form-horizontal.bgp-radio-group > div > div.controls.bgp-radio-text-format > label:nth-child(2) > span.radiobutton', 10000)
    .useCss().click('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > div.form-horizontal.bgp-radio-group > div > div.controls.bgp-radio-text-format > label:nth-child(2) > span.radiobutton')
    .pause(1000)
})


Then(/^I should see triggers warning message$/, () => {
    return client.expect.element('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > span > div > span').to.be.visible
   
})


Given(/^User click on the smart Advisor link should navigate$/, () => {
    return client.waitForElementPresent('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > span > div > span > a', 10000)
    .useCss().click('#js-app > div > div > div._2fwYxZEoTAa2o7rHUPuhRo > div._1lL64NI9hS4wNQ_IwC0kEf > div > div > div:nth-child(1) > span > div > span > a')
    .pause(1000)
})





})