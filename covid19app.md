## COVID-19 Dashboard

The [dashboard](https://covid19basu.herokuapp.com/) is hosted for free on Heroku. You may experience slow initial loading times.

There are several newspapers in Germany that are publishing COVID-19 data for Germany on their website, but this data is mostly taken from official sources like Robert Koch Institute (RKI), so it is not as up to date and undercounts the number of cases. Here is a non-exhaustive list of newspapers that are relying on other sources in addition to RKI:


- Der Tagesspiegel
  - [Coronavirus-Karte: Deutschlandweite Fallzahlen in Echtzeit](https://interaktiv.tagesspiegel.de/lab/karte-sars-cov-2-in-deutschland-landkreise/)
 
 
- Die Zeit  
  - [Coronavirus-Karte für Deutschland: Coronavirus in Deutschland und der Welt – alle Zahlen im Überblick]( 
      https://www.zeit.de/wissen/gesundheit/coronavirus-echtzeit-karte-deutschland-landkreise-infektionen-ausbreitung)
  
  
- Berliner Morgenpost
  - [Corona-Zahlen: Karte zeigt aktuelle Fälle in Deutschland und der Welt](https://interaktiv.morgenpost.de/corona-virus-karte-infektionen-deutschland-weltweit/)
  
Of all the COVID-19 dashboards out there in the world, I found Die Zeit's dashboard the most visually appealing. And I wanted to recreate that. They built their dashboard using [Datawrapper](https://www.datawrapper.de/). 

I used Plotly Dash and Dash Leaflet. Here is a summary of what I did:

[To be continued]




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
