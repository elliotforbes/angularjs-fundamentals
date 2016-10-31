function AllController($log) {
  var ctrl = this;

  ctrl.performAction = function() {
    ctrl.counter++;
  }

}

AllController.$inject = ['$log'];

angular.module('root')
  .controller('AllController', AllController);