// HI VANESSA THIS FILE HAS CHANGED

var aggToPct = function(agg) {
  return -220292 
  + 15453.5 * agg 
  - 432.364 * Math.pow(agg, 2) 
  + 6.02704 * Math.pow(agg, 3) 
  - 0.0418341 * Math.pow(agg, 4) 
  + 0.000115637 * Math.pow(agg, 5);
}
var gaussian = function(mean, variance){ return new Gaussian(mean, variance); };

var internz = gaussian(3.5, 1.0); 
  document.getElementById("twoStep").onclick = function() {

};
var calcZScoreFromPercentile = function() {
  if (document.getElementById("pile").value === "" || isNaN(document.getElementById("pile").value)) {
    document.getElementById("results").innerHTML = "invalid percentile input";
  } else {
  var score = internz.ppf(parseFloat(document.getElementById("pile").value * 0.01));
  document.getElementById("results").innerHTML = "zScore: " + (Math.round(score * 100) / 100).toString();
  }
};

document.getElementById("oneStep").onclick = calcZScoreFromPercentile;

document.getElementById("twoStep").onclick = function() {
  var agg = parseFloat(document.getElementById("med2").value)
  + (2 * parseFloat(document.getElementById("med4").value));
  agg = agg / 3;
  var res = Math.round(aggToPct(agg) * 100) / 100;
  res = res < 1 ? 1 : res;
  res = res > 99 ? 99.5 : res;
  document.getElementById("pile").value = res;
  if (isNaN(res)) {
    document.getElementById("results").innerHTML = "invalid mark input";
  } else {
    calcZScoreFromPercentile();
  }
}
