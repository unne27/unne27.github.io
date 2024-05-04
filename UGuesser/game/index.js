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

String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }

  return string + this;
};


String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

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
  {lat: 42.240691, lng: 42.712865},
  {lat: 31.567657, lng: 34.642289},
  {lat: 25.179619, lng: 55.280355},
  {lat: 25.355027, lng: 55.422370},
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
  {lat: 4.721061, lng: -74.051842},
  {lat: 4.936470, lng: -74.110877},
  {lat: -1.406854, lng: -78.318094},
  {lat: -0.226324, lng: -79.186052},
  {lat: -33.377622, lng: -70.494831},
  {lat: -33.506461, lng: -70.655682},
  {lat: -37.326404, lng: -72.106405},
  {lat: -40.474116, lng: -71.583154},
  {lat: -34.587785, lng: -58.404458},
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
  {lat: 35.501511, lng: 11.065536},
  {lat: 34.434646, lng: 10.251330},
  {lat: 28.126015, lng: -15.466173},
  {lat: 6.423321, lng: 3.530630},
  {lat: 6.595848, lng: 3.335477},
  {lat: 10.187154, lng: -2.544562},
  {lat: -33.972621, lng: 18.572613},
  {lat: -26.466743, lng: 31.470437},
  {lat: 64.132120, lng: -16.010340},
  {lat: 67.036492, lng: -52.472068},
  {lat: 66.709269, lng: 66.219714},
  {lat: 41.401525, lng: -98.451347},
  {lat: 47.577435, lng: -122.419704},
  {lat: 47.564545, lng: -122.375989},
  {lat: 46.870295, lng: -56.238050},
  {lat: 47.537336, lng: -52.752459},
  {lat: 35.835040, lng: 128.556377},
  {lat: 1.460844, lng: 124.789331},
  {lat: 42.577675, lng: 75.805214},
  {lat: 47.916575, lng: 106.910767},
  {lat: 46.512676, lng: 106.519826},
  {lat: 46.563193, lng: 92.336520},
  {lat: 15.252502, lng: -14.701369},
  {lat: -41.161122, lng: 146.346947},
  {lat: 65.830986, lng: -38.020301},
  {lat: 17.494236, lng: 78.398496},
  {lat: 20.017816, lng: 79.212303},
  {lat: 20.051364, lng: 73.880845},
  {lat: 27.849915, lng: 86.749681},
  {lat: 45.611555, lng: 123.424150},
  {lat: 53.616388, lng: -113.401754},
  {lat: 54.447543, lng: -113.440160},
  {lat: 61.192097, lng: -149.912937},
  {lat: 61.460839, lng: -6.791777},
  {lat: 62.114975, lng: -6.906521},
  {lat: 35.893374, lng: 14.475236},
  {lat: 13.471390, lng: 144.804596},
  {lat: 38.648960, lng: 41.781771},
  {lat: 41.030243, lng: 28.979232},
  {lat: 39.933373, lng: 32.868213},
  {lat: 55.214441, lng: 76.400753},
  {lat: 61.003029, lng: 14.537825},
  {lat: 55.553873, lng: 14.086846},
  {lat: 55.685553, lng: 12.557007},
  {lat: 57.733967, lng: 10.622341},
  {lat: 51.408664, lng: -0.122317},
  {lat: 52.420749, lng: -1.722002},
  {lat: 64.143224, lng: -21.946022},
  {lat: 65.853898, lng: -22.412737},
  {lat: 53.912406, lng: 27.635040},
  {lat: 54.889146, lng: 23.895236},
  {lat: 56.927018, lng: 24.035643},
  {lat: 32.084335, lng: 34.782476},
  {lat: 31.764589, lng: 35.204749},
  {lat: 31.783104, lng: 35.203230},
  {lat: 24.323317, lng: 54.616926},
  {lat: 25.285953, lng: 55.920629},
  {lat: 25.203904, lng: 55.277577},
  {lat: -23.967992, lng: 31.628400},
  {lat: -26.179540, lng: 28.122635},
  {lat: -25.711572, lng: 28.276052},
  {lat: -33.910767, lng: 25.582252},
  {lat: -30.798440, lng: 22.430666},
  {lat: -29.250141, lng: 22.076465},
  {lat: -29.420526, lng: 27.913782},
  {lat: -28.760800, lng: 28.554352},
  {lat: -29.109723, lng: 26.210725},
  {lat: -23.987600, lng: 26.338531},
  {lat: -20.558435, lng: 26.465565},
  {lat: 19.176685, lng: 5.774380},
  {lat: -2.574157, lng: 38.054771},
  {lat: 1.482482, lng: 37.734489},
  {lat: -0.007012, lng: 35.589336},
  {lat: -21.205385, lng: 55.569736},
  {lat: -21.381843, lng: 55.646255},
  {lat: 41.234764, lng: 19.923905},
  {lat: 41.319708, lng: 19.832665},
  {lat: 41.367852, lng: 19.700565},
  {lat: 42.003377, lng: 19.725499},
  {lat: 43.811946, lng: 21.427605},
  {lat: 44.044723, lng: 21.242822},
  {lat: 44.792613, lng: 20.466681},
  {lat: 46.265603, lng: 1.397168},
  {lat: 48.631303, lng: 2.337877},
  {lat: 44.761387, lng: -0.547046},
  {lat: 49.072688, lng: 4.267143},
  {lat: 41.434407, lng: 2.181975},
  {lat: 43.402382, lng: -4.679460},
  {lat: 37.357804, lng: -6.336008},
  {lat: 43.035510, lng: -8.393681},
  {lat: 38.762402, lng: -9.376575},
  {lat: 38.707398, lng: -9.134026},
  {lat: 41.222348, lng: -8.167209},
  {lat: 39.930173, lng: -5.138891},
  {lat: 40.429771, lng: -3.718206},
  {lat: 50.734596, lng: 7.074060},
  {lat: 53.549854, lng: 9.986310},
  {lat: 46.255809, lng: 23.692265},
  {lat: 46.556922, lng: 26.108738},
  {lat: 51.696585, lng: 5.148852},
  {lat: 52.080758, lng: 4.284498},
  {lat: 51.034971, lng: 3.755029},
  {lat: 50.857588, lng: 4.396867},
  {lat: 41.971256, lng: 12.516639},
  {lat: 43.182974, lng: 12.137553},
  {lat: 43.942770, lng: 12.447657},
  {lat: 46.096428, lng: 11.095938},
  {lat: 46.297002, lng: 7.592065},
  {lat: 37.665552, lng: 14.061183},
  {lat: 38.000180, lng: 32.768538},
  {lat: 28.102723, lng: -82.251594},
  {lat: 49.736768, lng: -84.272741},
  {lat: 59.622408, lng: -117.170187},
  {lat: 63.911181, lng: 26.729748},
  {lat: 35.366131, lng: 24.522243},
  {lat: 39.418015, lng: 21.010716},
  {lat: 40.629102, lng: 22.948673},
  {lat: 42.680327, lng: 23.300592},
  {lat: 43.281212, lng: 27.300764},
  {lat: 38.750402, lng: 37.020314},
  {lat: 38.841338, lng: -77.007757},
  {lat: 38.888406, lng: -77.103850},
  {lat: 40.725694, lng: -74.003992},
  {lat: 49.000467, lng: -97.237156},
  {lat: 46.861350, lng: -101.526006},
  {lat: 45.535521, lng: -122.623984},
  {lat: 35.900699, lng: -84.782968},
  {lat: 35.230704, lng: -80.832113},
  {lat: -47.102449, lng: -72.774376},
  {lat: -38.737887, lng: -72.595781},
  {lat: -12.053295, lng: -77.042289},
  {lat: -9.084837, lng: -78.577176},
  {lat: -11.529497, lng: -74.945477},
  {lat: -11.737565, lng: 143.973148},
  {lat: -6.107430, lng: 106.891200},
  {lat: -5.535252, lng: 105.785726},
  {lat: -6.987291, lng: 110.206790},
  {lat: -7.271591, lng: 112.718320},
  {lat: -2.392785, lng: 112.422295},
  {lat: 2.745349, lng: 112.666195},
  {lat: 1.533015, lng: 110.358146},
  {lat: 10.412399, lng: 123.806121},
  {lat: 17.847178, lng: 100.049145},
  {lat: 10.272182, lng: 99.202329},
  {lat: 35.049696, lng: 126.543892},
  {lat: 35.735269, lng: 139.734985},
  {lat: 39.821731, lng: 141.139744},
  {lat: 26.438741, lng: 127.713934},
  {lat: 23.163838, lng: 121.047774},
  {lat: 59.912449, lng: 10.755445},
  {lat: 61.031571, lng: 9.064374},
  {lat: 55.840278, lng: -3.885732},
  {lat: 57.165797, lng: -3.230000},
  {lat: 50.359491, lng: 5.674719},
  {lat: 53.162431, lng: 6.293010},
  {lat: 53.414209, lng: 18.364058},
  {lat: 54.362688, lng: 18.642241},
  {lat: 50.569692, lng: 21.510434},
  {lat: 46.428841, lng: 20.010679},
  {lat: 40.748581, lng: 73.273628},
  {lat: 41.429703, lng: 75.928065},
  {lat: 22.369002, lng: 114.179087},
  {lat: 22.339788, lng: 114.179099},
  {lat: 22.299316, lng: 114.174930},
  {lat: -2.302292, lng: 102.724824},
  {lat: 2.969674, lng: 117.212587},
  {lat: 13.272355, lng: 122.043768},
  {lat: -21.900439, lng: 149.399236},
  {lat: -19.441306, lng: 134.307317},
  {lat: -27.258415, lng: 117.981775},
  {lat: -21.590421, lng: 115.938362},
  {lat: -43.170113, lng: 146.925685},
  {lat: -1.960113, lng: 30.110677},
  {lat: -1.950436, lng: 30.080924},
  {lat: -1.931640, lng: 30.085177},
  {lat: -1.979317, lng: 30.044617},
  {lat: -1.918909, lng: 30.072490},
  {lat: 0.325979, lng: 32.608642},
  {lat: 0.288529, lng: 32.577234},
  {lat: 0.296670, lng: 32.573217},
  {lat: 0.374416, lng: 32.600848},
  {lat: 0.329967, lng: 32.581883},
  {lat: 0.595861, lng: 32.532267},
  {lat: 0.704397, lng: 32.525460},
  {lat: 1.010391, lng: 32.469572},
  {lat: 14.713351, lng: -17.446286},
  {lat: 14.729776, lng: -17.458166},
  {lat: 14.750767, lng: -17.492314},
  {lat: 14.768584, lng: -17.365836},
  {lat: 14.786522, lng: -16.062338},
  {lat: 14.144835, lng: -16.076544},
  {lat: 13.380205, lng: -15.526883},
  {lat: 12.572237, lng: -16.271098},
  {lat: 12.621897, lng: -15.626512},
  {lat: 12.890651, lng: -14.340899},
  {lat: 13.114541, lng: -12.789561},
  {lat: 13.868881, lng: -15.878643},
  {lat: 16.175404, lng: -13.991827},
  {lat: 5.609621, lng: -0.236785},
  {lat: 5.644122, lng: -0.185198},
  {lat: 5.558983, lng: -0.209844},
  {lat: 5.667837, lng: -0.165824},
  {lat: 6.693493, lng: -1.607127},
  {lat: 5.860820, lng: -2.006540},
  {lat: 8.293861, lng: -2.122814},
  {lat: 8.924683, lng: -0.486924},
  {lat: 8.960967, lng: -0.017163},
  {lat: 36.806851, lng: 10.187365},
  {lat: 36.803333, lng: 10.182622},
  {lat: 36.815347, lng: 10.144696},
  {lat: 36.633510, lng: 10.387463},
  {lat: 36.031756, lng: 10.412038},
  {lat: 35.187800, lng: 10.649091},
  {lat: 34.742445, lng: 10.749781},
  {lat: 33.800876, lng: 10.882535},
  {lat: 33.362994, lng: 10.472128},
  {lat: 25.306026, lng: 51.446796},
  {lat: 25.309355, lng: 51.439797},
  {lat: 25.317906, lng: 51.431584},
  {lat: 25.306194, lng: 51.444256},
  {lat: 25.300983, lng: 51.427154},
  {lat: 3.365681, lng: 35.430528},
  {lat: 38.267233, lng: -1.442416},
  {lat: 39.462827, lng: -0.403651},
  {lat: 55.758440, lng: 37.617946},
  {lat: 55.740475, lng: 37.620513},
  {lat: 55.660257, lng: 37.626419},
  {lat: 53.979366, lng: 37.473701},
  {lat: 54.790477, lng: 32.052575},
  {lat: 42.797861, lng: 44.638134},
  {lat: 43.496337, lng: 39.882453},
  {lat: 41.762764, lng: 48.354923},
  {lat: 56.308818, lng: 43.744904},
  {lat: 59.919469, lng: 30.371413},
  {lat: 55.160877, lng: 61.411601},
  {lat: 50.407636, lng: 86.938661},
  {lat: 55.998397, lng: 92.922600},
  {lat: 51.057365, lng: 111.800109},
  {lat: 62.851891, lng: 148.418784},
  {lat: 47.916133, lng: 106.919660},
  {lat: 46.913709, lng: 112.244036},
  {lat: 46.251830, lng: 102.788061},
  {lat: 47.449931, lng: 92.199118},
  {lat: 35.921028, lng: 128.488974},
  {lat: 36.667747, lng: 128.129114},
  {lat: 35.132976, lng: 129.052931},
  {lat: 34.911260, lng: 126.498963},
  {lat: 37.618414, lng: 127.074322},
  {lat: 37.726056, lng: 128.849521},
  {lat: 35.605330, lng: 39.474103},
  {lat: 35.609267, lng: 140.107716},
  {lat: 34.685082, lng: 135.594407},
  {lat: 34.667465, lng: 135.497952},
  {lat: 34.667465, lng: 135.497952},
  {lat: 34.771538, lng: 136.288533},
  {lat: 38.266382, lng: 140.872832},
  {lat: 42.957146, lng: 142.333887},
  {lat: 7.131652, lng: 125.480774},
  {lat: 10.216200, lng: 123.105425},
  {lat: 25.021022, lng: 121.482991},
  {lat: 22.607033, lng: 120.334994},
  {lat: 23.609266, lng: 120.436660},
  {lat: 41.370235, lng: 75.418013},
  {lat: 42.881677, lng: 74.589068},
  {lat: 42.211392, lng: 77.697858},
  {lat: 41.499851, lng: 72.407603},
  {lat: 40.535087, lng: 72.816239},
  {lat: 22.641593, lng: 120.311378},
  {lat: 23.800803, lng: 120.985809},
  {lat: 23.041949, lng: 120.203262},
  {lat: 10.731451, lng: 122.551407},
  {lat: 7.671671, lng: 125.109853},
  {lat: 16.616624, lng: 121.314624},
  {lat: 13.070242, lng: 106.188043},
  {lat: 13.368284, lng: 103.848832},
  {lat: 12.071578, lng: 106.421650},
  {lat: 16.421821, lng: 103.073510},
  {lat: 6.729507, lng: 4.637991},
  {lat: 8.633617, lng: 6.917518},
  {lat: 11.557164, lng: 9.129968},
  {lat: 10.255759, lng: 10.076782},
  {lat: 5.059269, lng: 6.578368},
  {lat: 6.459019, lng: 8.726381},
  {lat: 10.247829, lng: 5.844279},
  {lat: 14.082638, lng: -12.967991},
  {lat: -23.895216, lng: 22.951632},
  {lat: -21.052597, lng: 22.406531},
  {lat: 26.712390, lng: 81.180820},
  {lat: 10.951219, lng: 77.738927},
  {lat: 15.362666, lng: 75.290957},
  {lat: 19.805806, lng: 84.350937},
  {lat: 26.607672, lng: 74.988390},
  {lat: 25.915026, lng: 72.872285},
  {lat: 26.893873, lng: 70.922363},
  {lat: 24.532849, lng: 90.401465},
  {lat: 23.254957, lng: 90.971388},
  {lat: 22.469191, lng: 91.725114},
  {lat: 22.661309, lng: 90.260861},
  {lat: 25.941152, lng: 88.545163},
  {lat: 23.921707, lng: 90.696985},
  {lat: 18.025972, lng: 102.678700},
  {lat: 17.969354, lng: 102.608448},
  {lat: 19.875599, lng: 102.135527},
  {lat: 19.885439, lng: 102.136853},
  {lat: 15.116944, lng: 105.819269},
  {lat: 24.457303, lng: 121.393284},
  {lat: -40.506146, lng: -67.286279},
  {lat: -35.652707, lng: -61.389215},
  {lat: -26.701035, lng: -54.213890},
  {lat: -52.839219, lng: -70.972939},
  {lat: -40.711460, lng: -63.634424},
  {lat: -34.702095, lng: -55.921115},
  {lat: -33.332148, lng: -56.500929},
  {lat: -32.151401, lng: -57.942683},
  {lat: -32.773356, lng: -53.734414},
  {lat: -34.276703, lng: -54.006104},
  {lat: 5.716398, lng: -73.374893},
  {lat: 6.720467, lng: -75.987021},
  {lat: 2.542126, lng: -72.651726},
  {lat: 2.523160, lng: -76.549246},
  {lat: -2.775972, lng: -79.260473},
  {lat: -2.316687, lng: -80.591902},
  {lat: 0.512101, lng: -77.887676},
  {lat: -6.029110, lng: -79.138904},
  {lat: -13.087451, lng: -74.221945},
  {lat: -13.339715, lng: -70.330781},
  {lat: -17.003758, lng: -65.587106},
  {lat: -17.584621, lng: -62.442404},
  {lat: -23.803542, lng: -70.315744},
  {lat: -30.175232, lng: -52.328247},
  {lat: -12.319400, lng: -42.581904},
  {lat: -13.777927, lng: -56.059852},
  {lat: -13.683205, lng: -41.902831},
  {lat: -7.370747, lng: -63.198234},
  {lat: 23.176230, lng: -102.828253},
  {lat: 20.286486, lng: -89.383330},
  {lat: 24.627960, lng: -107.262171},
  {lat: 17.338455, lng: -95.973564},
  {lat: 30.138354, lng: -107.559444},
  {lat: 16.218777, lng: -89.438251},
  {lat: 14.492555, lng: -91.407999},
  {lat: 15.429479, lng: -91.732500},
  {lat: 14.558667, lng: -89.451197},
  {lat: 19.503275, lng: -70.748888},
  {lat: 19.447295, lng: -70.643147},
  {lat: 18.502510, lng: -69.958124},
  {lat: 18.417802, lng: -66.243942},
  {lat: 51.221885, lng: 17.327096},
  {lat: 30.603213, lng: 34.869360},
  {lat: 48.871967, lng: 29.095624},
  {lat: 49.628154, lng: 25.301811},
  {lat: -41.299074, lng: 173.572529},
  {lat: -45.893593, lng: 169.636851},
  {lat: -39.376253, lng: 176.811959},
  {lat: -41.114972, lng: 175.232189},
  {lat: -38.174659, lng: 145.975010},
  {lat: -35.718457, lng: 143.107379},
  {lat: -34.851423, lng: 147.621120},
  {lat: -30.894889, lng: 151.155182},
  {lat: -31.563841, lng: 143.382502},
  {lat: -25.445293, lng: 148.641660},
  {lat: -23.395664, lng: 144.215785},
  {lat: -24.535179, lng: 139.567777},
  {lat: -14.476661, lng: 132.366003},
  {lat: -23.969465, lng: 133.700983},
  {lat: -33.209438, lng: 136.212442},
  {lat: -35.380080, lng: 139.565473},
  {lat: -32.744654, lng: 115.749301},
  {lat: -18.751197, lng: 126.239172},
  {lat: -32.353377, lng: 124.809614},
  {lat: 42.569903, lng: -113.521460},
  {lat: 45.918973, lng: -108.215277},
  {lat: 40.929009, lng: -117.434177},
  {lat: 42.572446, lng: -88.865136},
  {lat: 32.775573, lng: -86.569536},
  {lat: 47.036101, lng: -76.534898},
  {lat: 48.999256, lng: -73.305298},
  {lat: 49.457620, lng: -91.815766},
  {lat: 47.333724, lng: -84.614578},
  {lat: 49.900836, lng: -99.705854},
  {lat: 50.462861, lng: -106.491481},
  {lat: 52.710591, lng: -108.166960},
  {lat: 50.644147, lng: -112.026998},
  {lat: 49.362798, lng: -121.557893},
  {lat: 54.065049, lng: -124.950014},
  {lat: 44.835575, lng: -63.789708},
  {lat: 46.327416, lng: -63.019118},
  {lat: 53.133529, lng: -62.095484},
  {lat: 63.713496, lng: -137.661552},
  
]



