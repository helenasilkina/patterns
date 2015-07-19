/*
* Tests:
* var civic = new Car("Honda Civic", 2009, 20000);*
*/


function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.whatCar = function() {
    console.log(this.model);
  }
}
