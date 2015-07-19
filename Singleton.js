/*
* Test with:
* var singleton = SingletonTester.getInstance({pointX: 5});
* console.log(singleton.pointX);
*/

var SingletonTester =  (function() {
  function singleton(args) {
    var args = args || {};
    this.name = "Singleton";
    this.pointX = args.pointX || 0;
    this.pointY = args.pointY || 0;
  }
  var instance;
  var _static = {
    name: "Singleton",
    getInstance: function(args) {
      if (instance === undefined) {
        instance = new Singleton(args);
      }
      return instance;
    }
  }
  return _static;
})(); 
