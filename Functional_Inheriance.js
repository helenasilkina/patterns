/*
* @author Raffaele Cecco 
* @source "Supercharged Javascript Graphics"
*
* У Функционального наследования нет преимущества в применении памяти, у чем наследования через прототипы 
* (свойства и методы прототипа сохраняются лишь однажды, независимо сколько раз от них происходит наследоание).
* Это обстоятельство может представлять проблему, если вы создаете многочисленные экземпляры крупных объектов (возможно, тысячи)
* и для вас критичен объем потребляемой памяти. Одно из решений такой проблемы - сохранять любые крупные объекты или методы в объекте,
* а потом передавать этот объект функциям конструктора в качестве аргумента.
* После этого все экземпляры смогут использовать один и тот же обектный ресурс, не создавая при этом собственной версии объекта.
*
* Tests with:
* var petCat = cat('Maxik'),
*     details = petCat.getDetails(),
*     action = petCat.action();
* 
* petCat.name = 'Murzik';
* petCat.legs = 3;
* console.log(details);
* console.log(petCat.getDetails());
*/

var pet = function (name, legs) {
  var that = {
    name: name,
    getDetails: function () {
      return this.name + ' has ' + legs + ' legs'; 
    }
  };
  return that;
};

var cat = function (name) {
  var that = pet(name, 4);
  that.action = function () {
    return 'Catch a bird';
  };
  return that;
};
