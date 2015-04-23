// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.parseURL = 'https://api.parse.com/1';
Alloy.Globals.parseId='';
Alloy.Globals.parseKey='';
Alloy.Globals.parseClient='';
Alloy.Globals.servicesList = '';



//Retrieve data for services here to use later on.
var urlParse = '';





var xhr = Ti.Network.createHTTPClient({ 
	timeout:10000
});  
  
  
// Here you have to change it for your local ip  
  
  
xhr.onerror = function(e){  
  Ti.API.debug(e.error);  
  //Titanium.API.error('Could not get data.  Please check your connection and try again');
  //return false;
	alert(e.error+' Could not load data at this time. Please check your connection or try again later.'); 
	return false;
	//loadData(); 
 };  
  


function loadData() {
	// Function to be called upon a successful response   
	xhr.onload = function(e) {  
		var tries = tries || 0;
	 	Ti.API.debug(this.responseText);
		var json = JSON.parse(this.responseText);	
		//Check to see if json is there or connection is established
			if (json === null) {
				if (tries < 3) {
					tries++;
					loadData();
					return;
				} else {
					loadData();
					alert('Error reading the events. Make sure you have a network connection restarting app.');
					if (o.error) { o.error(); }
					return;
				}
			}	
		 // Insert the JSON data to the table view  
		 	Alloy.Globals.servicesList = json.results;  
		 	Ti.API.info(Alloy.Globals.servicesList.length);
			
		
	};
	
	  
	xhr.open('GET', urlParse);  
	
	xhr.send();  
};

loadData();



//Setup for Push Notifications through Parse.com

if (OS_ANDROID) {  //Handle Push notifications for android
var parseDC = require('com.dcgov.parsedc');
parseDC;
/*
var parse = require('com.ndizazzo.parsemodule');
parse.initParse({
  appId: Alloy.Globals.parseId,
  clientKey: Alloy.Globals.parseClient
});


Parse.pushChannelList(function(data) {
  // Channel names are stored in data.channels
  console.log(data);
});

parse.registerForPush("dummyToken", "DCOA", function(data) {
	        if (data.success == true) {
	        successCallback();
	        }
	        else {
	        	errorCallback(); 
	        }
	        messageCallback();
});
  			


	function successCallback(e) {
        // send the registration is to your server
        var request = Titanium.Network.createHTTPClient({
		    onload: function(e) {
		      if (request.status != 200 && request.status != 201) {
		        request.onerror(e);
		        return;
		      }
		    },
		    onerror: function(e) {
		      Ti.API.info("Push Notifications registration with Parse failed. Error: " + e.error);
		    }
		  });
		  		 
		
		  var params = {
		    'deviceType': 'android',
		    'deviceToken': e,
		    'channels': ['DCOA']
		  };
		  
		
		  // Register device token with Parse
		  request.open('POST', 'https://api.parse.com/1/installations', true);
		  request.setRequestHeader('X-Parse-Application-Id', Alloy.Globals.parseId);
		  request.setRequestHeader('X-Parse-REST-API-Key', Alloy.Globals.parseKey);
		  request.setRequestHeader('Content-Type', 'application/json');
		  request.send(JSON.stringify(params));
        
        
 	}
 	
    function errorCallback(e) {
        Ti.API.error("Error during registration: "+e.error);
 
        var message;
        if(e.error == "ACCOUNT_MISSING") {
            message = "No Google account found; you'll need to add one (in Settings/Accounts) in order to activate notifications";
        } else {
            message = "Error during registration: "+e.error;
        }
 
        Titanium.UI.createAlertDialog({
            title: 'DCOA Push Notification Setup',
            message: message,
            buttonNames: ['OK']
        }).show();
    }
    
    function messageCallback(e) // called when a push notification is received
    {
        Ti.API.info('DCOA message event: ' + JSON.stringify(e.data));
 
        var intent = Ti.Android.createIntent({
            action: Ti.Android.ACTION_MAIN,
            flags: Ti.Android.FLAG_ACTIVITY_NEW_TASK | Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED,
            className: '[yourprojectid][yourProject]Activity',
            packageName: '[yourprojectid]'
        });
        intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);
 
        // This is fairly static: Not much need to be altered here
        var pending = Ti.Android.createPendingIntent({
            activity: Ti.Android.currentActivity,
            intent: intent,
            type: Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
        });
 
        var notification = Ti.Android.createNotification({
            contentIntent: pending,
            contentTitle: 'DCOA new message',
            contentText: e.data.message,
            tickerText: "DCOA new message"
        });
 
        Ti.Android.NotificationManager.notify(1, notification);
    }

*/


}

 