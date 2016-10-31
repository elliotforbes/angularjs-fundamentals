function NgClickController($log) {
  var ctrl = this;

  ctrl.counter = 0;

  ctrl.myOnClickFunction = function() {
    $log.log("Hello World!");
    ctrl.counter++;
  }

}

NgClickController.$inject = ['$log'];

angular.module('root')
  .controller('NgClickController', NgClickController);
