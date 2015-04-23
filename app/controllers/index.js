var array = new Array();
Alloy.Globals.Map = require('ti.map');

    


if (OS_IOS || OS_MOBILEWEB) {
    // attach the navgroup to Alloy.CFG so it can be accessed globally
    Alloy.CFG.navgroup = $.navgroup;
}

if (OS_ANDROID) {
	//$.index.getView().open();
	$.index.open();
} else {
	Alloy.CFG.navgroup.open();
	Ti.UI.iPhone.appBadge = 0;
}


if (OS_IOS) {  // Push notifications for iOS
		Titanium.Network.registerForPushNotifications({
		    types:[
		        Titanium.Network.NOTIFICATION_TYPE_BADGE,
		        Titanium.Network.NOTIFICATION_TYPE_ALERT,
		        Titanium.Network.NOTIFICATION_TYPE_SOUND
		    ],
		    success: successCallback,
		    error: errorCallback,
		    callback: messageCallback
		});
		    
		function successCallback(e) {
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
		    'deviceType': 'ios',
		    'deviceToken': e.deviceToken,
		    'channels': [''],
		    'badge':'Increment'
		  };
		  
		
		  // Register device token with Parse
		  request.open('POST', 'https://api.parse.com/1/installations', true);
		  request.setRequestHeader('X-Parse-Application-Id', Alloy.Globals.parseId);
		  request.setRequestHeader('X-Parse-REST-API-Key', Alloy.Globals.parseKey);
		  request.setRequestHeader('Content-Type', 'application/json');
		  request.send(JSON.stringify(params));
		}
		
		// error callBack
		function errorCallback(e) {
		  Ti.API.info("Error during registration: " + e.error);
		}
		
		// message callBack
		function messageCallback(e) {
		  var message;
		  if (e['aps'] != undefined) {
		    if (e['aps']['alert'] != undefined) {
		      if (e['aps']['alert']['body'] != undefined) {
		        message = e['aps']['alert']['body'];
		      } else {
		        message = e['aps']['alert'];
		      }
		    } else {
		      message = e.data.aps.alert;
		    }
		  } else {
		    message = e.data.aps.alert;
		  }
		  var my_alert = Ti.UI.createAlertDialog({title:'DCOA', message:message});  
		  my_alert.show();
		};
}



function goToPage(e) {  
	var childWin = Alloy.createController(e.source.id).getView();
	
	if (OS_ANDROID) {
		//$.index.getView(childWin).open();
		childWin.open();
	}
	else {
		Alloy.CFG.navgroup.openWindow(childWin);
	}
	
	
    
} 







Alloy.Globals.parent = $.index;
$.index.open();
