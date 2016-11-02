var route2 = {
  templateUrl : 'app/components/cross-route-communication/route2/route2.html',
  controller: Route2Controller,
  bindings: {
    message: '<'
  }
}

angular.module('root')
  .component('route2', route2);