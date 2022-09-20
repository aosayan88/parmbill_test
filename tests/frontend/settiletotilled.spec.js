// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('set_tile_to_tilled', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('set_tile_to_tilled', async function() {
    // Test name: set_tile_to_tilled
    // Step # | name | target | value
    // 1 | open | http://127.0.0.1:5501/bahay_cube.html | 
    await driver.get("http://127.0.0.1:5501/bahay_cube.html")
    // 2 | setWindowSize | 1294x1392 | 
    await driver.manage().window().setRect({ width: 1294, height: 1392 })
    // 3 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 6 | verifyElementPresent | css=.tilled | 
    {
      const elements = await driver.findElements(By.css(".tilled"))
      assert(elements.length)
    }
  })
})