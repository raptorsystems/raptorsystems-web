const { firefox } = require('playwright')

describe('TEST TEST', () => {
  it('Should type properly', async () => {
    const browser = await firefox.launch({ headless: false, slowMo: 1000 })
    try {
      const page = await browser.newPage()
      await page.goto('localhost:3000')
      await (await page.$('id=input-100')).scrollIntoViewIfNeeded()
      await page.click('#input-100')
      const nameText = 'MI NOMBRE'
      await page.type('#input-100', nameText)

      const nameInputValue = await page.$eval('id=input-100', (el) => el.value)
      expect(nameInputValue).toBe(nameText)
      await page.click('#input-106')
      await page.type('#input-106', 'mi correo')
      const mailInputValue = await page.$eval('id=input-106', (el) => el.value)
      expect(mailInputValue).toBe('correo@correo.com')
    } finally {
      await browser.close()
    }
  }, 500000)
})
