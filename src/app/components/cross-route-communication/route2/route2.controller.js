function Route2Controller($log, RouteService) {
  var ctrl = this;

  ctrl.storage = [];

  this.$onInit = function() {
    ctrl.storage = RouteService.getStore();
  }

  ctrl.store = function(object) {
    RouteService.store(object);
  }

}

Route2Controller.$inject = ['$log', 'RouteService'];

angular.module('root')
  .controller('Route2Controller', Route2Controller);