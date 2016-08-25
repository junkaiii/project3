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

1. To retrieve eateries based on name:

  API call: https://jiak-simi.herokuapp.com/locations/search?attrQ=true&name={eatery_name}

  Parameters: attrQ: query on attribute, name: eatery name

  e.g https://jiak-simi.herokuapp.com/locations/search?attrQ=true&name=The%20Lokal

2. To retrieve eateries based on category:

  API call: https://jiak-simi.herokuapp.com/locations/search?attrQ=true&category={category}

  Parameters: attrQ: query on attribute, category: western

  e.g https://jiak-simi.herokuapp.com/locations/search?attrQ=true&category=western

3. To retrieve points within circular area

  API call: https://jiak-simi.herokuapp.com/locations/search?lat={latitude}&lon={longitude}&dist={distance}

  Parameters: lat: latitude, lon: longitude, dist: distance in KM

  e.g https://jiak-simi.herokuapp.com/locations/search?lon=103.8417&lat=1.280639&dist=10
  
**Advanced search queries**

1. Search based on distance of walking/driving route

  API call: https://jiak-simi.herokuapp.com/locations/advSearch?lat={latitude}&lon={longitude}&dist={distance_in_km}&mode={travel_mode}

  Parameters: lat: latitude, lon: longitude, dist: distance in KM, mode: driving or walking

  e.g https://jiak-simi.herokuapp.com/locations/advSearch?lat=1.357172&lon=103.939992&dist=5&mode=driving
  
2. Search based on travel time

  API call: https://jiak-simi.herokuapp.com/locations/advSearch?lat={latitude}&lon={longitude}&time={time_in_minutes}

  Parameters: lat: latitude, longitude: longitude, time: travel time

  e.g https://jiak-simi.herokuapp.com/locations/advSearch?lat=1.349759&lon=103.868673&mode=walking&time=20


### Resources

### References
