# Steps for development environment setup

1.	Install Nodejs version <u>v0.10.40</u>
```npm install -g npm```

2.	Install npm version <u>2.13.3</u>

3.	Install mongodb <u>2.6.10</u>

4.	Install Bower 
```npm install -g bower```

5.	Install Grunt
```npm install -g grunt-cli```

6. set NODE_ENV environment variable
    * For OSX or Linux - ```export NODE_ENV=development```
    * For Windows - ```SET NODE_ENV=development```
    
# Running the Application

1. ```npm install```

2. ```grunt```

3. Open the following url on browser [http://localhost:8081/](http://localhost:8081/)

# Importing sample bus route data into MongoDB

The file busroutes_sample_data.geojson and busstops_sample_data.geojson contain a list of bus
route objects for Bangalore. We can use this data to initially populate the database. Here are
the steps to do that:

1. Import the GeoJSON file into MongoDB. From the mongo ```bin/``` directory run:
   $ mongoimport --host localhost --db busroutes --collection buses --file <path to bus routes file> --jsonArray
   $ mongoimport --host localhost --db busroutes --collection busstops --file <path to bus stops file> --jsonArray

2. Go into the Mongo shell and set up a geolocation aware index for the coordinates:
   $ mongo
   > use busroutes;
   > db.buses.ensureIndex({"stops.location.coordinates":"2dsphere"})
   > db.busstops.ensureIndex({"location.coordinates":"2dsphere"})

3. Now we can search for all buses that stop within some distance of a given point. 

The query below gives the bus numbers for all busses stopping within 100m of a coordinate
   > db.buses.find({"stops.location.coordinates": {$near: { $geometry: {"type":"Point", "coordinates":[12.9197565816, 77.5923588994]}, $maxDistance: 100}}}, {"name":1})

This query gives all bus stops within 100m of a coordinate
   > db.busstops.find({"location.coordinates": {$near: { $geometry: {"type":"Point", "coordinates":[12.9197565816, 77.5923588994]}, $maxDistance: 1000}}}, {"name":1})
