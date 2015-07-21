/*
* Tests
* var myMacbook = new Insurance(new BlurayDrive(new Memory(new Mackbook())));
* console.log(myMackbook.cost());
*/

"use strict";
function Macbook() {
  this.cost = function() {
    return 1000;
  }
}

function Memory(macbook) {
  this.cost = function() {
    return macbook.cost() + 75;
  }
}

function BlurayDrive(macbook) {
  this.cost = function() {
    return macbook.cost() + 300;
  }
}

function Insurance(macbook) {
  this.cost = function() {
    return macbook.cost() + 100;
  }
}


