function routeTestProvider($routeProvider){
    $routeProvider
      .when('/route1', {
          template: '<route1></route1>'
      })
      .when('/route2', {
          template: '<route2></route2>'
      });
}
routeTestProvider.$inject = ['$routeProvider'];

angular.module('root')
  .config(routeTestProvider);
