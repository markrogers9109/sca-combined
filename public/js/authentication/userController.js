
angular.module('superCoolApp')

    .controller('UserController', ['authentication', function(authentication){
        this.isLoggedIn = authentication.isLoggedIn();
        this.currentUser = authentication.currentUser();

        this.logout = function(){
            authentication.logout();
        }
    }]);
