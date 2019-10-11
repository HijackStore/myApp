var myApp = (function() {
  var id= 0;
  return {
    next: function() {
      return id++;
    },
    reset: function() {
      id = 0;     
    }
  };  
})();
