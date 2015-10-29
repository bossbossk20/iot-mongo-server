angular.module('app', [])
  .controller('AppController', function ($http) {
    var app = this
    app.name = 'IoT'



     app.submit = function(input){
    		console.log(input)
    	}

         $http.get('/api/iot'). success(function(response) {
            app.d = response
            
          }).
          error(function(data, status, headers, config) {
            // log error
          });



  })
