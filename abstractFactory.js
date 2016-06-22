// source: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript

/*
Test:

abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );
 
// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {color: "lime green", state: "like new" } );
 
// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", { wheelSize: "medium", color: "neon yellow" } );
*/

var abstractVehicleFactory = (function () {
  var types = {};
  
  return {
      getVehicle: function ( type, customizations ) {
          var Vehicle = types[type];
          return (Vehicle ? new Vehicle(customizations) : null);
      },
      registerVehicle: function ( type, Vehicle ) {
          var proto = Vehicle.prototype;
          if ( proto.drive && proto.breakDown ) {
              types[type] = Vehicle;
          }
          
          return abstractVehicleFactory;
      }
  };
})();
