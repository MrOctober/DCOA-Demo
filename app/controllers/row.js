var args = arguments[0] || {};
$.title.text = args.title;
$.date.text = args.date;
$.location.text=args.location;
//$.row.searchableText = args.title;
// open the detail windows

$.row.filter = $.title.text;

// open the detail windows
$.row.addEventListener('click', function(e) {
        var details = {
			name: args.title,
			date: args.date,
			startDate:args.startDate,
			endDate:args.endDate,
			building:args.building,
			location:args.location,
			details:args.details,
			cost:args.cost,
			website:args.website,
			contact:args.contact,
			phone:args.phone,
			email:args.email,
			ward:args.ward,
			data:args.data
			
            //description:args.description 
        };
        var detailWin = Alloy.createController('detail', details).getView();
	            
        detailWin.title = args.title;
	            
        if (OS_ANDROID) {
		//$.index.getView(childWin).open();
			detailWin.open();
		}
		else {
			Alloy.CFG.navgroup.openWindow(detailWin);
		}
});