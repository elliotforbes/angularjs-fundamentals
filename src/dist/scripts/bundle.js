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
var ngClickComponent = {
  templateUrl: 'app/components/events/ng-click/ng-click.html',
  controller: NgClickController
}

angular.module('root')
  .component('ngClickComponent', ngClickComponent);
function NgClickController($log) {
  var ctrl = this;

  ctrl.myOnClickFunction = function() {
    $log.log("Hello World!");
  }

}

NgClickController.$inject = ['$log'];

angular.module('root')
  .controller('NgClickController', NgClickController);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QubW9kdWxlLmpzIiwicm9vdC5yb3V0ZXMuanMiLCJjb21tb24vdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1jbGljay9uZy1jbGljay5jb21wb25lbnQuanMiLCJjb21wb25lbnRzL2V2ZW50cy9uZy1jbGljay9uZy1jbGljay5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdyb290JywgW1xuICAnbmdSb3V0ZSdcbl0pOyIsImZ1bmN0aW9uIHJvdXRlUHJvdmlkZXIoJHJvdXRlUHJvdmlkZXIpe1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignLycsIHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJzxob21lPjwvaG9tZT4nXG4gICAgICB9KTtcbn1cbnJvdXRlUHJvdmlkZXIuJGluamVjdCA9IFsnJHJvdXRlUHJvdmlkZXInXTtcblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29uZmlnKHJvdXRlUHJvdmlkZXIpO1xuIiwidmFyIHRvcE5hdiA9IHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbW1vbi90b3AtbmF2L3RvcC1uYXYuaHRtbCdcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAgIC5jb21wb25lbnQoJ3RvcE5hdicsIHRvcE5hdik7XG4iLCJ2YXIgaG9tZSA9IHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbCcsXG4gIGNvbnRyb2xsZXI6IEhvbWVDb250cm9sbGVyLFxufVxuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb21wb25lbnQoJ2hvbWUnLCBob21lKTsiLCJmdW5jdGlvbiBIb21lQ29udHJvbGxlcigpe1xuICB2YXIgY3RybCA9IHRoaXM7XG59XG5cbmFuZ3VsYXIubW9kdWxlKCdyb290JylcbiAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpOyIsInZhciBuZ0NsaWNrQ29tcG9uZW50ID0ge1xuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2V2ZW50cy9uZy1jbGljay9uZy1jbGljay5odG1sJyxcbiAgY29udHJvbGxlcjogTmdDbGlja0NvbnRyb2xsZXJcbn1cblxuYW5ndWxhci5tb2R1bGUoJ3Jvb3QnKVxuICAuY29tcG9uZW50KCduZ0NsaWNrQ29tcG9uZW50JywgbmdDbGlja0NvbXBvbmVudCk7IiwiZnVuY3Rpb24gTmdDbGlja0NvbnRyb2xsZXIoJGxvZykge1xuICB2YXIgY3RybCA9IHRoaXM7XG5cbiAgY3RybC5teU9uQ2xpY2tGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICRsb2cubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuICB9XG5cbn1cblxuTmdDbGlja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZyddO1xuXG5hbmd1bGFyLm1vZHVsZSgncm9vdCcpXG4gIC5jb250cm9sbGVyKCdOZ0NsaWNrQ29udHJvbGxlcicsIE5nQ2xpY2tDb250cm9sbGVyKTtcbiJdfQ==
