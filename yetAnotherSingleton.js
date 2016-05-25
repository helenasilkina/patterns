var yetAnotherSingleton = (function () {
 
  var instance;
 
  function init() {

    function privateMethod(){
        console.log( "I am private" );
    }
 
    var privateVariable = "Im also private";

    return {
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
 
      publicProperty: "I am also public"
    };
 
  };
 
  return {
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
 
})();
