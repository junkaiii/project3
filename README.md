# Jiak-simi
### Introduction
'Jiak Simi?' is a Singapore-based food locator website which is created and designed by a bunch of brain-dead students with a lack of sleep from General Assembly. It is done with much blood(literally), sweat(metaphorical due to air-con) and tears(literally). Use the website to find interesting places to eat near you by either typing an address or the GPS-locator. You can also use the advanced search to choose how long you are willing to take to get there and how.
### App Usage
Vendors/ restaurant owners
* Signup and login to the app
* Upon signup and login, vendors can create locations based on their specified latitude and longitude coordinates

Users (non-vendors)
* Users can enter a specific address to view nearby eateries
* 'Get my location' button allows users to view eateries near their current location, without having to key in an address
* An advanced search allows users to filter nearby eateries based on specified mode of travel and travelling time or distance

### API documentation
####Basic search queries####

- To retrieve eateries based on name:

    API call: https://jiak-simi.herokuapp.com/locations/search?attrQ=true&name={eatery_name}

    Parameters: attrQ: query on attribute, name: eatery name

    e.g https://jiak-simi.herokuapp.com/locations/search?attrQ=true&name=The%20Lokal

- To retrieve eateries based on category:

  API call: https://jiak-simi.herokuapp.com/locations/search?attrQ=true&category={category}

  Parameters: attrQ: query on attribute, category: western

  e.g https://jiak-simi.herokuapp.com/locations/search?attrQ=true&category=western

- To retrieve points within circular area

  API call: https://jiak-simi.herokuapp.com/locations/search?lat={latitude}&lon={longitude}&dist={distance}

  Parameters: lat: latitude, lon: longitude, dist: distance in KM

  e.g https://jiak-simi.herokuapp.com/locations/search?lon=103.8417&lat=1.280639&dist=10
  
**Advanced search queries**

- Search based on distance of walking/driving route

  API call: https://jiak-simi.herokuapp.com/locations/advSearch?lat={latitude}&lon={longitude}&dist={distance_in_km}&mode={travel_mode}

  Parameters: lat: latitude, lon: longitude, dist: distance in KM, mode: driving or walking

  e.g https://jiak-simi.herokuapp.com/locations/advSearch?lat=1.357172&lon=103.939992&dist=5&mode=driving
  
- Search based on travel time

  API call: https://jiak-simi.herokuapp.com/locations/advSearch?lat={latitude}&lon={longitude}&time={time_in_minutes}

  Parameters: lat: latitude, longitude: longitude, time: travel time

  e.g https://jiak-simi.herokuapp.com/locations/advSearch?lat=1.349759&lon=103.868673&mode=walking&time=20
  
### Resources
**npm Packages**
- [@google/maps](https://www.npmjs.com/package/@google/maps)
- [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [connect-flash](https://www.npmjs.com/package/connect-flash)
- [compression](https://www.npmjs.com/package/compression)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [googlemaps](https://www.npmjs.com/package/googlemaps)
- [express-session](https://www.npmjs.com/package/express-session)
- [jsonwebtoken](https://www.npmjs.com/package/express-session)
- [express-ejs-layouts](https://www.npmjs.com/package/express-ejs-layouts)
- [method-override](https://www.npmjs.com/package/method-override)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [morgan](https://www.npmjs.com/package/morgan)
- [passport](https://www.npmjs.com/package/passport)
- [passport-facebook](https://www.npmjs.com/package/passport-facebook)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [request](https://www.npmjs.com/package/passport-local)

**External APIs**
- [Google geocode API](https://developers.google.com/maps/documentation/geocoding/intro)
- [Google distance matric API](https://developers.google.com/maps/documentation/distance-matrix)

### References
- [Passport authentication and FB login](https://scotch.io/tutorials/easy-node-authentication-setup-and-local)
- [Using ejs](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
- [Pacman loader](http://codepen.io/wifi/pen/olKxE)
- [GEOJson](http://blog.mongodb.org/post/50984169045/new-geo-features-in-mongodb-24)
