// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('plant_carrot_crop', function() {
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
  it('plant_carrot_crop', async function() {
    // Test name: plant_carrot_crop
    // Step # | name | target | value
    // 1 | open | http://127.0.0.1:5501/bahay_cube.html | 
    await driver.get("http://127.0.0.1:5501/bahay_cube.html")
    // 2 | setWindowSize | 1294x1392 | 
    await driver.manage().window().setRect({ width: 1294, height: 1392 })
    // 3 | click | id=tile_id_10 | 
    await driver.findElement(By.id("tile_id_10")).click()
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | click | id=tile_id_10 | 
    await driver.findElement(By.id("tile_id_10")).click()
    // 6 | verifyElementPresent | css=.tilled | 
    {
      const elements = await driver.findElements(By.css(".tilled"))
      assert(elements.length)
    }
    // 7 | click | css=.plant_btn | 
    await driver.findElement(By.css(".plant_btn")).click()
    // 8 | click | xpath=//label[@id='carrot_crop'] | 
    await driver.findElement(By.xpath("//label[@id=\'carrot_crop\']")).click()
    // 9 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 10 | verifyElementPresent | css=.carrot_planted | 
    {
      const elements = await driver.findElements(By.css(".carrot_planted"))
      assert(elements.length)
    }
    // 11 | verifyText | css=.total_earnings_value | 75
    assert(await driver.findElement(By.css(".total_earnings_value")).getText() == "75")
  })
})