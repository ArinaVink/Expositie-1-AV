var gaugeOptions = {
  angle: 0, // The span of the gauge arc
  lineWidth: 0.7, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#FFFFFF',   // Colors
  colorStop: '#db0000',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support

};
var gaugeWrapper = document.getElementById('gaugeWrapper'); // your canvas element
var gaugeChart = new Gauge(gaugeWrapper).setOptions(gaugeOptions); // create sexy gauge!
gaugeChart.maxValue = 3000; // set max gauge value
gaugeChart.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gaugeChart.animationSpeed = 30; // set animation speed (32 is default value)

// var counter = 0;

//function counter(){
//  value: getRandomInt(0, 3000);
//    min: 0;
//    max: 3000;
//}
//timer die functie aanroep, die een int terug geeft (meer of minder of random)


gaugeChart.set(2500); // set actual value
