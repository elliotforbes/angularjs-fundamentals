var ngDblClickComponent = {
  templateUrl: 'app/components/events/ng-dblclick/ng-dblclick.html',
  controller: NgDblClickController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('ngDblClickComponent', ngDblClickComponent);
