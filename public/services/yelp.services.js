(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("YelpService", YelpService);

    function YelpService($http) {

        var api = {
            searchYelp: searchYelp,
            searchBusiness: searchBusiness
        };
        return api;

        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        }

        function searchYelp(title, count, loc, callback) {
            var callBackVal='angular.callbacks._'+count;
            var method = 'GET';
            var url = 'http://api.yelp.com/v2/search';
            var params = {
                callback: callBackVal,
                location: loc,
                oauth_consumer_key: 'r7UvikICvNylN1CbaoX5LA', //Consumer Key
                oauth_token: 'u_ku2Gh2Yr-HO0EmXvh6eUmcGYPVCFp7', //Token
                oauth_signature_method: "HMAC-SHA1",
                oauth_timestamp: new Date().getTime(),
                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                term: title
            };
            var consumerSecret = 'tXf4iGd0eFdSiRmtVtmHEYRNOjE'; //Consumer Secret
            var tokenSecret = 'uqbsTDCLt19m-z91El4P5NOO8dM'; //Token Secret
            var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
            params['oauth_signature'] = signature;
            $http.jsonp(url, {params: params}).success(callback);
         }

        function searchBusiness(businessId, count, callback) {
            var callBackVal= 'angular.callbacks._'+count;
            var method = 'GET';
            var url = 'http://api.yelp.com/v2/business/'+businessId;
            var params = {
                callback: callBackVal,
                oauth_consumer_key: 'r7UvikICvNylN1CbaoX5LA', //Consumer Key
                oauth_token: 'u_ku2Gh2Yr-HO0EmXvh6eUmcGYPVCFp7', //Token
                oauth_signature_method: "HMAC-SHA1",
                oauth_timestamp: new Date().getTime(),
                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),

            };
            var consumerSecret = 'tXf4iGd0eFdSiRmtVtmHEYRNOjE'; //Consumer Secret
            var tokenSecret = 'uqbsTDCLt19m-z91El4P5NOO8dM'; //Token Secret
            var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
            params['oauth_signature'] = signature;

            $http.jsonp(url, {params: params}).success(callback);
            }

    }
})();/**
 * Created by lohiy on 3/1/2016.
 */
