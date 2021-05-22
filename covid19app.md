## COVID-19 Dashboard

The [dashboard](https://covid19basu.herokuapp.com/) is hosted for free on Heroku. You may experience slow initial loading times because of [this](https://stackoverflow.com/questions/2606190/why-are-my-basic-heroku-apps-taking-two-seconds-to-load). It is best viewed on a desktop using Google Chrome. You may notice that it is not adjusted for browser resizing.

There are several newspapers in Germany that are publishing COVID-19 data for Germany on their website, but this data is mostly taken from official sources like Robert Koch Institute (RKI), so it is not as up to date and undercounts the number of cases. Here is a non-exhaustive list of newspapers that are relying on other sources in addition to RKI:


- Der Tagesspiegel
  - [Coronavirus-Karte: Deutschlandweite Fallzahlen in Echtzeit](https://interaktiv.tagesspiegel.de/lab/karte-sars-cov-2-in-deutschland-landkreise/)
 
 
- Die Zeit  
  - [Coronavirus-Karte für Deutschland: Coronavirus in Deutschland und der Welt – alle Zahlen im Überblick]( 
      https://www.zeit.de/wissen/gesundheit/coronavirus-echtzeit-karte-deutschland-landkreise-infektionen-ausbreitung)
  
  
- Berliner Morgenpost
  - [Corona-Zahlen: Karte zeigt aktuelle Fälle in Deutschland und der Welt](https://interaktiv.morgenpost.de/corona-virus-karte-infektionen-deutschland-weltweit/)
  
Of all the COVID-19 dashboards out there in the world, I found Die Zeit's dashboard the most visually appealing. And I wanted to recreate that. They built their dashboard using [Datawrapper](https://www.datawrapper.de/). 

I used [Plotly Dash](https://plotly.com/dash/) and [Dash Leaflet](https://dash-leaflet.herokuapp.com/). Here is what I did:

- I got the data from Die Zeit's and RKI's website in GeoJSON format. I converted it into a clean geopandas dataframe with desired columns, so that I can easily manipulate it. The geographic data obtained from RKI is of very high-quality, which is not really needed for our visualization, so I simplified it using [Mapshaper]( https://mapshaper.org/). To see exactly what I did, read my code [here](https://github.com/parbasu/covid19appcode/blob/main/app_create_data.ipynb).

- My first approach was to use the [choropleth maps](https://plotly.com/python/choropleth-maps/) Plolty offers. But apparently, it is slow and takes, at the very least, two seconds to load, even after I have simplified the GeoJSON file. Luckily, I came across [Dash Leaflet](https://dash-leaflet.herokuapp.com/), which was realeased last year. It is a wrapper of Leaflet, a quite popular JavaScript library. I highly recommend it for making choropleth maps.

- The application was made using [Dash](https://dash.plotly.com/introduction), which is a web application framework that allows you write pure python code which then gets translated to HTML, CSS and JavaScript, the basic building blocks of any interactive website.

- Both Plotly Dash and Dash Leaflet offer quite a lot of custom components, but there is only so much you can do with them. You need to tweak them to get the exact look and functionality you want. So you need to override the default CSS and use a bit of JavaScript. For example, the vertical moving tooltip that appears when you hover over a graph is not available in Plotly, so I had to create my own. In Leaflet, there is no direct way to add text labels at specific geographic locations, so you have to override the default Leaflet tooltip style. To find an element's id and class attribute, I used inspect element on Chrome.

- My entire code for the app can be found [here](https://github.com/parbasu/covid19appcode/blob/main/app.py). The other data files, including custom CSS and JavaScript can be found [here](https://github.com/parbasu/covid19data). The code can be considerably shortened. But I don't want to at this point.

Things that remain to be done but I want to focus on other stuff for now:

- *Select district* dropdown menu which takes HTML elements as label values. The [Dash dropdown component](https://dash.plotly.com/dash-core-components/dropdown) only allows string values as option. Suppose I want something like <span style = 'color: black;font-weight:900;'>Berlin</span> <small style = 'color: red;'>1,430</small>. Then this is not possible, but with JavaScript it is. 

- A line joining the geographic center of a district and its name displayed on top of the right-hand column. So every time on the map you click on a district, this line appears. I have already written [code](https://github.com/parbasu/covid19appcode/blob/main/javascript_canvas.ipynb) for this but it's glitchy and runs slow on Heroku. Notice that I used the [visdcc component](https://github.com/jimmybow/visdcc) to run JavaScript as part of Dash callbacks. 

- This unicode character ⭡ (up arrow) is not being rendered on some browsers. The fix is simply to use pure CSS (see [this](https://stackoverflow.com/questions/18816486/how-can-i-make-a-pointy-arrow-with-a-div-in-css)). But I need to restructure some code.

- Make the app faster and responsive . This requires cleaning and restructuring the code. 


## Important sources of COVID-19 data for Germany

- [COVID-19 Datenhub](https://npgeo-corona-npgeo-de.hub.arcgis.com/). It contains the following important data files:
  
  - RKI Corona Bundesländer
  - RKI Corona Landkreise
  - DIVI-Intensivregister auf Landkreisebene
  - RKI Key Data
  - RKI Altersgruppen
  - RKI COVID19 
  
- [Landesamt für Gesundheit und Soziales (LaGeSo) Berlin](https://www.berlin.de/lageso/gesundheit/infektionsepidemiologie-infektionsschutz/corona/) and other state offices.
  
- [GeoHealth Center Bonn](https://www.uni-bonn.de/neues/daten-zum-coronavirus-fuer-laien-und-wissenschaftler-verfuegbar)

- Crowdsourced data: [Risklayer](http://www.risklayer-explorer.com/event/100/detail). The data is available in the form of Google Sheets.
 

 
