app.service('listService', function($http) {

    this.getProductionData = function(key) {
       return $http({
            method: 'GET',
            url: 'https://lie-nielsen.fulfil.io/api/v1/model/production.plan',
            headers: {
                'x-api-key': key
            }
        }).then(function(result) {
            console.log(result);
            var data = result.data;
            return data;

        }, function(err) {
            console.log(err);
        })
   }

});
