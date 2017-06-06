angular.module('app')
.service('mainService', function($http) {

    var users = [
        {
            id: 1,
            name: "Batman"
        }, {
            id: 2,
            name: "Superman",

        }, {
            id: 3,
            name: "Flash"
        }, {
            id: 4,
            name: "Voldemort"
        }
    ];

    this.getUserData = function() {
      return users;
    }

})
