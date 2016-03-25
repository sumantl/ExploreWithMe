module.exports = function(app){

    var request = require('request');


    app.get('/api/places/search', searchPlaces);
   // app.get('/api/yelp/search/:business', searchBusiness);


    function searchPlaces(req, res){

        var searchQuery = req.query.search;
        console.log(searchQuery);
        var location = '-33.8670,151.1957';
        var key = 'AIzaSyDqu1FqTmzBY0ogfnDSOkKK2Q9VmsnI7Eo=';
        var type = 'food';
        var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location+'&radius=500&types='+type+'&name='+searchQuery+'&key='+key;
        console.log(url);
        // 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyDqu1FqTmzBY0ogfnDSOkKK2Q9VmsnI7Eo='
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(response.body);
                res.json(response.body); // Show the HTML for the Google homepage.
            }
        })

    }



};


