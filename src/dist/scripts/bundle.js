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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QubW9kdWxlLmpzIiwicm9vdC5yb3V0ZXMuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1jaGFuZ2UvbmctY2hhbmdlLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWNoYW5nZS9uZy1jaGFuZ2UuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWNsaWNrL25nLWNsaWNrLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWNsaWNrL25nLWNsaWNrLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1kYmxjbGljay9uZy1kYmxjbGljay5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1kYmxjbGljay9uZy1kYmxjbGljay5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9ldmVudHMvbmcta2V5ZG93bi9uZy1rZXlkb3duLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvZXZlbnRzL25nLWtleWRvd24vbmcta2V5ZG93bi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdyb290JywgW1xuICAnbmdSb3V0ZSdcbl0pOyIsImZ1bmN0aW9uIHJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxob21lPjwvaG9tZT4nXG4gICAgICB9KTtcbn1cbnJvdXRlUHJvdmlkZXIuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29uZmlnKHJvdXRlUHJvdmlkZXIpO1xuIiwidmFyIHRvcE5hdiA9IHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbW1vbi90b3AtbmF2L3RvcC1uYXYuaHRtbCdcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAgIC5jb21wb25lbnQoJ3RvcE5hdicsIHRvcE5hdik7XG4iLCJ2YXIgaG9tZSA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IEhvbWVDb250cm9sbGVyLFxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ2hvbWUnLCBob21lKTsiLCJmdW5jdGlvbiBIb21lQ29udHJvbGxlcigpe1xuICB2YXIgY3RybCA9IHRoaXM7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpOyIsInZhciBuZ0NoYW5nZUNvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ldmVudHMvbmctY2hhbmdlL25nLWNoYW5nZS5odG1sJyxcbiAgY29udHJvbGxlcjogTmdDaGFuZ2VDb250cm9sbGVyLFxuICBiaW5kaW5nczoge1xuICAgIGlucHV0OiAnPCcsXG4gICAgY291bnRlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCduZ0NoYW5nZUNvbXBvbmVudCcsIG5nQ2hhbmdlQ29tcG9uZW50KTsiLCJmdW5jdGlvbiBOZ0NoYW5nZUNvbnRyb2xsZXIoJGxvZyl7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmNvdW50ZXIgPSAwO1xuXG4gIGN0cmwucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2cubG9nKFwiUGVyZm9ybSBzb21lIGFjdGlvbiBvbiBuZy1jaGFuZ2VcIik7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5OZ0NoYW5nZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdOZ0NoYW5nZUNvbnRyb2xsZXInLCBOZ0NoYW5nZUNvbnRyb2xsZXIpOyIsInZhciBuZ0NsaWNrQ29tcG9uZW50ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2V2ZW50cy9uZy1jbGljay9uZy1jbGljay5odG1sJyxcbiAgY29udHJvbGxlcjogTmdDbGlja0NvbnRyb2xsZXIsXG4gIGJpbmRpbmc6IHtcbiAgICBjb3VudGVyOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ25nQ2xpY2tDb21wb25lbnQnLCBuZ0NsaWNrQ29tcG9uZW50KTtcbiIsImZ1bmN0aW9uIE5nQ2xpY2tDb250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwuY291bnRlciA9IDA7XG5cbiAgY3RybC5teU9uQ2xpY2tGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2cubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuICAgIGN0cmwuY291bnRlcisrO1xuICB9XG5cbn1cblxuTmdDbGlja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdOZ0NsaWNrQ29udHJvbGxlcicsIE5nQ2xpY2tDb250cm9sbGVyKTtcbiIsInZhciBuZ0RibENsaWNrQ29tcG9uZW50ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2V2ZW50cy9uZy1kYmxjbGljay9uZy1kYmxjbGljay5odG1sJyxcbiAgY29udHJvbGxlcjogTmdEYmxDbGlja0NvbnRyb2xsZXIsXG4gIGJpbmRpbmc6IHtcbiAgICBjb3VudGVyOiAnPCdcbiAgfVxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ25nRGJsQ2xpY2tDb21wb25lbnQnLCBuZ0RibENsaWNrQ29tcG9uZW50KTtcbiIsImZ1bmN0aW9uIE5nRGJsQ2xpY2tDb250cm9sbGVyKCRsb2cpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIGN0cmwuY291bnRlciA9IDA7XG5cbiAgY3RybC5wZXJmb3JtQWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgJGxvZy5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG4gICAgY3RybC5jb3VudGVyKys7XG4gIH1cblxufVxuXG5OZ0RibENsaWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ05nRGJsQ2xpY2tDb250cm9sbGVyJywgTmdEYmxDbGlja0NvbnRyb2xsZXIpO1xuIiwidmFyIG5nS2V5RG93bkNvbXBvbmVudCA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ldmVudHMvbmcta2V5ZG93bi9uZy1rZXlkb3duLmh0bWwnLFxuICBjb250cm9sbGVyOiBOZ0tleURvd25Db250cm9sbGVyLFxuICBiaW5kaW5nOiB7XG4gICAgY291bnRlcjogJzwnXG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCduZ0tleURvd25Db21wb25lbnQnLCBuZ0tleURvd25Db21wb25lbnQpO1xuIiwiZnVuY3Rpb24gTmdLZXlEb3duQ29udHJvbGxlcigkbG9nKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmNvdW50ZXIgPSAwO1xuXG4gIGN0cmwucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGN0cmwuY291bnRlcisrO1xuICB9XG5cbn1cblxuTmdLZXlEb3duQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJ107XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ05nS2V5RG93bkNvbnRyb2xsZXInLCBOZ0tleURvd25Db250cm9sbGVyKTtcbiJdfQ==
