angular.module('app', [])
  .controller('AppController', function ($http) {
    var app = this
    app.name = 'IoT'
    var data = null
    var username = null
    var password = null
    app.u = []

      
    app.logout = function(){
      window.location = 'index.html'
    }
    
    app.re = function (data){
      console.log(data);
       $http.post('/api/login', data)
          .then(function success (response) {
            console.log(response)
            
            alert('Success')
            window.location = 'login.html'
          }, function error (response) {
            alert(response.data.message)
        })
      }

    getIot()
    app.hide = false 

    app.toThaiDateTime = function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

    app.toRegister = function(){
      window.location = "register.html"
    }
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


    app.graphTem = function(){
             
      console.log("graph working") 
      $http.get('/api/iot')
              .then(function success (response) {
                var tem1min = 20 , tem1max = 20,tem1avg = 0 , c1=0
                var tem2min = 20 , tem2max = 20,tem2avg = 0 , c2=0
                var tem3min = 20 , tem3max = 20,tem3avg = 0 , c3=0
                var tem4min = 20 , tem4max = 20,tem4avg = 0 , c4=0
                var tem5min = 20 , tem5max = 20,tem5avg = 0 , c5=0
                var tem6min = 20 , tem6max = 20,tem6avg = 0 , c6=0
                var tem7min = 20 , tem7max = 20,tem7avg = 0 , c7=0
                var tem8min = 20 , tem8max = 20,tem8avg = 0 , c8=0
                var tem9min = 20 , tem9max = 20,tem9avg = 0 , c9=0
                var tem10min = 20 , tem10max = 20,tem10avg = 0 , c10=0
               
                for(var i =0;i<response.data.length;i++){
                      if(response.data[i].iot_id ==0){
                        tem1avg = tem1avg + response.data[i].temperature
                        c1 = c1+ 1


                            if(tem1min >  response.data[i].temperature) tem1min = response.data[i].temperature
                            if(tem1max <  response.data[i].temperature) tem1max = response.data[i].temperature
                        }
                        if(response.data[i].iot_id ==1){
                        tem2avg = tem2avg + response.data[i].temperature
                        c2 = c2+ 1
                            

                            if(tem2min >  response.data[i].temperature) tem2min = response.data[i].temperature
                            if(tem2max <  response.data[i].temperature) tem2max = response.data[i].temperature
                        }
                        if(response.data[i].iot_id ==2){
                        tem3avg = tem3avg + response.data[i].temperature
                        c3 = c3+ 1
                            

                            if(tem3min >  response.data[i].temperature) tem3min = response.data[i].temperature
                            if(tem3max <  response.data[i].temperature) tem3max = response.data[i].temperature
                        }
                        if(response.data[i].iot_id ==3){
                        tem4avg = tem4avg + response.data[i].temperature
                        c4 = c4+ 1
                            

                            if(tem4min >  response.data[i].temperature) tem4min = response.data[i].temperature
                            if(tem4max <  response.data[i].temperature) tem4max = response.data[i].temperature
                        }
                        if(response.data[i].iot_id ==4){
                        tem5avg = tem5avg + response.data[i].temperature
                        c5 = c5+ 1
                            

                            if(tem5min >  response.data[i].temperature) tem5min = response.data[i].temperature
                            if(tem5max <  response.data[i].temperature) tem5max = response.data[i].temperature
                        }
                        if(response.data[i].iot_id ==5){
                        tem6avg = tem6avg + response.data[i].temperature
                        c6 = c6+ 1
                            

                            if(tem6min >  response.data[i].temperature) tem6min = response.data[i].temperature
                            if(tem6max <  response.data[i].temperature) tem6max = response.data[i].temperature
                        }
                      if(response.data[i].iot_id ==6){
                        tem7avg = tem7avg + response.data[i].temperature
                        c7 = c7+ 1
                            

                            if(tem7min >  response.data[i].temperature) tem7min = response.data[i].temperature
                            if(tem7max <  response.data[i].temperature) tem7max = response.data[i].temperature
                        }
                      if(response.data[i].iot_id ==7){
                        tem8avg = tem8avg + response.data[i].temperature
                        c8 = c8+ 1
                            

                            if(tem8min >  response.data[i].temperature) tem8min = response.data[i].temperature
                            if(tem8max <  response.data[i].temperature) tem8max = response.data[i].temperature
                        }
                       if(response.data[i].iot_id ==8){
                        tem9avg = tem9avg + response.data[i].temperature
                        c9 = c9+ 1
                            

                            if(tem9min >  response.data[i].temperature) tem9min = response.data[i].temperature
                            if(tem9max <  response.data[i].temperature) tem9max = response.data[i].temperature
                        }
                      if(response.data[i].iot_id == 9){
                        tem10avg = tem10avg + response.data[i].temperature
                        c10 = c10+ 1
                            

                            if(tem10min >  response.data[i].temperature) tem10min = response.data[i].temperature
                            if(tem10max <  response.data[i].temperature) tem10max = response.data[i].temperature
                        }
                        
                        
                      
                }
                tem1avg = tem1avg/c1
                tem2avg = tem2avg/c2
                tem3avg = tem3avg/c3
                tem4avg = tem4avg/c4
                tem5avg = tem5avg/c5
                tem6avg = tem6avg/c6
                tem7avg = tem7avg/c7
                tem8avg = tem8avg/c8
                tem9avg = tem9avg/c9
                tem10avg = tem10avg/c10
                console.log(tem2avg,tem2min,tem2max);
            // bar chart data
            var barData = {
                labels : ["IoT-0","IoT-2","IoT-3","IoT-4","IoT-5","IoT-6","IoT-7","IoT-8",'IoT-9'],
                datasets : [
                    {
                        fillColor : "#48A497",
                        strokeColor : "#48A4D1",
                        data : [tem1min,tem2min,tem3min,tem4min,tem5min,tem6min,tem7min,tem8min,tem9min]
                    },
                    {
                        fillColor : "rgba(73,188,170,0.4)",
                        strokeColor : "rgba(72,174,209,0.4)",
                        data : [tem1avg,tem2avg,tem3avg,tem4avg,tem5avg,tem6avg,tem7avg,tem8avg,tem9avg,tem10avg]
                    },
                    {
                        fillColor : "rgba(73,188,170,0.4)",
                        strokeColor : "rgba(72,174,209,0.4)",
                        data : [tem1max,tem2max,tem3max,tem4max,tem5max,tem6max,tem7max,tem8max,tem9max,tem10max]
                    }
                ]
            }
            // get bar chart canvas
            var iot = document.getElementById("iot").getContext("2d");
            // draw bar chart
            new Chart(iot).Bar(barData);

           

        })
                 
      
    }
     app.graphHu = function(){
             
      console.log("graph working") 
      $http.get('/api/iot')
              .then(function success (response) {
                var hu1min = 20 , hu1max = 20,hu1avg = 0 , c1=0
                var hu2min = 20 , hu2max = 20,hu2avg = 0 , c2=0
                var hu3min = 20 , hu3max = 20,hu3avg = 0 , c3=0
                var hu4min = 20 , hu4max = 20,hu4avg = 0 , c4=0
                var hu5min = 20 , hu5max = 20,hu5avg = 0 , c5=0
                var hu6min = 20 , hu6max = 20,hu6avg = 0 , c6=0
                var hu7min = 20 , hu7max = 20,hu7avg = 0 , c7=0
                var hu8min = 20 , hu8max = 20,hu8avg = 0 , c8=0
                var hu9min = 20 , hu9max = 20,hu9avg = 0 , c9=0
                var hu10min = 20 , hu10max = 20,hu10avg = 0 , c10=0
               
                for(var i =0;i<response.data.length;i++){
                      if(response.data[i].iot_id ==0){
                        hu1avg = hu1avg + response.data[i].relative_humidity
                        c1 = c1+ 1


                            if(hu1min >  response.data[i].relative_humidity) hu1min = response.data[i].relative_humidity
                            if(hu1max <  response.data[i].relative_humidity) hu1max = response.data[i].relative_humidity
                        }
                        if(response.data[i].iot_id ==1){
                        hu2avg = hu2avg + response.data[i].relative_humidity
                        c2 = c2+ 1
                            

                            if(hu2min >  response.data[i].relative_humidity) hu2min = response.data[i].relative_humidity
                            if(hu2max <  response.data[i].relative_humidity) hu2max = response.data[i].relative_humidity
                        }
                        if(response.data[i].iot_id ==2){
                        hu3avg = hu3avg + response.data[i].temperature
                        c3 = c3+ 1
                            

                            if(hu3min >  response.data[i].relative_humidity) hu3min = response.data[i].relative_humidity
                            if(hu3max <  response.data[i].relative_humidity) hu3max = response.data[i].relative_humidity
                        }
                        if(response.data[i].iot_id ==3){
                        hu4avg = hu4avg + response.data[i].relative_humidity
                        c4 = c4+ 1
                            

                            if(hu4min >  response.data[i].relative_humidity) hu4min = response.data[i].relative_humidity
                            if(hu4max <  response.data[i].relative_humidity) hu4max = response.data[i].relative_humidity
                        }
                        if(response.data[i].iot_id ==4){
                        hu5avg = hu5avg + response.data[i].relative_humidity
                        c5 = c5+ 1
                            

                            if(hu5min >  response.data[i].relative_humidity) hu5min = response.data[i].relative_humidity
                            if(hu5max <  response.data[i].relative_humidity) hu5max = response.data[i].relative_humidity
                        }
                        if(response.data[i].iot_id ==5){
                        hu6avg = hu6avg + response.data[i].relative_humidity
                        c6 = c6+ 1
                            

                            if(hu6min >  response.data[i].relative_humidity) hu6min = response.data[i].relative_humidity
                            if(hu6max <  response.data[i].relative_humidity) hu6max = response.data[i].relative_humidity
                        }
                      if(response.data[i].iot_id ==6){
                        hu7avg = hu7avg + response.data[i].relative_humidity
                        c7 = c7+ 1
                            

                            if(hu7min >  response.data[i].relative_humidity) hu7min = response.data[i].relative_humidity
                            if(hu7max <  response.data[i].relative_humidity) hu7max = response.data[i].relative_humidity
                        }
                      if(response.data[i].iot_id ==7){
                        hu8avg = hu8avg + response.data[i].relative_humidity
                        c8 = c8+ 1
                            

                            if(hu8min >  response.data[i].relative_humidity) hu8min = response.data[i].relative_humidity
                            if(hu8max <  response.data[i].relative_humidity) hu8max = response.data[i].relative_humidity
                        }
                       if(response.data[i].iot_id ==8){
                        hu9avg = hu9avg + response.data[i].relative_humidity
                        c9 = c9+ 1
                            

                            if(hu9min >  response.data[i].relative_humidity) hu9min = response.data[i].relative_humidity
                            if(hu9max <  response.data[i].relative_humidity) hu9max = response.data[i].relative_humidity
                        }
                      if(response.data[i].iot_id == 9){
                        hu10avg = hu10avg + response.data[i].relative_humidity
                        c10 = c10+ 1
                            

                            if(hu10min >  response.data[i].relative_humidity) hu10min = response.data[i].relative_humidity
                            if(hu10max <  response.data[i].relative_humidity) hu10max = response.data[i].relative_humidity
                        }
                        
                        
                      
                }
                hu1avg = hu1avg/c1
                hu2avg = hu2avg/c2
                hu3avg = hu3avg/c3
                hu4avg = hu4avg/c4
                hu5avg = hu5avg/c5
                hu6avg = hu6avg/c6
                hu7avg = hu7avg/c7
                hu8avg = hu8avg/c8
                hu9avg = hu9avg/c9
                hu10avg = hu10avg/c10
                console.log(hu1min,hu2min);
            // bar chart data
            var barData = {
                labels : ["IoT-0","IoT-2","IoT-3","IoT-4","IoT-5","IoT-6","IoT-7","IoT-8",'IoT-9'],
                datasets : [
                    {
                        fillColor : "#48A497",
                        strokeColor : "#48A4D1",
                        data : [hu1min,hu2min,hu3min,hu4min,hu5min,hu6min,hu7min,hu8min,hu9min,hu10min]
                    },
                    {
                        fillColor : "rgba(73,188,170,0.4)",
                        strokeColor : "rgba(72,174,209,0.4)",
                        data : [hu1avg,hu2avg,hu3avg,hu4avg,hu5avg,hu6avg,hu7avg,hu8avg,hu9avg,hu10avg]
                    },
                    {
                        fillColor : "rgba(73,188,170,0.4)",
                        strokeColor : "rgba(72,174,209,0.4)",
                        data : [hu1max,hu2max,hu3max,hu4max,hu5max,hu6max,hu7max,hu8max,hu9max,hu10max]
                    }
                ]
            }
            // get bar chart canvas
            var iot = document.getElementById("iot2").getContext("2d");
            // draw bar chart
            new Chart(iot).Bar(barData);

           

        })
                 
      
    }

    app.allGraph = function (){
        app.graphTem() 
        app.graphHu()
       





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



    

    app.toLog =  function(){
        window.location='login.html'
    }
    


    app.login = function(input){
       //$http.post('/api/login', input)
       $http.post('/login' , { username : input.username , password : input.password})
       .then(function success (response) {
            console.log(response.data[0].username)
            if((input.username== response.data[0].username)&&(input.password == response.data[0].password)){
              console.log("have user ");
              
              window.location= "report.html"
            }else{
              window.location="login.html"
            }

            //app.d = response.data
          }, function error (response) {
            alert(response.data.message)
        })


    }
     


    // app.register = function(input){
    //   console.log(input);
    //    $http.post('/api/login', data)
    //       .then(function success (response) {
    //         console.log(response)
            
    //         alert('Success')
    //       }, function error (response) {
    //         alert(response.data.message)
    //     })
    //   }


    app.report = function(){

      window.location="login.html"

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
