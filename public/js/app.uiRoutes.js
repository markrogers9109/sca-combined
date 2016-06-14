

angular.module('superCoolApp')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/register');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'views/home.html'
                // controller: 'voteCtrl'
            })
            .state('login',{
                url:'/login',
                templateUrl:'views/login.html'
                // controller: 'voteCtrl'
            })
            .state('register',{
                url:'/register',
                templateUrl:'views/register.html'
                // controller: 'voteCtrl'
            });

    });
