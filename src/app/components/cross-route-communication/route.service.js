function RouteService($log) {

  var RouteService = {};

  var storage = [];

  RouteService.store = function(object) {
    $log.log(object);
    this.storage = object;
    $log.log(this.storage);
  }

  RouteService.getStore = function() {
    return this.storage;
  }


  return RouteService;
}

RouteService.$inject = ['$log'];

angular.module('root')
  .factory('RouteService', RouteService);