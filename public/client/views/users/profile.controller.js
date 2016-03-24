(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('ProfileController',ProfileController);

    function ProfileController($scope, $rootScope, $location, UserService) {

        $scope.update=function(user){

            var userId=$rootScope.user._id;
            UserService.updateUser(userId, user)
                .then(function(response){
                    console.log(response.config.data);

                    $rootScope.user=response.config.data;
                    console.log("Profile");
                    $location.path('/profile');
                }
            );
        }



    };

})();
