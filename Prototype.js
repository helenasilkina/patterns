/*
*
* Tests with
* var anotherCar = Object.create(someCar);
* anotherCar.name = "Blue Ray"
*/
"use strict";
var someCar = {
  drive: function() {
    console.log('I can drive');
  },
  name: "Sunrise"
}
