angular.module('root', [
  'ngRoute',
  'ngCookies'
]);
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

var topNav = {
    templateUrl: './app/common/top-nav/top-nav.html'
}

angular.module('root')
    .component('topNav', topNav);

var cookies = {
  templateUrl: './app/components/cookies/cookies.html',
  controller: CookieController,
  bindings: {
    storedCookie: '=?',
    cookie: '<'
  }
}

angular.module('root')
  .component('cookies', cookies);
function CookieController($log, $scope, $cookies) {
  var ctrl = this;

  ctrl.$onInit = function() {
    $log.log("Initialized cookie page");
    ctrl.storedCookie = $cookies.get("favourite");
    $log.log(ctrl.storedCookie);  
  };

  ctrl.storeCookie = function(cookie) {
    $log.log(cookie);
    $cookies.put('favourite', cookie);
  };


}

CookieController.$inject = ['$log', '$scope', '$cookies'];

angular.module('root')
  .controller('CookieController', CookieController);
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
var home = {
  templateUrl: 'app/components/home/home.html',
  controller: HomeController,
}

angular.module('root')
  .component('home', home);
function HomeController(){
  var ctrl = this;
}

angular.module('root')
  .controller('HomeController', HomeController);
var route1 = {
  templateUrl : 'app/components/cross-route-communication/route1/route1.html',
  controller: Route1Controller,
  bindings: {
    message: '<'
  }
}

angular.module('root')
  .component('route1', route1);
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
var route2 = {
  templateUrl : 'app/components/cross-route-communication/route2/route2.html',
  controller: Route2Controller,
  bindings: {
    message: '<'
  }
}

