var userModel = require("../models/user.models.js")();

module.exports = function(app){
    api.get("/api/user?user=username$password=password", getUsers);
    api.get("api/user?", getUsers);
    api.post("/api/user", registerUser);
    api.delete("/api/user/:id", deleteUser);
    api.put("/api/user/:id", updateUser);

    function getUsers(req, res){
        if(req.query.username){
            if(req.query.password){
                var user = userModel.findUserByCredentials(req.query.username, req.query.password);
                res.json(user);
            }
        }
        else{
            var users = [];
            users = userModel.findAllUsers();
            res.json(users);
        }
    }

    function registerUser(req, res){
        var newUser = userModel.createUser(user);
        res.json(newUser);
    }

    function deleteUser(req, res){
        var user = userModel.deleteUserById(req.params._id);
        res.json(user);
    }

    function updateUser(req, res){
        var newUser = userModel.updateUserById(req.params._id, user);
        res.json(newUser);
    }
};