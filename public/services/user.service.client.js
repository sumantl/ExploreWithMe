(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("UserService", UserService);

    function UserService () {

        var userInfo=[];
        userInfo=[
            {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]		},
            {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]		},
            {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]		},
            {	"_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {	"_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]		}
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser

        };
        return api;

        function findUserByCredentials(username, password, callback) {

            var result={};
            for(var i=0;i<userInfo.length;i++){
                if(userInfo[i].username==username&&userInfo[i].password==password) {
                    console.log("User Found");
                    angular.copy(userInfo[i], result);
                    console.log(result);
                    break;
                }
            }

            callback(result);

        }

        function findAllUsers(callback) {
            callback(userInfo);
        }

        function createUser(user, callback){
            var tempUser ={}
            angular.copy(user,tempUser);
            tempUser._id = (new Date).getTime();
            userInfo.push(tempUser);
            callback(tempUser);
        }

        function deleteUserById(userId, callback) {
            for(var i=0;i<userInfo.length;i++){
                if(userInfo[i]._id == userId){
                    userInfo.splice(i,1);
                    break;
                }
            }
            callback(userInfo);
        }

        function updateUser(userId, user, callback) {

            var result = null;
            for(var i=0;i<userInfo.length;i++){

                if(userInfo[i]._id == userId){
                    angular.copy(user,userInfo[i]);
                    angular.copy(userInfo[i],result);
                    break;
}
            }
            callback(result);
        }
    }
})();