angular.module('root')
  .component('route2', route2);
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
var allComponent = {
  templateUrl: 'app/components/events/all/all.html',
  controller: AllController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('allComponent', allComponent);

function AllController($log) {
  var ctrl = this;

  ctrl.performAction = function() {
    ctrl.counter++;
  }

}

AllController.$inject = ['$log'];

angular.module('root')
  .controller('AllController', AllController);
var ngChangeComponent = {
  templateUrl: 'app/components/events/ng-change/ng-change.html',
  controller: NgChangeController,
  bindings: {
    input: '<',
    counter: '<'
  }
}

angular.module('root')
  .component('ngChangeComponent', ngChangeComponent);
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
var ngClickComponent = {
  templateUrl: 'app/components/events/ng-click/ng-click.html',
  controller: NgClickController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('ngClickComponent', ngClickComponent);

function NgClickController($log) {
  var ctrl = this;

  ctrl.counter = 0;

  ctrl.myOnClickFunction = function() {
    $log.log("Hello World!");
    ctrl.counter++;
  }

}

NgClickController.$inject = ['$log'];

angular.module('root')
  .controller('NgClickController', NgClickController);

var ngDblClickComponent = {
  templateUrl: 'app/components/events/ng-dblclick/ng-dblclick.html',
  controller: NgDblClickController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('ngDblClickComponent', ngDblClickComponent);

function NgDblClickController($log) {
  var ctrl = this;

  ctrl.counter = 0;

  ctrl.performAction = function() {
    $log.log("Hello World!");
    ctrl.counter++;
  }

}

NgDblClickController.$inject = ['$log'];

angular.module('root')
  .controller('NgDblClickController', NgDblClickController);

var ngKeyDownComponent = {
  templateUrl: 'app/components/events/ng-keydown/ng-keydown.html',
  controller: NgKeyDownController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('ngKeyDownComponent', ngKeyDownComponent);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QubW9kdWxlLmpzIiwicm9vdC5yb3V0ZXMuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvY29va2llcy9jb29raWVzLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvY29va2llcy9jb29raWVzLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Nyb3NzLXJvdXRlLWNvbW11bmljYXRpb24vcm91dGUucm91dGVzLmpzIiwiY29tcG9uZW50cy9jcm9zcy1yb3V0ZS1jb21tdW5pY2F0aW9uL3JvdXRlLnNlcnZpY2UuanMiLCJjb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9jcm9zcy1yb3V0ZS1jb21tdW5pY2F0aW9uL3JvdXRlMS9yb3V0ZTEuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9jcm9zcy1yb3V0ZS1jb21tdW5pY2F0aW9uL3JvdXRlMS9yb3V0ZTEuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvY3Jvc3Mtcm91dGUtY29tbXVuaWNhdGlvbi9yb3V0ZTIvcm91dGUyLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvY3Jvc3Mtcm91dGUtY29tbXVuaWNhdGlvbi9yb3V0ZTIvcm91dGUyLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9hbGwvYWxsLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZXZlbnRzL2FsbC9hbGwuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWNoYW5nZS9uZy1jaGFuZ2UuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctY2hhbmdlL25nLWNoYW5nZS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctY2xpY2svbmctY2xpY2suY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctY2xpY2svbmctY2xpY2suY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWRibGNsaWNrL25nLWRibGNsaWNrLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWRibGNsaWNrL25nLWRibGNsaWNrLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1rZXlkb3duL25nLWtleWRvd24uY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmcta2V5ZG93bi9uZy1rZXlkb3duLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3Jvb3QnLCBbXG4gICduZ1JvdXRlJyxcbiAgJ25nQ29va2llcydcbl0pOyIsImZ1bmN0aW9uIHJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxob21lPjwvaG9tZT4nXG4gICAgICB9KVxuICAgICAgLndoZW4oJy9jb29raWVzJywge1xuICAgICAgICB0ZW1wbGF0ZTogJzxjb29raWVzPjwvY29va2llcz4nXG4gICAgICB9KTtcbn1cbnJvdXRlUHJvdmlkZXIuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29uZmlnKHJvdXRlUHJvdmlkZXIpO1xuIiwidmFyIHRvcE5hdiA9IHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbW1vbi90b3AtbmF2L3RvcC1uYXYuaHRtbCdcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAgIC5jb21wb25lbnQoJ3RvcE5hdicsIHRvcE5hdik7XG4iLCJ2YXIgY29va2llcyA9IHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2Nvb2tpZXMvY29va2llcy5odG1sJyxcbiAgY29udHJvbGxlcjogQ29va2llQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBzdG9yZWRDb29raWU6ICc9PycsXG4gICAgY29va2llOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ2Nvb2tpZXMnLCBjb29raWVzKTsiLCJmdW5jdGlvbiBDb29raWVDb250cm9sbGVyKCRsb2csICRzY29wZSwgJGNvb2tpZXMpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwuJG9uSW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2cubG9nKFwiSW5pdGlhbGl6ZWQgY29va2llIHBhZ2VcIik7XG4gICAgY3RybC5zdG9yZWRDb29raWUgPSAkY29va2llcy5nZXQoXCJmYXZvdXJpdGVcIik7XG4gICAgJGxvZy5sb2coY3RybC5zdG9yZWRDb29raWUpOyAgXG4gIH07XG5cbiAgY3RybC5zdG9yZUNvb2tpZSA9IGZ1bmN0aW9uKGNvb2tpZSkge1xuICAgICRsb2cubG9nKGNvb2tpZSk7XG4gICAgJGNvb2tpZXMucHV0KCdmYXZvdXJpdGUnLCBjb29raWUpO1xuICB9O1xuXG5cbn1cblxuQ29va2llQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJyRzY29wZScsICckY29va2llcyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdDb29raWVDb250cm9sbGVyJywgQ29va2llQ29udHJvbGxlcik7IiwiZnVuY3Rpb24gcm91dGVUZXN0UHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL3JvdXRlMScsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxyb3V0ZTE+PC9yb3V0ZTE+J1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvcm91dGUyJywge1xuICAgICAgICAgIHRlbXBsYXRlOiAnPHJvdXRlMj48L3JvdXRlMj4nXG4gICAgICB9KTtcbn1cbnJvdXRlVGVzdFByb3ZpZGVyLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbmZpZyhyb3V0ZVRlc3RQcm92aWRlcik7XG4iLCJmdW5jdGlvbiBTdG9yYWdlU2VydmljZSgkbG9nKSB7XG5cbiAgdmFyIFN0b3JhZ2VTZXJ2aWNlID0ge307XG5cbiAgdmFyIHN0b3JhZ2UgPSBbXTtcblxuICBTdG9yYWdlU2VydmljZS5zdG9yZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICRsb2cubG9nKG9iamVjdCk7XG4gICAgdGhpcy5zdG9yYWdlID0gb2JqZWN0O1xuICAgICRsb2cubG9nKHRoaXMuc3RvcmFnZSk7XG4gIH1cblxuICBTdG9yYWdlU2VydmljZS5nZXRTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2U7XG4gIH1cblxuXG4gIHJldHVybiBTdG9yYWdlU2VydmljZTtcbn1cblxuU3RvcmFnZVNlcnZpY2UuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5mYWN0b3J5KCdTdG9yYWdlU2VydmljZScsIFN0b3JhZ2VTZXJ2aWNlKTsiLCJ2YXIgaG9tZSA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IEhvbWVDb250cm9sbGVyLFxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ2hvbWUnLCBob21lKTsiLCJmdW5jdGlvbiBIb21lQ29udHJvbGxlcigpe1xuICB2YXIgY3RybCA9IHRoaXM7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpOyIsInZhciByb3V0ZTEgPSB7XG4gIHRlbXBsYXRlVXJsIDogJ2FwcC9jb21wb25lbnRzL2Nyb3NzLXJvdXRlLWNvbW11bmljYXRpb24vcm91dGUxL3JvdXRlMS5odG1sJyxcbiAgY29udHJvbGxlcjogUm91dGUxQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBtZXNzYWdlOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ3JvdXRlMScsIHJvdXRlMSk7IiwiZnVuY3Rpb24gUm91dGUxQ29udHJvbGxlcigkbG9nLCBTdG9yYWdlU2VydmljZSkge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5zdG9yYWdlID0gW107XG5cbiAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgY3RybC5zdG9yYWdlID0gU3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmUoKTtcbiAgfVxuXG4gIGN0cmwuc3RvcmUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBTdG9yYWdlU2VydmljZS5zdG9yZShvYmplY3QpO1xuICB9XG5cblxufVxuXG5Sb3V0ZTFDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnLCAnU3RvcmFnZVNlcnZpY2UnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignUm91dGUxQ29udHJvbGxlcicsIFJvdXRlMUNvbnRyb2xsZXIpOyIsInZhciByb3V0ZTIgPSB7XG4gIHRlbXBsYXRlVXJsIDogJ2FwcC9jb21wb25lbnRzL2Nyb3NzLXJvdXRlLWNvbW11bmljYXRpb24vcm91dGUyL3JvdXRlMi5odG1sJyxcbiAgY29udHJvbGxlcjogUm91dGUyQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBtZXNzYWdlOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ3JvdXRlMicsIHJvdXRlMik7IiwiZnVuY3Rpb24gUm91dGUyQ29udHJvbGxlcigkbG9nLCBTdG9yYWdlU2VydmljZSkge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5zdG9yYWdlID0gW107XG5cbiAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgY3RybC5zdG9yYWdlID0gU3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmUoKTtcbiAgfVxuXG4gIGN0cmwuc3RvcmUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBTdG9yYWdlU2VydmljZS5zdG9yZShvYmplY3QpO1xuICB9XG5cbn1cblxuUm91dGUyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJ1N0b3JhZ2VTZXJ2aWNlJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ1JvdXRlMkNvbnRyb2xsZXInLCBSb3V0ZTJDb250cm9sbGVyKTsiLCJ2YXIgYWxsQ29tcG9uZW50ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2V2ZW50cy9hbGwvYWxsLmh0bWwnLFxuICBjb250cm9sbGVyOiBBbGxDb250cm9sbGVyLFxuICBiaW5kaW5nOiB7XG4gICAgY291bnRlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCdhbGxDb21wb25lbnQnLCBhbGxDb21wb25lbnQpO1xuIiwiZnVuY3Rpb24gQWxsQ29udHJvbGxlcigkbG9nKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICBjdHJsLmNvdW50ZXIrKztcbiAgfVxuXG59XG5cbkFsbENvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdBbGxDb250cm9sbGVyJywgQWxsQ29udHJvbGxlcik7IiwidmFyIG5nQ2hhbmdlQ29tcG9uZW50ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2V2ZW50cy9uZy1jaGFuZ2UvbmctY2hhbmdlLmh0bWwnLFxuICBjb250cm9sbGVyOiBOZ0NoYW5nZUNvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgaW5wdXQ6ICc8JyxcbiAgICBjb3VudGVyOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ25nQ2hhbmdlQ29tcG9uZW50JywgbmdDaGFuZ2VDb21wb25lbnQpOyIsImZ1bmN0aW9uIE5nQ2hhbmdlQ29udHJvbGxlcigkbG9nKXtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwuY291bnRlciA9IDA7XG5cbiAgY3RybC5wZXJmb3JtQWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvZy5sb2coXCJQZXJmb3JtIHNvbWUgYWN0aW9uIG9uIG5nLWNoYW5nZVwiKTtcbiAgICBjdHJsLmNvdW50ZXIrKztcbiAgfVxuXG59XG5cbk5nQ2hhbmdlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ05nQ2hhbmdlQ29udHJvbGxlcicsIE5nQ2hhbmdlQ29udHJvbGxlcik7IiwidmFyIG5nQ2xpY2tDb21wb25lbnQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZXZlbnRzL25nLWNsaWNrL25nLWNsaWNrLmh0bWwnLFxuICBjb250cm9sbGVyOiBOZ0NsaWNrQ29udHJvbGxlcixcbiAgYmluZGluZzoge1xuICAgIGNvdW50ZXI6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnbmdDbGlja0NvbXBvbmVudCcsIG5nQ2xpY2tDb21wb25lbnQpO1xuIiwiZnVuY3Rpb24gTmdDbGlja0NvbnRyb2xsZXIoJGxvZykge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5jb3VudGVyID0gMDtcblxuICBjdHJsLm15T25DbGlja0Z1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvZy5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5OZ0NsaWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ05nQ2xpY2tDb250cm9sbGVyJywgTmdDbGlja0NvbnRyb2xsZXIpO1xuIiwidmFyIG5nRGJsQ2xpY2tDb21wb25lbnQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZXZlbnRzL25nLWRibGNsaWNrL25nLWRibGNsaWNrLmh0bWwnLFxuICBjb250cm9sbGVyOiBOZ0RibENsaWNrQ29udHJvbGxlcixcbiAgYmluZGluZzoge1xuICAgIGNvdW50ZXI6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnbmdEYmxDbGlja0NvbXBvbmVudCcsIG5nRGJsQ2xpY2tDb21wb25lbnQpO1xuIiwiZnVuY3Rpb24gTmdEYmxDbGlja0NvbnRyb2xsZXIoJGxvZykge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5jb3VudGVyID0gMDtcblxuICBjdHJsLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAkbG9nLmxvZyhcIkhlbGxvIFdvcmxkIVwiKTtcbiAgICBjdHJsLmNvdW50ZXIrKztcbiAgfVxuXG59XG5cbk5nRGJsQ2xpY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignTmdEYmxDbGlja0NvbnRyb2xsZXInLCBOZ0RibENsaWNrQ29udHJvbGxlcik7XG4iLCJ2YXIgbmdLZXlEb3duQ29tcG9uZW50ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2V2ZW50cy9uZy1rZXlkb3duL25nLWtleWRvd24uaHRtbCcsXG4gIGNvbnRyb2xsZXI6IE5nS2V5RG93bkNvbnRyb2xsZXIsXG4gIGJpbmRpbmc6IHtcbiAgICBjb3VudGVyOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ25nS2V5RG93bkNvbXBvbmVudCcsIG5nS2V5RG93bkNvbXBvbmVudCk7XG4iLCJmdW5jdGlvbiBOZ0tleURvd25Db250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwuY291bnRlciA9IDA7XG5cbiAgY3RybC5wZXJmb3JtQWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5OZ0tleURvd25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignTmdLZXlEb3duQ29udHJvbGxlcicsIE5nS2V5RG93bkNvbnRyb2xsZXIpO1xuIl19
