// See also Links:
// Ben Alman's Pub/Sub gist https://gist.github.com/661855 (recommended)
// Rick Waldron's jQuery-core style take on the above https://gist.github.com/705311
// Peter Higgins" plugin http://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js.
// AppendTo's Pub/Sub in AmplifyJS http://amplifyjs.com
// Ben Truyman's gist https://gist.github.com/826794

// source: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#introduction
// model the list of dependent Observers

function ObserverList(){
  this.observerList = [];
}
 
ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};
 
ObserverList.prototype.count = function(){
  return this.observerList.length;
};
 
ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};
 
ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
 
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};
 
ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};

// model the Subject and the ability to add, remove or notify observers on the observer list
function Subject(){
  this.observers = new ObserverList();
}
 
Subject.prototype.addObserver = function( observer ){
  this.observers.add( observer );
};
 
Subject.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};
 
Subject.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
  
// The Observer
function Observer(){
  this.update = function(){
    // ...
  };
}
};
