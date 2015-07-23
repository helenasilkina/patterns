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
