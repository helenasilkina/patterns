/*
** Copy any objects, mixing their properties in new object 
*
* Tests
* var cake = mix{
*   {eggs: 2, large: true},
*   {butter: 1, salted: true},
*   {flour: "3 cups"},
*   {sugar: "sure!"}
* }
*
* mixin(cake);
*/
"use strict;"
function mixin() {
  var child = {};
  for (var i = 0; arg < arguments.length; i++) {
    for ( var property in arguments[i]) {
      if (arguments[i].hasOwnproperty(property)) {
        child[property] = arguments[i][property];
      }
    }
  }
  return child;
}

// from Addy Asmani patterns book
// Define a simple Car constructor
var Car = function ( settings ) {
    this.model = settings.model || "no model provided";
    this.color = settings.color || "no colour provided";
};
 
// Mixin
var Mixin = function () {};
Mixin.prototype = {
    driveForward: function () {
        console.log( "drive forward" );
    },
    driveBackward: function () {
        console.log( "drive backward" );
    },
    driveSideways: function () {
        console.log( "drive sideways" );
    }
};
 
// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}
 
// Augment the Car constructor to include "driveForward" and "driveBackward"
augment( Car, Mixin, "driveForward", "driveBackward" );
 
// Create a new Car
var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});
 
// Test to make sure we now have access to the methods
myCar.driveForward();
myCar.driveBackward();
 
// Outputs:
// drive forward
// drive backward
 
// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment( Car, Mixin );
 
var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});
 
mySportsCar.driveSideways();
