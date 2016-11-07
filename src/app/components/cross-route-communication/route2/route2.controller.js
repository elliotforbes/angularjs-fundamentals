function Route2Controller($log, StorageService) {
  var ctrl = this;

  ctrl.storage = [];

  this.$onInit = function() {
    ctrl.storage = StorageService.getStore();
  }

  ctrl.store = function(object) {
    StorageService.store(object);
  }

}

Route2Controller.$inject = ['$log', 'StorageService'];

angular.module('root')
  .controller('Route2Controller', Route2Controller);