function rounding(number, increment, offset) {
  return Math.round((number - offset) / increment ) * increment + offset;
}


let round = 1

let totalscore = 0

let guesses = []

let oppGuessed = false

let distmap

let time

let placedMarker = false

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  
function calcDistance(mk1, mk2) {
  return google.maps.geometry.spherical.computeDistanceBetween (mk1, mk2) / 1000;
}


function guess() {
  document.getElementById("mappano").style.display = "block"
   document.getElementById("distancemap").style = "display:none;width:100%;height:100%;"
   document.getElementById("bigmap").style =   "height: 100%; width: 100%;  position: fixed; top: 0%;  left: 0%;"
   
}

function results(score) {
  document.getElementById("mappano").style.display = "none"
   document.getElementById("distancemap").style = "display:block;width:100%;height:100%;"
   document.getElementById("bigmap").style =   "height: 100%; width: 100%;  position: fixed; top: 0%;  left: 0%;"
   document.getElementById("score").innerText = score.toString()
}

let interval

//google.maps.event.addDomListener(window, 'load', initialise);

function initialize() {
  fetch("locations.txt")
  .then((res) => res.text())
  .then((text) => {
    positions = text
    positions = positions.split("\n")
    for(let i = 0; i < positions.length; i++) {
      //console.log(positions[i])
      positions[i].slice(1);
      positions[i].slice(0, -1);
      //console.log(positions[i])
      positions[i] = positions[i].replaceAll("'", "")
      //console.log(positions[i])
      positions[i] = positions[i].replace("[", "")
      positions[i] = positions[i].replace("]", "")
      let arr5 = positions[i].split(",")
      positions[i] = {lat: parseFloat(arr5[1]), lng: parseFloat(arr5[0])}
      /*console.log(positions[i])
      console.log(arr5)
      console.log(parseFloat(arr5[0]))*/
    }


  console.log(positions)



  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const isCustomMap = urlParams.get('isCustomMap')
  const isTimer = urlParams.get('timer')
  const timerTime = urlParams.get('time')

// ******************     <TIMER>    *********************

  function timerEnded()  {
    clearInterval(interval)
    time = parseInt(timerTime)
    console.log("Timer ended!")
    console.log("Interval: " + interval.toString())
    if (document.getElementById("distancemap").style != "display:block;width:100%;height:100%;") {
    
    onbtnclicked(true)
    }
  }


  function countDown() {
    if (time > 0) {
    time -= 1
    } else {
      timerEnded()
    }
    document.getElementById("timer").innerText = time.toString()

  }

  if (isTimer == "true") {

    time = parseInt(timerTime)
    console.log("Started timer from the initialize() function!")
    interval = setInterval(countDown, 1000)
    
    console.log("init interval: " + interval)
    document.getElementById("timer").innerText = time.toString()
  }

 

// ******************     </TIMER>    *********************

  if (isCustomMap == "true") {
    console.log("Yes")
    var customMap = urlParams.get('customMap')
    var arr = []
    positions = []
    
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

      positions.push({lat: int1, lng: int2})
    }
    console.log(positions)
  }






  
  
var firstFrame = true
var panpos = positions[randomIntFromInterval(0, positions.length)];
console.log("panpos", panpos)




//const panpos = randomStreetView.getRandomLocations(1)
//console.log(panpos)
  const centered = {lat: 0, lng: 0}

  map = new google.maps.Map(document.getElementById("map"), {
    center: centered,
    zoom: 2,
    disableDefaultUI: true,
  });
  var panorama = new google.maps.StreetViewPanorama(
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

console.log(panorama.getPov())

  map.setStreetView(panorama);
  map.addListener("click", (mapsMouseEvent) => {
    var latlng = mapsMouseEvent.latLng
    var marker = new google.maps.Marker({
      position: latlng,
      map,
      title: "Your guess",
    })
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null)
      markers.splice(i, 1)
    }
    markers.push(marker)
    console.log(panorama.getPov())
    placedMarker = true
  })

// ***************     <COMPASS>    *************************************
  google.maps.event.addListener(panorama, 'pov_changed', function() {
    //console.log(panorama.getPov())
    
    pov = panorama.getPov()
    dir = Math.floor(pov.heading)
    text = document.getElementById("compass")
    roundedNum = rounding(dir, 90, 0)
    originText = dir.toString() + " "

      
    if (roundedNum == 90) {
      text.innerText = originText + "East"
    } else if(roundedNum == 180) {
      text.innerText = originText + "South"
    } else if (roundedNum == 270) {
      text.innerText = originText + "West"
    } else {
      text.innerText = originText + "North"
    }

  })
// *************** </COMPASS> *************************************
  document.getElementById("round").innerText = "Round: " + round.toString()




 

function onbtnclicked(timeEnded) {
  clearInterval(interval)
  distmap = new google.maps.Map(document.getElementById("bigmap"), {
    center : centered,
    zoom : 2,
    disableDefaultUI: true,
  })

  var score

  if (placedMarker) {
  document.getElementById("round").innerText = "Round: " + round.toString()
  var distance = calcDistance(markers[0].position, panpos)
  guessed = true
  score = parseInt((5000 - (distance)).toFixed(0))
  if (score < 0) {
    score = 0 
  }
  totalscore += score

  console.log(score)
  console.log(totalscore)

  
  var yourpos = new google.maps.Marker({
    position: markers[0].position,
    map: distmap,
    title: "Your position",

    
  })

  var corpos = new google.maps.Marker({
    position: panpos,
    map: distmap,
    icon : "flag.png",
    title: "Correct position",
  })

  var line = new google.maps.Polyline({
    path: [yourpos.position, corpos.position],
    geodesic: false,
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  })  
  line.setMap(distmap)
  guesses.push({"guesspos" : markers[0].position, "corpos" : panpos})

  document.getElementById("distance").innerText = "You were " + distance.toFixed(1) + " kilometers away."

  } else if ((!placedMarker && isTimer != 'true') || (!placedMarker && isTimer == 'true' && !timeEnded)) {
    return
  } else if (!placedMarker && isTimer == 'true' && timeEnded) {
    var corpos = new google.maps.Marker({
      position: panpos,
      map: distmap,
      icon : "flag.png",
      title: "Correct position",
    })
    document.getElementById("distance").innerText = "You didn't guess!"
    score = 0
    guesses.push({"guesspos" : null, "corpos" : panpos})

  }

  results(score)


  
  console.log("Placed markers!")
  


  
  

  function onnextclicked() {
    map.setZoom(2);
    if (markers[0]) {
    markers[0].setMap(null)
    }
    markers = []
    if (line) {
    line.setMap(null)
    }
    placedMarker = false

    round += 1
    if (round <= 5) {
    panpos = positions[randomIntFromInterval(0, positions.length)];
    panorama.setPosition(panpos)
    document.getElementById("round").innerText = "Round: " + round.toString()
    guess()
    guessed = false

    time = parseInt(timerTime)
    console.log("Started timer from the onnextclicked() function!")
    interval = setInterval(countDown, 1000)
    console.log("clicked interval: " + interval)
    
    } else {
    document.getElementById("score").innerHTML = totalscore.toString()
    document.getElementById("distance").innerHTML = ""
    for(let i = 0; i < guesses.length; i++) {
      if (guesses[i]["guesspos"]) {
      var yourmarker = new google.maps.Marker({
        position : guesses[i]["guesspos"],
        map: distmap,
        title: "Your position",
      })
    }
      var cormarker = new google.maps.Marker({
        position: guesses[i]["corpos"],
        map: distmap,
        icon: "flag.png",
        title: "Correct position",
        
      })
      if (guesses[i]["guesspos"]) {
      var newline = new google.maps.Polyline({
        path: [guesses[i]["guesspos"], guesses[i]["corpos"]],
        geodesic: false,
        strokeColor: '#000000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      })
      newline.setMap(distmap)
    }
    }
    let unparsedPb = window.localStorage.getItem('pb')
    let pb = parseInt(window.localStorage.getItem('pb'))
    if (isCustomMap != "true") {
    if (totalscore > pb || unparsedPb == null) {
      console.log("New pb!")
      pb = totalscore 
      window.localStorage.setItem('pb', pb)
      document.getElementById("pb").innerText = "Personal best: " + pb.toString() + "\n New record!"
    } else {
      document.getElementById("pb").innerText = "Personal best: " + pb.toString()
      console.log("No new pb")
    }
    
    }
  }

  }
document.getElementById("nextbtn").onclick = onnextclicked
} 
document.getElementById("guessbtn").onclick = btnclickedbefore
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 32) {
    guessed = true
    console.log(getComputedStyle(document.getElementById("guessbtn")).display)
    if (getComputedStyle(document.getElementById("mappano")).display == "block" || getComputedStyle(document.getElementById("mappano")).display == "inline-block") {
      onbtnclicked(false)
    }
  }
})

})

.catch((e) => console.error(e));
window.scrollTo(0, document.body.scrollHeight)
document.getElementById("map").style = "position: fixed;"
google.maps.event.trigger(map, "resize");
document.getElementById("pano").style = "position: fixed;"

/*google.maps.event.addListener(map, 'tilesloaded', function() {
  document.getElementById('map').style.position = 'fixed';
  document.getElementById('pano').style.position = 'fixed';
});
google.maps.event.addListener(panorama, 'tilesloaded', function(){
  document.getElementById('map').style.position = 'fixed';
  document.getElementById('pano').style.position = 'fixed';
});*/
}



function btnclickedbefore() {
  onbtnclicked(false)
}

window.onload = function() {
  document.getElementById("pano").style = "position: fixed;"
  document.getElementById("map").style = "position: fixed;"
  window.scrollTo(0, document.body.scrollHeight)

}
//window.initMap = initMap;
//window.initialize = initialize;
