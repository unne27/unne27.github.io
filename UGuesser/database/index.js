function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
var data = []

var streetViewService = new google.maps.StreetViewService();
var STREETVIEW_MAX_DISTANCE = 100;
var latLng = new google.maps.LatLng(40.7140, -74.0062);

function callback(streetViewPanoramaData, status) {
    var pos = new google.maps.LatLng(40.7140, -74.0062);
    if (status === google.maps.StreetViewStatus.OK) {
        data.append()
    } else {
        
    }
}

streetViewService.getPanoramaByLocation(latLng, STREETVIEW_MAX_DISTANCE, callback);
