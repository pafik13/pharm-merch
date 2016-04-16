var $sbl = (function() {
    var module = {};
    // All functions now have direct access to each other
    module.getMonday = getMonday;
    module.getSunday = getSunday;

    function getMonday(d) {
      var date = new Date(d),
           day = date.getDay(),
          diff = date.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
      return new Date(date.setDate(diff));
    };

    function getSunday(d) {
      var date = new Date(d),
           day = date.getDay(),
          diff = date.getDate() - day + (day == 0 ? 0:7); // adjust when day is sunday
      return new Date(date.setDate(diff));
    };
    // Return the object that is assigned to Module
    return module;
}());