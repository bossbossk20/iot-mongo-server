angular.module('app', [])
  .controller('AppController', function ($http) {
    var app = this
    app.name = 'IoT'
    var data = null
    var username = null
    var password = null
    app.u = []
      
    
    


    getIot()
    app.hide = false 


    app.se = function(){
      console.log(app.search);
       $http.post('/koy', {search : app.search })
          .then(function success (response) {
            console.log(response)
            
            app.d = response.data
          }, function error (response) {
            alert(response.data.message)
        })

    }


    app.graph = function(){
             
      console.log("graph working") 
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("c").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,"IOT_ID : 1");
                       }
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }


    app.delete = function(id,index){
        console.log(id);
        $http.delete('/api/iot/'+id)
          .success(function(data) {
            app.d.splice(index,1)
            //window.location='index.html'
            
          })
          .error(function(data) {
            console.log('Error: ' + data)
          })
    }



    app.checkLogin = function(){  // 
          //console.log(app.session);
        if(app.session==1){
          window.location='report.html'
        }else{

          //window.location = 'report.html'
        }
    }

    app.toLog =  function(){
        window.location='login.html'
    }
    


    app.login = function(input){
          if((input.username=='admin')&&(input.password=='admin')){

               app.session = 1

                

                console.log(app.session);
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
