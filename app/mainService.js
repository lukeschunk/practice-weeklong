angular.module('project').service('mainService', function() {

  var users = [{name: 'jake', number: '208-317-6876'}]

  this.saveUser = function (user) {
    users.push(user)

    console.log("this is users", users)
  }

})
