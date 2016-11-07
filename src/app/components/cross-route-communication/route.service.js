function StorageService($log) {

  var StorageService = {};

  var storage = [];

  StorageService.store = function(object) {
    $log.log(object);
    this.storage = object;
    $log.log(this.storage);
  }

  StorageService.getStore = function() {
    return this.storage;
  }


  return StorageService;
}

StorageService.$inject = ['$log'];

angular.module('root')
  .factory('StorageService', StorageService);