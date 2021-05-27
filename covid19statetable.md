## COVID-19 Dash DataTable for German states

The [table and figure](https://covid19basucrud.herokuapp.com/) were created using [Plotly Dash](https://plotly.com/dash/). The data is taken from [Die Zeit](https://www.zeit.de/wissen/corona-karte-deutschland-aktuelle-zahlen-landkreise#woher-kommen-die-daten). I first clean it a bit, change it into a Pandas dataframe and then send it to a PostgreSQL database on Amazon RDS. This is automated using cron. My app then queries this database (well not really, because I load the entire table up-front *select * from table*).

The vertical moving tooltip is not available in Plotly, so I had to create my own. Python code for app is [here](https://github.com/parbasu/covid19appcode/blob/main/data_table_app.py).
