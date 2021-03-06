//declaring variables

var $out = $('#out');
var $btn = $('#autolocator');
var $locationbtn = $('#locationbtn');
var longitude;
var latitude;
var map;
var locations_obj;


// Asynchronously loading Gmaps API
jQuery(function($) {
  var script = document.createElement('script');
  script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyAC6yk_-cvrYiP_NO4l75OcVcJlRbdZ_Gw&callback=initialize";
  document.body.appendChild(script);
});

//loads GMAPS initial view of Singapore
function initialize() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: {
      //Singapore
      lat: 1.352083,
      lng: 103.819836
    },
    zoom: 11
  });

  bounds = new google.maps.LatLngBounds();
}

//zooms in to current location
function showCurrentLocation() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: {
      //Singapore
      lat: latitude,
      lng: longitude
    },
    zoom: 15
  });

  current_position_marker = new google.maps.Marker({
    position: {
      lat: latitude,
      lng: longitude
    },
    map: map,
    icon: 'https://s16.postimg.org/b5ue0i10l/marker.gif',
  });

  position = new google.maps.LatLng(latitude, longitude);
  bounds.extend(position); //extend boundaries to include inital centre marker

  //adds surrounding data

  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(),marker, i;
  // var bounds = new google.maps.LatLngBounds();


  // Loop through our array of markers & place each one on the map
  for (i = 0; i < locations_obj.length; i++) {
    locations = locations_obj[i];
    console.log(locations_obj[i]);
    if(locations.latLong.coordinates.length > 0){
      position = new google.maps.LatLng(locations.latLong.coordinates[1], locations.latLong.coordinates[0]);
      bounds.extend(position);  //extends bounbdaries to include added markers
      marker = new google.maps.Marker({
        position: position,
        map: map,
        name: locations.name,
        description: locations.description,
        icon: 'https://s14.postimg.org/iodhrak4h/food.gif',

        // title: markers[i][0]
      });

      // Allow each marker to have an info window
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          //template for infoWindow content
          //suggestion from http://you.arenot.me/2010/06/29/google-maps-api-v3-0-multiple-markers-multiple-infowindows/
          var infoWindowContent =
            '<div class="info_content">' +
            '<h3>' + this.name + '</h3>' +
            '<p>' + this.description + '</p>' + '</div>';
          infoWindow.setContent(infoWindowContent);
          infoWindow.open(map, this);
        };
      })(marker, i));
    }

    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
  }
}

//Getting current location
function getCurrentLocation() {

  if (!navigator.geolocation) {
    $out.append("<p>Geolocation is not supported by your browser</p>");
    return;
  }

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    $out.append('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');
    jiakApiCall();
      // showCurrentLocation();
  }

  function error() {
    $out.append("Unable to retrieve your location");
  }

  $out.append("<p>Locating…</p>");
  navigator.geolocation.getCurrentPosition(success, error); //getCurrentPosition is GMAPS function

}

//Get location event listener
$btn.click(getCurrentLocation);


//Setting event listener for search bar
$("#search_bar").keyup(function(e) {
  if (e.keyCode == 13) {

    //declaring variables for search
    get_search_info = $("#search_bar").val();
    concat_search = get_search_info.split(" ").join('+');
    console.log('input value is ' + concat_search);
    geocoding_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + concat_search + '+Singapore&key=AIzaSyAC6yk_-cvrYiP_NO4l75OcVcJlRbdZ_Gw';


    //ajax call to google geocoding api to convert address to lat long
    $.ajax({
      url: geocoding_url,
      dataType: 'json',
    }).done(function successFunction(data) {
      latitude = data.results[0].geometry.location.lat; //only shows the first result, possibility to show other results by changing index number
      longitude = data.results[0].geometry.location.lng;
      // console.log('Searched location is ' + search_latitude + ' ' + search_longitude);
      jiakApiCall();
    })

      .fail(function failFunction(request, textStatus, errorThrown) {
        // console.log('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      })
      .always(function alwaysFunction() {
        // console.log('always function');
      });



    $("#search_bar").val(''); //reset search bar
  }

});

$("#locationbtn").click(function(e) {


    //declaring variables for search
    get_search_info = $("#search_bar").val();
    concat_search = get_search_info.split(" ").join('+');
    console.log('input value is ' + concat_search);
    geocoding_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + concat_search + '+Singapore&key=AIzaSyAC6yk_-cvrYiP_NO4l75OcVcJlRbdZ_Gw';


    //ajax call to google geocoding api to convert address to lat long
    $.ajax({
      url: geocoding_url,
      dataType: 'json',
    }).done(function successFunction(data) {
      latitude = data.results[0].geometry.location.lat; //only shows the first result, possibility to show other results by changing index number
      longitude = data.results[0].geometry.location.lng;
      // console.log('Searched location is ' + search_latitude + ' ' + search_longitude);
      jiakApiCall();
    })

      .fail(function failFunction(request, textStatus, errorThrown) {
        // console.log('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      })
      .always(function alwaysFunction() {
        // console.log('always function');
      });
    $("#search_bar").val(''); //reset search bar
});

var jiakApiCall = function () {
  jiak_simi_url = 'https://jiak-simi.herokuapp.com/locations/search?lat='+ latitude + '&lon=' + longitude + '&dist=99';
  console.log('ajax call');
  $.ajax({
    url: jiak_simi_url,
    dataType: 'json',
  }).done(function successFunction(data) {
    locations_obj = data;
    console.log(jiak_simi_url);
    showCurrentLocation();
  })
    .fail(function failFunction(request, textStatus, errorThrown) {
    // console.log('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
  })
    .always(function alwaysFunction() {
    // console.log('always function');
  });
};
