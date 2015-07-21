/*
* Tests
* var civic = new Car("Honda Civic", 2009, 20000);
* var civic = new Car("Ford Mondeo", 2010, 5000);
*/

"use strict";
var Car = (function(){
  var Car= function(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  };
  return function(model, year, miles) {
    return new Car(model, year, miles); 
  };
})();
