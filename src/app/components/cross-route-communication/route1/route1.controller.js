function Route1Controller($log, StorageService) {
  var ctrl = this;

  ctrl.storage = [];

  this.$onInit = function() {
    ctrl.storage = StorageService.getStore();
  }

  ctrl.store = function(object) {
    StorageService.store(object);
  }


}

Route1Controller.$inject = ['$log', 'StorageService'];

angular.module('root')
  .controller('Route1Controller', Route1Controller);