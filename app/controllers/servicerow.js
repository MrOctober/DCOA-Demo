var args = arguments[0] || {};
$.name.text = args.name;  
$.address.text = args.address;
$.services.text = args.services;
/*
webAddress : serviceProviders[i].webAddress,
	   fax : serviceProviders[i].faxNumber,
	   officeNumber : serviceProviders[i].officeNumber,
	   address : serviceProviders[i].Address,
	   ward : serviceProviders[i].wardLocation,
	   emal : serviceProviders[i].EMAIL
	   
*/

$.serviceRow.filter=$.name.text+$.address.text+$.services.text;

// open the detail windows
$.serviceRow.addEventListener('click', function(e) {
        var details = {
           name : args.name,  
		   services : args.services,
		   webAddress : args.webAddress,
		   fax : args.fax,
		   officeNumber : args.officeNumber,
		   address : args.address,
		   ward : args. ward,
		   email : args.email
			
        };
        var detailWin = Alloy.createController('serviceDetail', details).getView();;
	            
        detailWin.title = args.title;
	            
       
		
		if (OS_ANDROID) {
		//$.index.getView(childWin).open();
			detailWin.open();
		}
		else {
			Alloy.CFG.navgroup.openWindow(detailWin);
		}
		

});