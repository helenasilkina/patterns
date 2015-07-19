/* 
* Паттерн "Модуль" позволяет создавать класс, инкапсулирующий методы и свойства.
* 
* Tests with:
* someModule.getData();
*
* @author: Addy Osmani
*/

var someModule = (function() {
  var privateVar = 5;
  var privateMethod = function() {
    return "This is Private method"
  }
  
  return {
     publicVar: 10,
     publicMethod: function() {
      return "Followed by Public test"
     },
     // let's access the private members
     getData: function() {
      return privateMethod() + this.publicMethod() + privateVar;
     }
  }
})();
