var args = arguments[0] || {};
var Map = require('ti.map');


//Ti.API.info(Alloy.Globals.servicesList);

var data = [];
var rowData = [];
var annotations=[];
var rows = [];
var sectionArr = [];
var i;
var serviceProviders = Alloy.Globals.servicesList;  
var selectedTypes = Alloy.Globals.selectedTypes;	 
var selectedWards = Alloy.Globals.selectedWards;


/*
function showIndicator(e){
    $.activityIndicator.show();
    // do some work that takes 6 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function(){
        e.source.close();
        $.activityIndicator.hide();
    }, 20000);
}
*/




if (OS_ANDROID) {
	$.services.addEventListener('android:back', function(e){
		var wardsWin=Alloy.createController('wardSelect').getView();
		wardsWin.open();
		$.services.close();
	});
}	
else {
	$.services.addEventListener('close', function(e)
	{
		Alloy.Globals.backServices = 'true';
		//alert('you just hit back');
	});
}
	
//Ti.API.info(serviceProviders.length);

(function () {

for (i = 0; i < serviceProviders.length; i++) { 
		function compareStrings(a, b) {
		  // Assuming you want case-insensitive comparison
		  //a = a.toLowerCase();
		  //b = b.toLowerCase();
		
		  return (a < b) ? -1 : (a > b) ? 1 : 0;
		}
		
		var letters = /^[A-Za-z]+$/; 
		
			serviceProviders.sort(function(a, b) {
			  return compareStrings(a.NAME, b.NAME);
			});
		
		
				for (var x in selectedTypes) {
					if (selectedTypes[x] === serviceProviders[i].SERVICES) {
						for (x in selectedWards) {
							if (selectedWards[x] === serviceProviders[i].wardLocation) {
									Ti.API.info(serviceProviders[i]);
									var rowData = {
										name : serviceProviders[i].NAME,  
									    services : serviceProviders[i].SERVICES,
									    webAddress : serviceProviders[i].webAddress,
									    fax : serviceProviders[i].faxNumber,
									    officeNumber : serviceProviders[i].officeNumber,
									    address : serviceProviders[i].Address,
									    ward : serviceProviders[i].wardLocation,
									    email : serviceProviders[i].EMAIL
									};
									
									data.push({  
									   name : serviceProviders[i].NAME,  
									   services : serviceProviders[i].SERVICES,
									   webAddress : serviceProviders[i].webAddress,
									   fax : serviceProviders[i].faxNumber,
									   officeNumber : serviceProviders[i].officeNumber,
									   address : serviceProviders[i].Address,
									   ward : serviceProviders[i].wardLocation,
									   email : serviceProviders[i].EMAIL
									  
									 });
									 
									 
									//$.serviceList.setData(sectionArr);
									rows.push(Alloy.createController('servicerow', rowData).getView());
									
									
							}
							
						}
					}
				}	
		
		
			/*
	        if (selectedTypes.indexOf(serviceProviders[i].SERVICES))  {  
	        	  
	         		if (selectedWards.indexOf(serviceProviders[i].wardLocation))  {
	        			
	        				var rowData = {
								name : serviceProviders[i].NAME,  
							    services : serviceProviders[i].SERVICES,
							    webAddress : serviceProviders[i].webAddress,
							    fax : serviceProviders[i].faxNumber,
							    officeNumber : serviceProviders[i].officeNumber,
							    address : serviceProviders[i].Address,
							    ward : serviceProviders[i].wardLocation,
							    email : serviceProviders[i].EMAIL
							};
							
							$.serviceList.setData(sectionArr);
							rows.push(Alloy.createController('servicerow', rowData).getView());
							
							/*
			        		data.push(Alloy.createController('servicerow', {  
							   name : serviceProviders[i].NAME,  
							   services : serviceProviders[i].SERVICES,
							   webAddress : serviceProviders[i].webAddress,
							   fax : serviceProviders[i].faxNumber,
							   officeNumber : serviceProviders[i].officeNumber,
							   address : serviceProviders[i].Address,
							   ward : serviceProviders[i].wardLocation,
							   email : serviceProviders[i].EMAIL
							  
							 }).getView());
							 //Ti.API.info('Data Name:'+data[name]);
							 
							
						}
	        	}		        	
	        	*/
	
	  //Ti.API.info(serviceProviders[i].NAME);  
	  //Ti.API.info(serviceProviders[i].SERVICES);  
	  
		//$.serviceList.setData(data);  
		
}  	   

 


})();	
if(rows.length === 0) {
		var rowData = {
			name :'There were no results for your search.  Please try again',  
		    services :'',
		    address : '',
		};
		
		$.serviceList.setData(sectionArr);
		rows.push(Alloy.createController('servicerow', rowData).getView());
		$.serviceList.setData(rows);  

	
}
else {
	$.serviceList.setData(rows);  
}


$.services.addEventListener("open",function(){
	for(x in data) {
		var googleRequest = Titanium.Network.createHTTPClient({
				timeout:10000
			});
			var name=data[x].name;
			var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address="+ data[x].address;
		(function(_name) {
		googleRequest.onload = function(e) {
	    var response = JSON.parse(this.responseText);
	    //Ti.API.info(response);
	    //alert(this.responseText);
	    
	    
	     	if (response.status == 'OK') {
				    var pointOfInterest = Map.createAnnotation({
					    latitude:response.results[0].geometry.location.lat,
			            longitude:response.results[0].geometry.location.lng,
					    title:_name,
					    pincolor:Map.ANNOTATION_RED,
					    animate:true,
		            	myid: x
					    
					});
					//annotations.push(pointOfInterest);
					$.mapview.addAnnotation(pointOfInterest);
					
					//Ti.API.info(response.results[0].geometry.location);
					
						poiLat = pointOfInterest.latitude;
						poiLong = pointOfInterest.longitude;
							    
						var region = {
						    latitude : poiLat,
						    longitude : poiLong,
						    latitudeDelta : 0.03,
						    longitudeDelta : 0.03,
						};
			
						$.mapview.setRegion(region);
					
			}	
			
				
				
				else {
			    	//alert('Unable to find the address');
			    	
			 	}
		}; })(name);
		
	
				googleRequest.onerror = function(e) {
					Ti.API.error(e.error + 'Please close app and try again later');
					alert(e.error + ' Please close app and try again later');
				};
				googleRequest.open("GET",addrUrl);
				googleRequest.send();


	}
});	
	

	



//alert(data);

	
	    	
	    



	  
    
    

