function NgKeyDownController($log) {
  var ctrl = this;

  ctrl.counter = 0;

  ctrl.performAction = function() {
    ctrl.counter++;
  }

}

NgKeyDownController.$inject = ['$log'];

angular.module('root')
  .controller('NgKeyDownController', NgKeyDownController);
