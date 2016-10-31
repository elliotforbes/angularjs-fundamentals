var ngClickComponent = {
  templateUrl: 'app/components/events/ng-click/ng-click.html',
  controller: NgClickController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('ngClickComponent', ngClickComponent);
