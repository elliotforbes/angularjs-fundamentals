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