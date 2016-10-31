function NgChangeController($log){
  var ctrl = this;

  ctrl.counter = 0;

  ctrl.performAction = function() {
    $log.log("Perform some action on ng-change");
    ctrl.counter++;
  }

}

NgChangeController.$inject = ['$log'];

angular.module('root')
  .controller('NgChangeController', NgChangeController);