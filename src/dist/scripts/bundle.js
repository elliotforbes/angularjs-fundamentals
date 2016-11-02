angular.module('root', [
  'ngRoute'
]);
function routeProvider($routeProvider){
    $routeProvider
      .when('/', {
          template: '<home></home>'
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

function RouteService($log) {

  var RouteService = {};

  var storage = [];

  RouteService.store = function(object) {
    $log.log(object);
    this.storage = object;
    $log.log(this.storage);
  }

  RouteService.getStore = function() {
    return this.storage;
  }


  return RouteService;
}

RouteService.$inject = ['$log'];

angular.module('root')
  .factory('RouteService', RouteService);
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
function Route1Controller($log, RouteService) {
  var ctrl = this;

  ctrl.storage = [];

  this.$onInit = function() {
    ctrl.storage = RouteService.getStore();
  }

  ctrl.store = function(object) {
    RouteService.store(object);
  }

}

Route1Controller.$inject = ['$log', 'RouteService'];

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
function Route2Controller($log, RouteService) {
  var ctrl = this;

  ctrl.storage = [];

  this.$onInit = function() {
    ctrl.storage = RouteService.getStore();
  }

  ctrl.store = function(object) {
    RouteService.store(object);
  }

}

Route2Controller.$inject = ['$log', 'RouteService'];

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QubW9kdWxlLmpzIiwicm9vdC5yb3V0ZXMuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvY3Jvc3Mtcm91dGUtY29tbXVuaWNhdGlvbi9yb3V0ZS5yb3V0ZXMuanMiLCJjb21wb25lbnRzL2Nyb3NzLXJvdXRlLWNvbW11bmljYXRpb24vcm91dGUuc2VydmljZS5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2Nyb3NzLXJvdXRlLWNvbW11bmljYXRpb24vcm91dGUxL3JvdXRlMS5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2Nyb3NzLXJvdXRlLWNvbW11bmljYXRpb24vcm91dGUxL3JvdXRlMS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9jcm9zcy1yb3V0ZS1jb21tdW5pY2F0aW9uL3JvdXRlMi9yb3V0ZTIuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9jcm9zcy1yb3V0ZS1jb21tdW5pY2F0aW9uL3JvdXRlMi9yb3V0ZTIuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZXZlbnRzL2FsbC9hbGwuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvYWxsL2FsbC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctY2hhbmdlL25nLWNoYW5nZS5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1jaGFuZ2UvbmctY2hhbmdlLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1jbGljay9uZy1jbGljay5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1jbGljay9uZy1jbGljay5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctZGJsY2xpY2svbmctZGJsY2xpY2suY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctZGJsY2xpY2svbmctZGJsY2xpY2suY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWtleWRvd24vbmcta2V5ZG93bi5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1rZXlkb3duL25nLWtleWRvd24uY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgncm9vdCcsIFtcbiAgJ25nUm91dGUnXG5dKTsiLCJmdW5jdGlvbiByb3V0ZVByb3ZpZGVyKCRyb3V0ZVByb3ZpZGVyKXtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy8nLCB7XG4gICAgICAgICAgdGVtcGxhdGU6ICc8aG9tZT48L2hvbWU+J1xuICAgICAgfSk7XG59XG5yb3V0ZVByb3ZpZGVyLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbmZpZyhyb3V0ZVByb3ZpZGVyKTtcbiIsInZhciB0b3BOYXYgPSB7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21tb24vdG9wLW5hdi90b3AtbmF2Lmh0bWwnXG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgICAuY29tcG9uZW50KCd0b3BOYXYnLCB0b3BOYXYpO1xuIiwiZnVuY3Rpb24gcm91dGVUZXN0UHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL3JvdXRlMScsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxyb3V0ZTE+PC9yb3V0ZTE+J1xuICAgICAgfSlcbiAgICAgIC53aGVuKCcvcm91dGUyJywge1xuICAgICAgICAgIHRlbXBsYXRlOiAnPHJvdXRlMj48L3JvdXRlMj4nXG4gICAgICB9KTtcbn1cbnJvdXRlVGVzdFByb3ZpZGVyLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbmZpZyhyb3V0ZVRlc3RQcm92aWRlcik7XG4iLCJmdW5jdGlvbiBSb3V0ZVNlcnZpY2UoJGxvZykge1xuXG4gIHZhciBSb3V0ZVNlcnZpY2UgPSB7fTtcblxuICB2YXIgc3RvcmFnZSA9IFtdO1xuXG4gIFJvdXRlU2VydmljZS5zdG9yZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICRsb2cubG9nKG9iamVjdCk7XG4gICAgdGhpcy5zdG9yYWdlID0gb2JqZWN0O1xuICAgICRsb2cubG9nKHRoaXMuc3RvcmFnZSk7XG4gIH1cblxuICBSb3V0ZVNlcnZpY2UuZ2V0U3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlO1xuICB9XG5cblxuICByZXR1cm4gUm91dGVTZXJ2aWNlO1xufVxuXG5Sb3V0ZVNlcnZpY2UuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5mYWN0b3J5KCdSb3V0ZVNlcnZpY2UnLCBSb3V0ZVNlcnZpY2UpOyIsInZhciBob21lID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sJyxcbiAgY29udHJvbGxlcjogSG9tZUNvbnRyb2xsZXIsXG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnaG9tZScsIGhvbWUpOyIsImZ1bmN0aW9uIEhvbWVDb250cm9sbGVyKCl7XG4gIHZhciBjdHJsID0gdGhpcztcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBIb21lQ29udHJvbGxlcik7IiwidmFyIHJvdXRlMSA9IHtcbiAgdGVtcGxhdGVVcmwgOiAnYXBwL2NvbXBvbmVudHMvY3Jvc3Mtcm91dGUtY29tbXVuaWNhdGlvbi9yb3V0ZTEvcm91dGUxLmh0bWwnLFxuICBjb250cm9sbGVyOiBSb3V0ZTFDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIG1lc3NhZ2U6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgncm91dGUxJywgcm91dGUxKTsiLCJmdW5jdGlvbiBSb3V0ZTFDb250cm9sbGVyKCRsb2csIFJvdXRlU2VydmljZSkge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5zdG9yYWdlID0gW107XG5cbiAgdGhpcy4kb25Jbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgY3RybC5zdG9yYWdlID0gUm91dGVTZXJ2aWNlLmdldFN0b3JlKCk7XG4gIH1cblxuICBjdHJsLnN0b3JlID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgUm91dGVTZXJ2aWNlLnN0b3JlKG9iamVjdCk7XG4gIH1cblxufVxuXG5Sb3V0ZTFDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnLCAnUm91dGVTZXJ2aWNlJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ1JvdXRlMUNvbnRyb2xsZXInLCBSb3V0ZTFDb250cm9sbGVyKTsiLCJ2YXIgcm91dGUyID0ge1xuICB0ZW1wbGF0ZVVybCA6ICdhcHAvY29tcG9uZW50cy9jcm9zcy1yb3V0ZS1jb21tdW5pY2F0aW9uL3JvdXRlMi9yb3V0ZTIuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IFJvdXRlMkNvbnRyb2xsZXIsXG4gIGJpbmRpbmdzOiB7XG4gICAgbWVzc2FnZTogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCdyb3V0ZTInLCByb3V0ZTIpOyIsImZ1bmN0aW9uIFJvdXRlMkNvbnRyb2xsZXIoJGxvZywgUm91dGVTZXJ2aWNlKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLnN0b3JhZ2UgPSBbXTtcblxuICB0aGlzLiRvbkluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjdHJsLnN0b3JhZ2UgPSBSb3V0ZVNlcnZpY2UuZ2V0U3RvcmUoKTtcbiAgfVxuXG4gIGN0cmwuc3RvcmUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBSb3V0ZVNlcnZpY2Uuc3RvcmUob2JqZWN0KTtcbiAgfVxuXG59XG5cblJvdXRlMkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZycsICdSb3V0ZVNlcnZpY2UnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignUm91dGUyQ29udHJvbGxlcicsIFJvdXRlMkNvbnRyb2xsZXIpOyIsInZhciBhbGxDb21wb25lbnQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZXZlbnRzL2FsbC9hbGwuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IEFsbENvbnRyb2xsZXIsXG4gIGJpbmRpbmc6IHtcbiAgICBjb3VudGVyOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ2FsbENvbXBvbmVudCcsIGFsbENvbXBvbmVudCk7XG4iLCJmdW5jdGlvbiBBbGxDb250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGN0cmwuY291bnRlcisrO1xuICB9XG5cbn1cblxuQWxsQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ0FsbENvbnRyb2xsZXInLCBBbGxDb250cm9sbGVyKTsiLCJ2YXIgbmdDaGFuZ2VDb21wb25lbnQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZXZlbnRzL25nLWNoYW5nZS9uZy1jaGFuZ2UuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IE5nQ2hhbmdlQ29udHJvbGxlcixcbiAgYmluZGluZ3M6IHtcbiAgICBpbnB1dDogJzwnLFxuICAgIGNvdW50ZXI6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnbmdDaGFuZ2VDb21wb25lbnQnLCBuZ0NoYW5nZUNvbXBvbmVudCk7IiwiZnVuY3Rpb24gTmdDaGFuZ2VDb250cm9sbGVyKCRsb2cpe1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5jb3VudGVyID0gMDtcblxuICBjdHJsLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAkbG9nLmxvZyhcIlBlcmZvcm0gc29tZSBhY3Rpb24gb24gbmctY2hhbmdlXCIpO1xuICAgIGN0cmwuY291bnRlcisrO1xuICB9XG5cbn1cblxuTmdDaGFuZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignTmdDaGFuZ2VDb250cm9sbGVyJywgTmdDaGFuZ2VDb250cm9sbGVyKTsiLCJ2YXIgbmdDbGlja0NvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ldmVudHMvbmctY2xpY2svbmctY2xpY2suaHRtbCcsXG4gIGNvbnRyb2xsZXI6IE5nQ2xpY2tDb250cm9sbGVyLFxuICBiaW5kaW5nOiB7XG4gICAgY291bnRlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCduZ0NsaWNrQ29tcG9uZW50JywgbmdDbGlja0NvbXBvbmVudCk7XG4iLCJmdW5jdGlvbiBOZ0NsaWNrQ29udHJvbGxlcigkbG9nKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmNvdW50ZXIgPSAwO1xuXG4gIGN0cmwubXlPbkNsaWNrRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAkbG9nLmxvZyhcIkhlbGxvIFdvcmxkIVwiKTtcbiAgICBjdHJsLmNvdW50ZXIrKztcbiAgfVxuXG59XG5cbk5nQ2xpY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignTmdDbGlja0NvbnRyb2xsZXInLCBOZ0NsaWNrQ29udHJvbGxlcik7XG4iLCJ2YXIgbmdEYmxDbGlja0NvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ldmVudHMvbmctZGJsY2xpY2svbmctZGJsY2xpY2suaHRtbCcsXG4gIGNvbnRyb2xsZXI6IE5nRGJsQ2xpY2tDb250cm9sbGVyLFxuICBiaW5kaW5nOiB7XG4gICAgY291bnRlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCduZ0RibENsaWNrQ29tcG9uZW50JywgbmdEYmxDbGlja0NvbXBvbmVudCk7XG4iLCJmdW5jdGlvbiBOZ0RibENsaWNrQ29udHJvbGxlcigkbG9nKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmNvdW50ZXIgPSAwO1xuXG4gIGN0cmwucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2cubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuICAgIGN0cmwuY291bnRlcisrO1xuICB9XG5cbn1cblxuTmdEYmxDbGlja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdOZ0RibENsaWNrQ29udHJvbGxlcicsIE5nRGJsQ2xpY2tDb250cm9sbGVyKTtcbiIsInZhciBuZ0tleURvd25Db21wb25lbnQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZXZlbnRzL25nLWtleWRvd24vbmcta2V5ZG93bi5odG1sJyxcbiAgY29udHJvbGxlcjogTmdLZXlEb3duQ29udHJvbGxlcixcbiAgYmluZGluZzoge1xuICAgIGNvdW50ZXI6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnbmdLZXlEb3duQ29tcG9uZW50JywgbmdLZXlEb3duQ29tcG9uZW50KTtcbiIsImZ1bmN0aW9uIE5nS2V5RG93bkNvbnRyb2xsZXIoJGxvZykge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5jb3VudGVyID0gMDtcblxuICBjdHJsLnBlcmZvcm1BY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICBjdHJsLmNvdW50ZXIrKztcbiAgfVxuXG59XG5cbk5nS2V5RG93bkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdOZ0tleURvd25Db250cm9sbGVyJywgTmdLZXlEb3duQ29udHJvbGxlcik7XG4iXX0=
