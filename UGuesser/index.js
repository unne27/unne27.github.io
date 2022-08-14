//import randomStreetView from '/GeoGuessrU/random-streetview/src/index.js';

let map;

//import randomStreetView from './random-streetview';

//const { strictEqual } = require("assert");

/*
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
*/
var markers = []

var MathHelper = {
  // Get a value between two values
  clamp: function (value, min, max) {

      if (value < min) {
          return min;
      }
      else if (value > max) {
          return max;
      }

      return value;
  },
  // Get the linear interpolation between two value
  lerp: function (value1, value2, amount) {
      amount = amount < 0 ? 0 : amount;
      amount = amount > 1 ? 1 : amount;
      return value1 + (value2 - value1) * amount;
  }

};

// Obtient une valeur comprise dans un interval
Math.clamp = function (value, min, max) {

if (value < min) {
  return min;
}
else if (value > max) {
  return max;
}

return value;
};

// Obtient une interpolation linéaire entre 2 valeurs
Math.lerp = function (value1, value2, amount) {
amount = amount < 0 ? 0 : amount;
amount = amount > 1 ? 1 : amount;
return value1 + (value2 - value1) * amount;
};

var positions = [
  { lat: 59.329910, lng: 18.067328 },
  {lat: 59.434435, lng: 24.767237},
  {lat: 61.559431, lng: 24.095852},
  {lat: 52.338059, lng: 13.554706},
  {lat: 62.119515, lng: -7.071049},
  {lat: 43.318227, lng: -3.021544},
  {lat: 34.578418, lng: -92.582820},
  {lat: 30.901622, lng: -108.178861 },
  {lat: -29.825896, lng: 28.036647},
  {lat: 1.363102, lng: 103.859263},
  {lat: -19.033596, lng: -65.272217},
  {lat: 22.832426, lng: 89.544836},
  {lat: 38.679171, lng: 16.545234},
  {lat: 35.379074, lng: -119.044575},
  {lat: 5.628216, lng: -0.160851},
  {lat: -1.214871, lng: 36.896990},
  {lat: 45.413330, lng: 11.100236},
  {lat: -23.563460, lng: -46.640432},
  {lat: -16.188659, lng: -68.970483},
  {lat: 14.611971, lng: -90.533893},
  {lat: 29.863209, lng: -114.843383},
  {lat: 52.235015, lng: 21.037054},
  {lat: 65.647947, lng: -15.200560},
  {lat: 60.386132, lng: 5.337381},
  {lat: 59.303959, lng: 31.127702},
  {lat: 40.400320, lng: -3.712778},
  {lat: 33.887231, lng: 35.506157},
  {lat: 41.020707, lng: 28.918119},
  {lat: 59.756946, lng: 17.804943},
  {lat: 63.004706, lng: 14.676087},
  {lat: 63.451592, lng: 11.063179},
  {lat: 69.940963, lng: 24.966997},
  {lat: 67.916773, lng: 26.748731},
  {lat: 55.369136, lng: 11.292917},
  {lat: 55.387411, lng: 10.197070},
  {lat: 55.641158, lng: 12.405904},
  {lat: 51.338959, lng: 12.371675},
  {lat: 53.526859, lng: 9.932226},
  {lat: 52.371102, lng: 4.849590},
  {lat: 51.404902, lng: 5.514111},
  {lat: 50.860579, lng: 4.392024},
  {lat: 51.170878, lng: 3.152944},
  {lat: 47.282696, lng: -1.504009},
  {lat: 46.048852, lng: 4.765855},
  {lat: 43.736435, lng: 7.420759},
  {lat: 47.126985, lng: 9.099755},
  {lat: 47.284201, lng: 7.382034},
  {lat: 47.098236, lng: 11.464123},
  {lat: 47.068170, lng: 15.460813},
  {lat: 50.132454, lng: 13.417793},
  {lat: 49.192084, lng: 16.601661},
  {lat: 49.077938, lng: 19.320390},
  {lat: 48.176207, lng: 17.189594},
  {lat: 47.523936, lng: 18.510217},
  {lat: 47.477008, lng: 19.090243},
  {lat: 53.410255, lng: -2.927451},
  {lat: 52.627187, lng: 1.291279},
  {lat: 58.358216, lng: -3.402549},
  {lat: 52.635831, lng: -8.705035},
  {lat: 53.363664, lng: -6.382134},
  {lat: 52.386646, lng: 16.493064},
  {lat: 58.996276, lng: 25.593694},
  {lat: 56.944224, lng: 24.070546},
  {lat: 56.681442, lng: 22.117722},
  {lat: 55.734303, lng: 24.248914},
  {lat: 44.430771, lng: 26.108592},
  {lat: 47.533871, lng: 25.494345},
  {lat: 50.445622, lng: 30.500467},
  {lat: 48.196781, lng: 35.339053},
  {lat: 38.275854, lng: 23.690060},
  {lat: 37.975803, lng: 23.728517},
  {lat: 42.422445, lng: 25.640675},
  {lat: 44.530313, lng: 15.448438},
  {lat: 44.806780, lng: 20.458701},
  {lat: 39.785199, lng: 32.720140},
  {lat: 39.703426, lng: 43.162196},
  {lat: 40.408310, lng: 49.814331},
  {lat: 42.240691, lng: 42.712865},
  {lat: 31.567657, lng: 34.642289},
  {lat: 25.179619, lng: 55.280355},
  {lat: 25.355027, lng: 55.422370},
  {lat: 23.614128, lng: 58.476812},
  {lat: 21.429084, lng: 59.292152},
  {lat: 29.339408, lng: 48.095704},
  {lat: 24.823435, lng: 46.795039},
  {lat: 26.936070, lng: 37.875068},
  {lat: 33.657262, lng: 72.995818},
  {lat: 57.076359, lng: 64.754575},
  {lat: 60.549434, lng: 128.022991},
  {lat: 70.312937, lng: -25.777941},
  {lat: 27.281766, lng: 90.620765},
  {lat: 28.714183, lng: 77.732809},
  {lat: 6.974713, lng: 79.970342},
  {lat: 6.928786, lng: 79.848481},
  {lat: 13.739699, lng: 100.519795},
  {lat: 15.188627, lng: 100.453029},
  {lat: 11.303565, lng: 103.325814},
  {lat: 22.323542, lng: 114.178295},
  {lat: 24.995053, lng: 121.593252},
  {lat: 24.003460, lng: 121.055192},
  {lat: 35.660618, lng: 139.743081},
  {lat: 32.356365, lng: 131.436177},
  {lat: 43.803459, lng: 142.880684},
  {lat: 37.558831, lng: 126.986034},
  {lat: 14.657431, lng: 121.012291},
  {lat: 8.404395, lng: 124.829182},
  {lat: 3.137705, lng: 101.657902},
  {lat: 4.750781, lng: 103.415022},
  {lat: 5.844807, lng: 118.113714},
  {lat: -6.948265, lng: 107.608172},
  {lat: 3.555439, lng: 98.725335},
  {lat: 0.498824, lng: 101.511659},
  {lat: -1.105864, lng: 116.929522},
  {lat: 0.064610, lng: 111.488772},
  {lat: 11.546327, lng: 104.922069},
  {lat: 20.997789, lng: 105.841381},
  {lat: 42.613574, lng: 3.886380},
  {lat: -29.587569, lng: 135.081096},
  {lat: -26.685170, lng: 153.003666},
  {lat: -12.432363, lng: 130.850354},
  {lat: -33.865322, lng: 151.283251},
  {lat: -36.887102, lng: 174.793266},
  {lat: -39.308868, lng: 174.100947},
  {lat: -44.220987, lng: 169.237422},
  {lat: -20.188194, lng: 57.578428},
  {lat: -22.071447, lng: 43.236093},
  {lat: -22.076473, lng: 43.249287},
  {lat: -13.530276, lng: 48.391261},
  {lat: -26.204620, lng: 28.042630},
  {lat: 14.703435, lng: -17.443187},
  {lat: 1.688539, lng: 7.403475},
  {lat: 0.396653, lng: 32.491699},
  {lat: 40.780204, lng: -73.966157},
  {lat: 42.357780, lng: -71.176526},
  {lat: 25.776975, lng: -80.199642},
  {lat: 36.073778, lng: -97.345298},
  {lat: 39.601959, lng: -107.164090},
  {lat: 42.492293, lng: -83.020995},
  {lat: 43.653527, lng: -79.406512},
  {lat: 45.435173, lng: -75.701285},
  {lat: 46.852241, lng: -71.205023},
  {lat: 67.769019, lng: -149.772561},
  {lat: 81.398488, lng: -76.479383},
  {lat: 67.670502, lng: -133.852509},
  {lat: -64.843636, lng: -62.546958},
  {lat: 30.454332, lng: -97.622358},
  {lat: 19.416211, lng: -99.165091},
  {lat: 27.140226, lng: -101.265419},
  {lat: 18.473030, lng: -69.837062},
  {lat: 18.429163, lng: -64.640109},
  {lat: 9.039925, lng: -79.633146},
  {lat: 4.721061, lng: -74.051842},
  {lat: 4.936470, lng: -74.110877},
  {lat: -1.406854, lng: -78.318094},
  {lat: -0.226324, lng: -79.186052},
  {lat: -33.377622, lng: -70.494831},
  {lat: -33.506461, lng: -70.655682},
  {lat: -37.326404, lng: -72.106405},
  {lat: -40.474116, lng: -71.583154},
  {lar: -34.587785, lng: -58.404458},
  {lat: -31.158431, lng: -64.146969},
  {lat: -24.842922, lng: -65.721895},
  {lat: -22.553303, lng: -42.991179},
  {lat: -18.928704, lng: -48.301453},
  {lat: -18.538935, lng: -48.896383},
  {lat: -5.588959, lng: -35.230974},
  {lat: -5.577387, lng: -35.228563},
  {lat: -3.720850, lng: -38.504176},
  {lat: -3.706017, lng: -38.574532},
  {lat: -0.942698, lng: -60.505900},
  {lat: 30.005070, lng: 31.226446},
  {lat: 31.241758, lng: 29.960333},
  {lat: 35.501511, lng: 11.065536},
  {lat: 34.434646, lng: 10.251330},
  {lat: 30.280892, lng: -9.511666},
  {lat: 28.126015, lng: -15.466173},
  {lat: 6.423321, lng: 3.530630},
  {lat: 6.595848, lng: 3.335477},
  {lat: 10.187154, lng: -2.544562},
  {lat: -33.972621, lng: 18.572613},
  {lat: -26.466743, lng: 31.470437},
  {lat: 64.132120, lng: -16.010340},
  {lat: 67.036492, lng: -52.472068},

]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  
function calcDistance(mk1, mk2) {
  return google.maps.geometry.spherical.computeDistanceBetween (mk1, mk2) / 1000;
}



