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


    app.graph0 = function(){
             
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
    
    app.allGraph = function (){
        app.graph0()
        // app.graph1()
        // app.graph2()
        // app.graph4()
        // app.graph5()





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
