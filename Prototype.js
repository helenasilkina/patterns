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

someCar.prototype.getName = function() {
  return this.name;
}

someCar.prototype.setName = function(newName) {
  this.name = newName;
}
