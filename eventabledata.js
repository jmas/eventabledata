define('eventabledata', ['eventable'], function(eventable) {
  
  var EventableData = function(o) { this.o = o; };

  eventable(EventableData.prototype);

  EventableData.prototype.o = null;

  EventableData.prototype.toJSON = function() {
    return this.o;  
  };

  EventableData.prototype.set = function(key, value) {
    this.o[key] = value;
    this.fire('set', [key, value]);
  };

  EventableData.prototype.get = function(key) {
    this.fire('get', [key, this.o[key] || null]);
    return this.o[key] || null;
  };

  return EventableData;
});