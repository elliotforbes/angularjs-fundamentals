var ngKeyDownComponent = {
  templateUrl: 'app/components/events/ng-keydown/ng-keydown.html',
  controller: NgKeyDownController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('ngKeyDownComponent', ngKeyDownComponent);
