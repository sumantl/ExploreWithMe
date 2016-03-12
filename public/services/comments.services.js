(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("CommentService", CommentService);

    function CommentService ($http) {

        var commentsList=[];
        commentsList=[
            {"_id": "000", "name": "I do not like this", "userId": 123},
            {"_id": "001", "name": "I am loving it", "userId": 123},
            {"_id": "020", "title": "Leh", "userId": 234},
        ];

        var api = {
            createCommentForUser: createCommentForUser,
            findAllCommentForUser: findAllCommentForUser,
            deleteCommentById: deleteCommentById,
            updateCommentById: updateCommentById,
        };
        return api;

        function createCommentForUser(userId, comment, callback) {
            var tempComment ={};
            angular.copy(comment,tempComment);
            tempComment._id=(new Date).getTime();
            tempComment.userId = userId;
            commentsList.push(tempComment);
            callback(tempComment);
        }

        function findAllCommentForUser(userId, callback) {
            var userCommentsList=[];
            for(var i = 0; i<commentsList.length; i++){
                if(commentsList[i].userId == userId){
                    userCommentsList.push(commentsList[i]);
                }
            }
            callback(userCommentsList);
        }

        function deleteCommentById(commentId, callback) {


            for (var i = 0; i < commentsList.length; i++) {
                if (commentsList[i]._id == commentId) {
                    commentsList.splice(i, 1);

                }
            }
            callback(commentsList);
        }

        function updateCommentById (commentId, newComment, callback){
            var result=null;
            for(var i=0;i<commentsList.length;i++){
                if(commentsList[i]._id == commentId){

                    angular.copy(newComment,commentsList[i]);
                    angular.copy(commentsList[i],result);
                    break;
                }
            }
            callback(result);
        }
    }

})();