function initialize() {
  
  
 const panpos = positions[randomIntFromInterval(0, positions.length)];
//const panpos = randomStreetView.getRandomLocations(1)
console.log(panpos)
  const centered = {lat: 0, lng: 0}

  map = new google.maps.Map(document.getElementById("map"), {
    center: centered,
    zoom: 2,
    disableDefaultUI: true,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: panpos,
      pov: {
        heading: 34,
        pitch: 10,
      },
      disableDefaultUI: true,
      showRoadLabels: false,
    }
  );

  map.setStreetView(panorama);
  map.addListener("click", (mapsMouseEvent) => {
    var latlng = mapsMouseEvent.latLng
    var marker = new google.maps.Marker({
      position: latlng,
      map,
      title: "Amogus",
    })
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null)
      markers.splice(i, 1)
    }
    markers.push(marker)
  })
  
function onbtnclicked() {
  var distance = calcDistance(markers[0].position, panpos)
  var sigma = 3000
  var score = (5000 * Math.exp(-0.5 * ((distance) / sigma)**2)).toFixed(0)
  
  console.log(markers)
 document.getElementById("mappano").style.display = "none"
 /* document.getElementById("distancemap").style.display = "block"
  document.getElementById("distancemap").style.width = "100%"
  document.getElementById("distancemap").style.height = "100%"*/
  document.getElementById("distancemap").style = "display:block;width:100%;height:100%;"
  document.getElementById("bigmap").style =   "height: 100%; width: 100%;  position: fixed; top: 0%;  left: 0%;"
  document.getElementById("score").innerText = score.toString()
  var distmap = new google.maps.Map(document.getElementById("bigmap"), {
    center : centered,
    zoom : 2,
    disableDefaultUI: true,
  })
  var yourpos = new google.maps.Marker({
    position: markers[0].position,
    map: distmap,
    title: "Your position",
  })
  var corpos = new google.maps.Marker({
    position: panpos,
    map: distmap,
    icon : "flag.png",
    title: "A",
  })
  console.log("Placed markers!")
  document.getElementById("distance").innerText = "You were " + distance.toFixed(1) + " kilometers away."
  var line = new google.maps.Polyline({
    path: [yourpos.position, corpos.position],
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  })  
  line.setMap(distmap)
} 
document.getElementById("guessbtn").onclick = onbtnclicked

}



window.onload = function() {
  window.scrollTo(0, document.body.scrollHeight)
}
//window.initMap = initMap;
window.initialize = initialize;