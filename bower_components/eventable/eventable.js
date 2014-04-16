define('eventable', function() {
  var eventable = function(o) {
    var handlers = {};
    
    o.on = function(event, handler) {
      if (! handlers[event]) {
        handlers[event] = [];
      }
      
      handlers[event].push(handler);
    };
    
    o.fire = function(event, args, ctx) {
      ctx = ctx || null;
      
      if (handlers[event]) {
        var i, len;
        
        for (i=0, len=handlers[event].length; i<len; i++) {
          if (handlers[event][i] instanceof Function) {
            handlers[event][i].apply(ctx, args);
          }
        }
      }
    };
    
    return o;
  };

  return eventable;
});