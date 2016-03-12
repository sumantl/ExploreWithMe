(function(){

angular.module('ExploreWithMeApp')
    .controller('PlaceController', PlaceController);

    function PlaceController ($scope, $rootScope, $location, GooglePlaces) {


        GooglePlaces.initAutocomplete(function(response){
            $scope.scopePlaceList = response;
            console.log(response);
        });
        $scope.search = search;


        function  search(query){




        }


        /*
        function search(query){
            GooglePlaces.initMap(query, function (results, status){
                $scope.scopePlaceList=results;
                GooglePlaces.render(results,status);
                console.log($scope.scopePlaceList);


            });
        }

        */



    }
})();

