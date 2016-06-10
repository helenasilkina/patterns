"use strict";
var addMyEvent = function (el, ev, fn) {
  if (el.addEventListener {
    el.addEventListener(ev, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent('on'+ev, fn);
  } else {
    el['on'+ev] = fn;
  }
};

// another Facade implementation
var Facade = (function() {
    var _private = {
        index: 0,
        get: function() {
            return index;
        },
        set: function( value ) {
            this.index = value;
        }
    };
    
    return {
        methods: function( args ) {
            _private.set(args.val);
            _private.get();
        }
    };
}());
 
Facade.methods( {value: 10} );
