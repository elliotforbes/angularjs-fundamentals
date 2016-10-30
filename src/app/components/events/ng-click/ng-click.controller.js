function NgClickController($log) {
  var ctrl = this;

  ctrl.myOnClickFunction = function() {
    $log.log("Hello World!");
  }

}

NgClickController.$inject = ['$log'];

angular.module('root')
  .controller('NgClickController', NgClickController);
