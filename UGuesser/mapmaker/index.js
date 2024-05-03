var locations = []
var markers = []

function getCurrentURL () {
    return window.location.href
  }

  var delMarker = function (markerPar) {
    markerPar.setMap(null);
    for (let i = 0; i < locations.length; i++) {
      if (locations[i] == markerPar.position) {
        delete locations[i]
      }
    }
}

String.prototype.insert = function(index, string) {
    if (index > 0) {
      return this.substring(0, index) + string + this.substr(index);
    }
  
    return string + this;
  };


  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function hide() {
    document.getElementById("map").style.display = "none"
    document.getElementById("donebtn").style.display = "none"
}

function initialize() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 0, lng: 0},
        zoom: 2,
        disableDefaultUI: true,
        
      });

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const isCustomMap = urlParams.get('isCustomMap')
    
  
    if (isCustomMap == "true") {
      console.log("Yes")
      var customMap = urlParams.get('customMap')
      var arr = []
      locations = []
      
      arr = customMap.split('>')
  
      for (let i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split(',')
  
        var int1
        var int2
  
        for(let i = 0; i < arr2[0].length; i++) {
          if (arr2[0][i] == ':') {
            var substrr = arr2[0].substring(i)
            int1 = parseFloat(substrr.substring(1).substring(0, substrr.substring(1).length - 1))
            console.log(arr2[0].substring(i))
          } 
        }
  
        for(let i = 0; i < arr2[1].length; i++) {
          if (arr2[1][i] == ':') {
            var substrr = arr2[1].substring(i)
            int2 = parseFloat(substrr.substring(1).substring(0, substrr.substring(1).length - 1))
            console.log(arr2[1].substring(i))
          }
        }
  
        console.log(int1)
        console.log(arr2)
        var newpos = {lat: int1, lng: int2}
        locations.push(newpos)
        var newmarker = new google.maps.Marker({
            position: newpos,
            map,
            title: "Location",
          })
          markers.push(newmarker)
          google.maps.event.addListener(newmarker, "rightclick", function (point) {delMarker(newmarker)});
      }
      console.log(locations)
    }
 
    var streetViewLayer = new google.maps.StreetViewCoverageLayer();
    streetViewLayer.setMap(map);
    document.getElementById("map").style = ""
    
   
    map.addListener("click", (mapsMouseEvent) => {
      var latlng = mapsMouseEvent.latLng
      var marker = new google.maps.Marker({
        position: latlng,
        map,
        title: "Location",
      })
      google.maps.event.addListener(marker, "click", function (point) {delMarker(marker)});
      locations.push(latlng)
      markers.push(marker)
    })
    

    
}

function onload() {
  document.getElementById("map").style = ""
  document.getElementById("donebtn").onclick = function() {
    hide()
    
    var locationsParsed = locations.toString()
    for(let i = 0; i < locationsParsed.length; i++) {
        if (locationsParsed[i] == "(") {
            locationsParsed = locationsParsed.replaceAt(i, "{")
            locationsParsed = locationsParsed.insert(i + 1, "lat:")
        }
        if (locationsParsed[i] == ")") {
            locationsParsed = locationsParsed.replaceAt(i, "}")
            locationsParsed = locationsParsed.replaceAt(i + 1, '>')
        }
        if (locationsParsed[i] == ',' && parseInt(locationsParsed[i - 1])) {
            locationsParsed = locationsParsed.insert(i + 1, "lng:")
        }
    }
    locationsParsed = locationsParsed.replaceAt(locationsParsed.length - 1, ' ')
    var url = getCurrentURL()
    var parsedUrl = url.replaceAt(url.length - 9, "game?isCustomMap=true&customMap=")
    var parsedUrl2 = url.replaceAt(url.length - 1, "?isCustomMap=true&customMap=")

    document.getElementById("text").innerText = parsedUrl + locationsParsed + "\n" + parsedUrl2 + locationsParsed
    for (let i = 0; i < locations.length; i++) {
        console.log(locations[i])
    }
  }
}


window.initialize = initialize
window.onload = onload
