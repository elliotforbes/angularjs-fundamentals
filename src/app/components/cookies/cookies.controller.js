function CookieController($log, $scope, $cookies) {
  var ctrl = this;

  ctrl.$onInit = function() {
    $log.log("Initialized cookie page");
    ctrl.storedCookie = $cookies.get("favourite");
    $log.log(ctrl.storedCookie);  
  };

  ctrl.storeCookie = function(cookie) {
    $log.log(cookie);
    $cookies.put('favourite', cookie);
  };


}

CookieController.$inject = ['$log', '$scope', '$cookies'];

angular.module('root')
  .controller('CookieController', CookieController);