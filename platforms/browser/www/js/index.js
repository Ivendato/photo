/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app7 = new Framework7();



var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        app.receivedEvent('deviceready');

        document.getElementById("cameraTakePicture").addEventListener 
   ("click", cameraTakePicture); 


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var app7 = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app7.views.create('.view-main');





function cameraTakePicture() { 
    navigator.camera.getPicture(onSuccess, onFail, {  
       quality: 50, 
       destinationType: Camera.DestinationType.DATA_URL 
    });  
    
    function onSuccess(imageData) { 
       var image = document.getElementById('myImage'); 
       image.src = "data:image/jpeg;base64," + imageData; 

       guarda()

    }  
    
    function onFail(message) { 
       alert('Failed because: ' + message); 
    } 
 }



 function guarda(){
     var fotoguar = $$(#imageData).val();

     app7.preloader.show('gray');

 app7.request({
    url: 'http://localhost/team/api/users.php',
    data:{fotouno:fotoguar},
    method:'POST',
    crossDomain: true,
    success:function(data){
         
      app7.preloader.hide();

      var objson = JSON.parse(data);

      if(objson.status_message == "CORRECTO"){

      alert("Muchas gracias por la foto");
      
      }else{

        alert("Hubo un error intentalo nuevamente");
      }
    
    },
    error:function(error){

      app7.preloader.hide();
    
    }
    
    });

}

function getphoto(){

    app7.preloader.show('blue');
  
  
    app7.request({
      url: 'http://localhost/team/api/slider.php',
      data:{},
      method:'POST',
      crossDomain: true,
      success:function(data){
           
        app7.preloader.hide();
  
        var objson = JSON.parse(data);
  
        var pieza= "";
  
        
  
        for(x in objson.data){
  
             console.log(objson.data[x].titulo);
  
             pieza = '<option value="'+objson.data[x].id+'"> '+objson.data[x].titulo+'</option>';
  
             $$('#piezas').append(pieza);
  
        }
  
        
      
      },
      error:function(error){
  
        app7.preloader.hide();
      
      }
      
      });



