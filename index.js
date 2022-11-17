const puppeteer = require('puppeteer') // requiring puppeteer
const fs = require('fs') // requiring the file system node module

const scrap = async () => {
   const browser = await puppeteer.launch({ headless: true }) //browser initiate
   const page = await browser.newPage() // opening a new blank page
   await page.goto('https://en.wikipedia.org/wiki/List_of_mango_cultivars', {
      waitUntil: 'domcontentloaded',
   }) // navigate to url and wait until page loads completely

   const recordList = await page.$$eval(
      'div#mw-content-text > div.mw-parser-output > table > tbody > tr',
      (trows) => {
         let rowList = []
         trows.forEach((row) => {
            let record = { name: '', image: '', origin: '', notes: '' }

            if (row.querySelector('a > img')) {
               // Check if row has an image tag, if so assign it to record.image
               record.image = row.querySelector('a > img').src
            }

            const tdList = Array.from(row.querySelectorAll('td'), (column) => column.innerText)

            record.name = tdList[0]

            record.origin = tdList[2]
            record.notes = tdList[3]
            rowList.push(record)
         })

         return rowList
      }
   )

   await page.screenshot({ path: 'screenshots/wikipedia.png', fullPage: true }) //screenshot of page, omitting fullPage will screenshot a photo of the default size of the chromium browser.
   browser.close()

   fs.writeFile('mango.json', JSON.stringify(recordList, null, 2), (err) => {
      if (err) {
         console.log(err)
      } else {
         console.log('Saved Successfully!')
      }
   })
}

scrap()
