function routeProvider($routeProvider){
    $routeProvider
      .when('/', {
          template: '<home></home>'
      })
      .when('/cookies', {
        template: '<cookies></cookies>'
      });
}
routeProvider.$inject = ['$routeProvider'];

angular.module('root')
  .config(routeProvider);
