/*
* The idea here is that you have private methods which you want to expose as public methods.
* What are doing below is effectively difining a self-executing function and immediately returning.
*
* Tests with
* myRevealingModule.get();* 
* @author: Addy Osmani
*/
"use strict;"
var myRevealingModule = (function() {
  var name = "Alex Good";
  var age = 25;
  function updatePerson() {
    name = "Alex Good update"
  }
  function setPerson() {
    name = "Alex Better";
  }
  function getPerson() {
    return name;
  }
  return {
    get: getPerson,
    set: setPerson
  }
})();
