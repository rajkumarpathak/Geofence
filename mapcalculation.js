//Random lat long
var lat1 = '';
var lon1 = '';
var lat2 = '';
var lon2 = '';

//Calculate two lat long in meters
var distanceInMeters = distance(lat1, lon1, lat2, lon2);
console.log(distanceInMeters);

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371e3; // radius of Earth in meters
  var phi1 = lat1 * Math.PI / 180;
  var phi2 = lat2 * Math.PI / 180;
  var deltaPhi = (lat2-lat1) * Math.PI / 180;
  var deltaLambda = (lon2-lon1) * Math.PI / 180;

  var a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
          Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}
