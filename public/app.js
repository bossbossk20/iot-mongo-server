angular.module('app', [])
  .controller('AppController', function ($http) {
    var app = this
    app.name = 'IoT'
    var data = null
    var username = null
    var password = null
    app.u = []
    app.session = false
    app.num = 10
  


    getIot()
    app.hide = false

    app.toLog =  function(){
        window.location='login.html'
    }


    app.login = function(input){
          if((input.username=='admin')&&(input.password=='admin')){

                app.session = true

                window.location='report.html'



          }
          
          

        
        

         
           
          



    }
     $http.get('/api/login'). success(function(response) {
            app.user = response
            
            console.log(response)
               
            })


    app.register = function(data){

       $http.post('/api/login', data)
          .then(function success (response) {
            console.log(response)
            
            alert('Success')
          }, function error (response) {
            alert(response.data.message)
        })



    }


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
