(function() {
'use strict';

angular.module('Scribe').provider('settings', User);

function User() {
  var goodreadsId, 
      apiUrl = 'http://api.'+window.location.host;
  return {
    setId: function (value) {
      goodreadsId = value;
    },
    setApiUrl: function(value) {
      apiUrl = value;
    },
    $get: function () {
      return {
        id: goodreadsId,
        apiUrl: apiUrl
      };
    }
  };
}

}());
