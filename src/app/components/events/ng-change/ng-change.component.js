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