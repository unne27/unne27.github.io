function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

var streetViewService = new google.maps.StreetViewService();
var STREETVIEW_MAX_DISTANCE = 100;
var latLng = new google.maps.LatLng(40.7140, -74.0062);
streetViewService.getPanoramaByLocation(latLng, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
    if (status === google.maps.StreetViewStatus.OK) {
        console.log("hhhiii")
    } else {
        console.log("hi")
    }
});