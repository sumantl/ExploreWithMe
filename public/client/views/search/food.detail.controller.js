(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodDetailController", FoodDetailController);

    function FoodDetailController($scope, $rootScope, $location, $routeParams, YelpService) {


        $scope.foodId = $routeParams.foodId;

        /*
        console.log($scope.foodId);
        if ($scope.foodId) {
            getBusinessDetails($scope.foodId);
        }
        */

        YelpService.searchBusiness($scope.foodId, $rootScope.searchCount, function (response) {
            console.log("1");
            console.log(response);
            $scope.hotelDetails = response;
            $rootScope.searchCount++;
        });



        function getBusinessDetails(foodId) {
            console.log("function called");


            console.log($rootScope.hotelDetails);
        }

        //console.log("1");


    }

})();