var args = arguments[0] || {};

var Map = require('ti.map');

var poiLat, poiLong;
Ti.Geolocation.purpose = 'Get Current Location';

$.name.text = args.name;
$.services.text = args.services;
$.address.text = args.address;



if (args.webAddress !== '<Null>') {
	$.webAddress.text = args.webAddress;	
}
else{
	$.websiteView.height="0";
	$.websiteView.hide();
}


if (args.fax !== '<Null>') {
	$.fax.text = args.fax;	
}
else{
	$.faxView.height="0";
	$.faxView.hide();
}

if (args.officeNumber !== '<Null>') {
	$.officeNumber.text = args.officeNumber;	
}
else{
	$.phoneView.height="0";
	$.phoneView.hide();
}

if (args.ward !== '<Null>') {
	$.ward.text = args.ward;	
}
else{
	$.ward.height="0";
	$.ward.hide();
}

/*
if (args.email !=='<Null>') {
	$.email.text = args.email;	
}
else{
	$.emailView.height="0";
	$.emailView.hide();
}
*/

var poiAddress= args.address;


var xhr = Titanium.Network.createHTTPClient();
var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address="+ args.address;
xhr.open("GET",addrUrl);


xhr.onload = function() {
     var json = JSON.parse(this.responseText);
     if (json.status == 'OK') {
     	
	    var pointOfInterest = Map.createAnnotation({
		    latitude:json.results[0].geometry.location.lat,
            longitude:json.results[0].geometry.location.lng,
		    title:$.name.text,
		    pincolor:Map.ANNOTATION_RED,
		    animate:true,
		    zoom:13,
		    //myid: args.id // Custom property to uniquely identify this annotation.
		});	
		
		Ti.API.info(json.results[0].geometry.location);
		
		
		poiLat = pointOfInterest.latitude;
		poiLong = pointOfInterest.longitude;
				    
		var region = {
		    latitude : poiLat,
		    longitude : poiLong,
		    userLocation : true,
		    latitudeDelta : 0.003,
		    longitudeDelta : 0.003
		};

		$.mapview.setRegion(region);
		var annotations =[pointOfInterest];
		
		$.mapview.annotations=annotations;
		//$.mapview.center =[pointOfInterest];
	}
	else {
	    	//alert('Unable to geocode the address');
	    	return;
	 }
};
xhr.onerror = function(e) {
	Ti.API.error(e.error);
	alert(e.error+' - Please check your connection and try again.');
};
xhr.send();

// Call agency
$.officeNumber.addEventListener('click', function(e){
	 var phoneNumber = $.officeNumber.text;
	 phoneNumber = phoneNumber.replace("(0)", "").replace("-", "").replace("/", "").split(' ').join('');

	if (OS_ANDROID) {
		var call = 'tel:' + phoneNumber;
	 
		var intent = Ti.Android.createIntent({
		        action : Ti.Android.ACTION_CALL,
		        data : call
		        });
		Ti.Android.currentActivity.startActivity(intent);
	}
	else {
		
		Titanium.Platform.openURL('telprompt://' +phoneNumber );
	}
});



$.webAddress.addEventListener('click', function(e){
	var webAddress = args.webAddress;
	
	var websiteUrl = 'http://'+webAddress;
	//Ti.Platform.openURL(websiteUrl);
		
		if (OS_ANDROID) {
		//$.index.getView(childWin).open();
			$.website.open();
			$.webView.url=websiteUrl;
		}
		else {
			Alloy.CFG.navgroup.openWindow($.website);
			$.webView.url=websiteUrl;
		}

});

/*
 * 
$.email.addEventListener('click', function(e) {
 
 var emailDialog = Ti.UI.createEmailDialog();
 
    if (!emailDialog.isSupported()) {
        Ti.UI.createAlertDialog({
            title:'Error',
            message:'Email not available on this device.'
        }).show();
        return;
    } 
 
    emailDialog.setSubject('');
    emailDialog.setToRecipients(args.email);
    emailDialog.setMessageBody ('');
    emailDialog.open();
 
 
     emailDialog.addEventListener('complete',function(e){
            if (e.result == emailDialog.SENT){
                if (Ti.Platform.osname != 'android'){
                        alert("message was sent");
                }
            }else{
                alert("message was not sent. " );
            }
    });
});


 */


