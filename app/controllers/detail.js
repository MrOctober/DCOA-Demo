var args = arguments[0] || {};
$.date.text = args.date;
/*
$.building.text = args.building;
$.location.text = args.location;
$.details.text = args.details;
$.contact.text= args.contact;
$.cost.text= args.cost;
$.email.text=args.email;
$.phone.text=args.phone;
$.ward.text=args.ward;

*/

var data = args.data;
data= data.replace(/\n\s*\n/g, '\n\n');



$.data.text = data;

/*
if (args.website==null) {
	$.websiteLabel.hide();
	$.websiteLabel.height=0;
	$.website.text=args.website;
}
*/


var calendars = [];
var selectedCalendarName;
var selectedid;
var pickerData = [];
var osname = Ti.Platform.osname;


//Handles Start Times

/*
var startDate = args.startDate;
var thisEventDate = args.date;
var start = thisEventDate.split("-");
var eventDay = start[0]; 
var date = new Date();
date= start[0].slice("/");
var day = date[0];
//day=day.getDay();
var month=date[1];
//month = month.getMonth();
var year = date[2];
//year = year.getYear();
var startHour = start[1].slice(0, -5);
startHour=parseInt(startHour);
//hour = hour.getHours();
var min = start[1].split(":");
var min = min[1].slice(0, -2);
min=parseInt(min);
var seconds = '00';
var mili = '000';

var dayNight = start[1].slice(-2);
if(dayNight == 'pm') {
	startHour=startHour+12;
}
//min = min.getMinutes();
*/

//Handles End Times

var myDate = new Date(args.startDate);
//myDate.setHours(startHour, min, seconds, mili);
var endDate = new Date(args.endDate);



function performCalendarWriteFunctions(){	
	 if (OS_ANDROID) {
	 	var calendars = Ti.Calendar.selectableCalendars;
        var names =[];
        for (var i = 0; i<calendars.length; i++) {
            names.push(calendars[i].name);
        }

        var calendarDialog = Titanium.UI.createOptionDialog({
            title: 'Select a Calendar',
            options: names,
            cancel:1
        });
        calendarDialog.addEventListener('click', function(e){
            var ci = e.index+1;
            var calendar = Ti.Calendar.getCalendarById(ci);

            var eventBegins = new Date(myDate);
            var eventEnds = new Date(endDate);
            var hasReminder = true;
            var details = {
                title: args.name,
                description: 'message',
                begin: eventBegins,
                end: eventEnds,
                hasAlarm:true,
                availability: Ti.Calendar.AVAILABILITY_FREE,
	            allDay: false,
            };

            var event = calendar.createEvent(details);

            if (hasReminder)
            {
                var reminderDetails = {
                    minutes: 15,
                    method: Ti.Calendar.METHOD_ALERT
                };

                event.createReminder(reminderDetails);
            }

            alert('Event was created!'+ args.name + ' is now added to your calendar.');
        });
        calendarDialog.show();
	 }
	 else {
	 	
	 	
            
            var calendar = Ti.Calendar.defaultCalendar;

            var eventBegins = new Date(myDate);
            var eventEnds = new Date(endDate);
            var details = {
            	id:args.name,
                title: args.name,
                notes: args.details,
                location: args.location,
                begin: eventBegins,
                end: eventEnds,
                availability: Ti.Calendar.AVAILABILITY_FREE,
                allDay: false,
            };

            var event = calendar.createEvent(details);

     

            var alert1 = event.createAlert({
	                        absoluteDate: new Date(new Date().getTime() - (1000*60*20))
	                });
		    var alert2 = event.createAlert({
		        relativeOffset:-(60*15)
		    });
	    	var allAlerts = new Array(alert1,alert2);
	    	event.alerts = allAlerts;
	    	Ti.API.info('Going to save event now');
	    	event.save(Ti.Calendar.SPAN_THISEVENT);
	    	Ti.API.info('Done with saving event,\n Now trying to retreive it.');
	    	alert('Event was created!'+ args.name + ' is now added to your calendar.');
	
	 }
	 
};	



// Call agency
/*
$.phone.addEventListener('click', function(e){
	 var phoneNumber = $.phone.text;
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


/*
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
    emailDialog.setToRecipients($.email.text);
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


$.website.addEventListener('click', function(e){
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
*/



$.addToCal.addEventListener('click',function(e){
	//alert('clicked');
	if (OS_ANDROID) {
		performCalendarWriteFunctions();
	}
	else {
	
	    if(Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) {
	    	performCalendarWriteFunctions();
		} else {
		    Ti.Calendar.requestEventsAuthorization(function(e){
		            if (e.success) {
		                performCalendarWriteFunctions();
		            } else {
		                alert('Access to calendar is not allowed');
		            }
		        });
		}
	
	}	        
}); 
