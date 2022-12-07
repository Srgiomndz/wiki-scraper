# wiki-scraper

I created this small scraping script so that I had a larger amount of data to serve in my mango-api! While this only works for a specific wikipedia page it serves as a boilerplate for Puppeteer and can easily be built upon or adapted to your needs.


name, image, origin, and notes are gathered for each mango in the list and exported to a JSON file. A jpg of the webpage that was scraped will also be saved to your system. 


This is the resulting JSON structure: 

``` yaml
{
    "name": "Chaunsa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chaunsa.JPG/120px-Chaunsa.JPG",
    "origin": "India, Pakistan",
    "notes": "Chaunsa (also referred to as 'Chausa') is a pale yellow, slightly green succulent variety of mango when ripe. Closer to its ripening, the mango skin will be soft to touch and will appear wrinkly. Chaunsa is harvested in the summer months (June–September)."
}
```



## How It's Made:

**Tech used:** Node.js, Puppeteer



## Optimizations

The photo url that is collected with this script is not a link to the largest photo available from wikipedia. My next step to imporve this script is to make sure that the largest and highest resolution photo is gathered.



## Lessons Learned:



