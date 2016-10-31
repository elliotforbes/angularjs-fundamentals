function NgDblClickController($log) {
  var ctrl = this;

  ctrl.counter = 0;

  ctrl.performAction = function() {
    $log.log("Hello World!");
    ctrl.counter++;
  }

}

NgDblClickController.$inject = ['$log'];

angular.module('root')
  .controller('NgDblClickController', NgDblClickController);
