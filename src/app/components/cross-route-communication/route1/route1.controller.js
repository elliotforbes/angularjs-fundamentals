function Route1Controller($log, RouteService) {
  var ctrl = this;

  ctrl.storage = [];

  this.$onInit = function() {
    ctrl.storage = RouteService.getStore();
  }

  ctrl.store = function(object) {
    RouteService.store(object);
  }

}

Route1Controller.$inject = ['$log', 'RouteService'];

angular.module('root')
  .controller('Route1Controller', Route1Controller);