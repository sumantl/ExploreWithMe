(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodSearchController", FoodSearchController);

    function FoodSearchController($http, $scope, $rootScope, $location, $routeParams, YelpService) {

        $scope.location="02120";
        $scope.search = search;
        function search(query, loc) {


            YelpService.searchYelp(query, $rootScope.searchCount, loc, function(response){
                $scope.scopeFoodSearchList = response;
                console.log($scope.scopeFoodSearchList);
                $rootScope.searchCount++;
                console.log($rootScope.searchCount);
            });
        }
    }
})();