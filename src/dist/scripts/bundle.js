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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QubW9kdWxlLmpzIiwicm9vdC5yb3V0ZXMuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9hbGwvYWxsLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZXZlbnRzL2FsbC9hbGwuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWNoYW5nZS9uZy1jaGFuZ2UuY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctY2hhbmdlL25nLWNoYW5nZS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctZGJsY2xpY2svbmctZGJsY2xpY2suY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmctZGJsY2xpY2svbmctZGJsY2xpY2suY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWNsaWNrL25nLWNsaWNrLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWNsaWNrL25nLWNsaWNrLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1rZXlkb3duL25nLWtleWRvd24uY29tcG9uZW50LmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmcta2V5ZG93bi9uZy1rZXlkb3duLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3Jvb3QnLCBbXG4gICduZ1JvdXRlJ1xuXSk7IiwiZnVuY3Rpb24gcm91dGVQcm92aWRlcigkcm91dGVQcm92aWRlcil7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvJywge1xuICAgICAgICAgIHRlbXBsYXRlOiAnPGhvbWU+PC9ob21lPidcbiAgICAgIH0pO1xufVxucm91dGVQcm92aWRlci4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlciddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb25maWcocm91dGVQcm92aWRlcik7XG4iLCJ2YXIgdG9wTmF2ID0ge1xuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tbW9uL3RvcC1uYXYvdG9wLW5hdi5odG1sJ1xufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gICAgLmNvbXBvbmVudCgndG9wTmF2JywgdG9wTmF2KTtcbiIsInZhciBob21lID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sJyxcbiAgY29udHJvbGxlcjogSG9tZUNvbnRyb2xsZXIsXG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnaG9tZScsIGhvbWUpOyIsImZ1bmN0aW9uIEhvbWVDb250cm9sbGVyKCl7XG4gIHZhciBjdHJsID0gdGhpcztcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBIb21lQ29udHJvbGxlcik7IiwidmFyIGFsbENvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ldmVudHMvYWxsL2FsbC5odG1sJyxcbiAgY29udHJvbGxlcjogQWxsQ29udHJvbGxlcixcbiAgYmluZGluZzoge1xuICAgIGNvdW50ZXI6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnYWxsQ29tcG9uZW50JywgYWxsQ29tcG9uZW50KTtcbiIsImZ1bmN0aW9uIEFsbENvbnRyb2xsZXIoJGxvZykge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5wZXJmb3JtQWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5BbGxDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29udHJvbGxlcignQWxsQ29udHJvbGxlcicsIEFsbENvbnRyb2xsZXIpOyIsInZhciBuZ0NoYW5nZUNvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ldmVudHMvbmctY2hhbmdlL25nLWNoYW5nZS5odG1sJyxcbiAgY29udHJvbGxlcjogTmdDaGFuZ2VDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIGlucHV0OiAnPCcsXG4gICAgY291bnRlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCduZ0NoYW5nZUNvbXBvbmVudCcsIG5nQ2hhbmdlQ29tcG9uZW50KTsiLCJmdW5jdGlvbiBOZ0NoYW5nZUNvbnRyb2xsZXIoJGxvZyl7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmNvdW50ZXIgPSAwO1xuXG4gIGN0cmwucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2cubG9nKFwiUGVyZm9ybSBzb21lIGFjdGlvbiBvbiBuZy1jaGFuZ2VcIik7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5OZ0NoYW5nZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdOZ0NoYW5nZUNvbnRyb2xsZXInLCBOZ0NoYW5nZUNvbnRyb2xsZXIpOyIsInZhciBuZ0RibENsaWNrQ29tcG9uZW50ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2V2ZW50cy9uZy1kYmxjbGljay9uZy1kYmxjbGljay5odG1sJyxcbiAgY29udHJvbGxlcjogTmdEYmxDbGlja0NvbnRyb2xsZXIsXG4gIGJpbmRpbmc6IHtcbiAgICBjb3VudGVyOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ25nRGJsQ2xpY2tDb21wb25lbnQnLCBuZ0RibENsaWNrQ29tcG9uZW50KTtcbiIsImZ1bmN0aW9uIE5nRGJsQ2xpY2tDb250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwuY291bnRlciA9IDA7XG5cbiAgY3RybC5wZXJmb3JtQWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvZy5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5OZ0RibENsaWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ05nRGJsQ2xpY2tDb250cm9sbGVyJywgTmdEYmxDbGlja0NvbnRyb2xsZXIpO1xuIiwidmFyIG5nQ2xpY2tDb21wb25lbnQgPSB7XG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZXZlbnRzL25nLWNsaWNrL25nLWNsaWNrLmh0bWwnLFxuICBjb250cm9sbGVyOiBOZ0NsaWNrQ29udHJvbGxlcixcbiAgYmluZGluZzoge1xuICAgIGNvdW50ZXI6ICc8J1xuICB9XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbXBvbmVudCgnbmdDbGlja0NvbXBvbmVudCcsIG5nQ2xpY2tDb21wb25lbnQpO1xuIiwiZnVuY3Rpb24gTmdDbGlja0NvbnRyb2xsZXIoJGxvZykge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5jb3VudGVyID0gMDtcblxuICBjdHJsLm15T25DbGlja0Z1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvZy5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5OZ0NsaWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ05nQ2xpY2tDb250cm9sbGVyJywgTmdDbGlja0NvbnRyb2xsZXIpO1xuIiwidmFyIG5nS2V5RG93bkNvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ldmVudHMvbmcta2V5ZG93bi9uZy1rZXlkb3duLmh0bWwnLFxuICBjb250cm9sbGVyOiBOZ0tleURvd25Db250cm9sbGVyLFxuICBiaW5kaW5nOiB7XG4gICAgY291bnRlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCduZ0tleURvd25Db21wb25lbnQnLCBuZ0tleURvd25Db21wb25lbnQpO1xuIiwiZnVuY3Rpb24gTmdLZXlEb3duQ29udHJvbGxlcigkbG9nKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmNvdW50ZXIgPSAwO1xuXG4gIGN0cmwucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGN0cmwuY291bnRlcisrO1xuICB9XG5cbn1cblxuTmdLZXlEb3duQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ05nS2V5RG93bkNvbnRyb2xsZXInLCBOZ0tleURvd25Db250cm9sbGVyKTtcbiJdfQ==
