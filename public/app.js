angular.module('app', [])
  .controller('AppController', function ($http) {
    var app = this
    app.name = 'IoT'
    var data = null
    getIot()



    app.report = function(){

      window.location="report.html"

    }

     app.submit = function(input){
        saveIot(input)
    		console.log(input)
    	}

         function getIot(){
         $http.get('/api/iot'). success(function(response) {
            app.d = response
           
           //    data =[
           //    {
           //      value: app.d[0].temperature,
           //      color: "cornflowerblue",
           //      highlight: "lightskyblue",
           //      label: "Temperature"
           //    },
           //    {
           //      value: 50,
           //      color: "lightgreen",
           //      highlight: "yellowgreen",
           //      label: "Lightgreen"
           //    },
           //    {
           //      value: 40,
           //      color: "orange",
           //      highlight: "darkorange",
           //      label: "Orange"
           //    }];
           // console.log(data);

           //  var ctx = $("#mycanvas").get(0).getContext("2d");
           //  //pie chart data
           //  //sum of values = 360

           //  //draw
           //  var piechart = new Chart(ctx).Pie(data);

          }).
          error(function(data, status, headers, config) {
            // log error
            console.log('error')
          });

        }

        function saveIot(data) {
        $http.post('/api/iot', data)
          .then(function success (response) {
            console.log(response)
            getIot()
            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })
      }







  });
