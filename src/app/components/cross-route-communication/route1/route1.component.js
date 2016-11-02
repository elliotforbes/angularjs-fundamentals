var route1 = {
  templateUrl : 'app/components/cross-route-communication/route1/route1.html',
  controller: Route1Controller,
  bindings: {
    message: '<'
  }
}

angular.module('root')
  .component('route1', route1);