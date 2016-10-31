var allComponent = {
  templateUrl: 'app/components/events/all/all.html',
  controller: AllController,
  binding: {
    counter: '<'
  }
}

angular.module('root')
  .component('allComponent', allComponent);
