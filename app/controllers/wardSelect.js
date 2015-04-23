var args = arguments[0] || {};
var data = []; 
var selections = [];
Alloy.Globals.selectedWards = '';
Alloy.Globals.backServices = '';
Ti.API.info(Alloy.Globals.selectedTypes);

$.wardWin.addEventListener('android:back', function(e){
		var serviceTypesWin=Alloy.createController('serviceTypes').getView();
		serviceTypesWin.open();
		$.wardWin.close();
});
		
		

$.wardWin.addEventListener('close', function(e)
{
	
	Alloy.Globals.backWard = 'true';
	//alert('you just hit back');
});

function clearSelectedWards(e) {
	selections = [];
	Alloy.Globals.selectedWards = '';
	var rows = $.wardSelect.data[0].rows;
	for (var i = 0; i < rows.length; ++i) {
	    rows[i].hasCheck = false;
	    rows[i].selected = false;
	    rows[i].color = '#333';
	    rows[i].backgroundColor= '#ffffff';
	}
	return Alloy.Globals.selectedWards;
	
}

$.uncheckAll.addEventListener("click",function(e){
	selections = [];
	Alloy.Globals.selectedWards = '';
	var rows = $.wardSelect.data[0].rows;
	for (var i = 0; i < rows.length; ++i) {
	    rows[i].hasCheck = false;
	    rows[i].selected = false;
	    rows[i].color = '#333';
	    rows[i].backgroundColor= '#ffffff';
	}
	return Alloy.Globals.selectedWards;
});	


$.checkAll.addEventListener("click",function(e){
	var rows = $.wardSelect.data[0].rows;
	for (var i = 0; i < rows.length; ++i) {
	    rows[i].hasCheck = true;
	    rows[i].selected = true;
	    rows[i].color = '#2b4888';
	    rows[i].backgroundColor= '#dde8ff';
	}
	return Alloy.Globals.selectedWards;
});


$.wardWin.addEventListener("focus",function(){
	if (Alloy.Globals.backServices == 'true') {
		clearSelectedWards();
		
	}
});




// create table view event listener
 $.wardSelect.addEventListener('click', function(e) {
	if(e.row.selected){
	    Titanium.API.info('not selected clicked');
	    e.row.color = '#333';
	    e.row.backgroundColor= '#ffffff';
	    e.row.hasCheck = false;
  	}	
  	else {
    Titanium.API.info('selected clicked');
    e.row.color= '#2b4888';
    e.row.backgroundColor= '#dde8ff';
    e.row.hasCheck = true;
  	}
  	e.row.selected = !e.row.selected;
	
	// flatten the array to a comma delimited string of row indexes

});

function showIndicator(e) {
    $.progressIndicator.show();
    var value = 0;
    setInterval(function(){
        if (value > 10) {
            return;
        }
        $.progressIndicator.value = value;
        value ++;
    }, 200);
    // do some work that takes 3 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function(){
        $.progressIndicator.hide();
    }, 3000);
}


$.submitWards.addEventListener('click',function(e){
 	var rows = $.wardSelect.data[0].rows;
    // iterate through the rows to find out which ones are selected,
    // add the index to an array
    for(var x in rows) {
        if(rows[x].hasCheck === true) {
        	if(selections.indexOf(rows[x].title) == -1){
        		selections.push(rows[x].title);
        	}	
        }
    }
    Alloy.Globals.selectedWards = selections;
	
	if(selections.length == 0) {
	    // no selection made
	    alert('Please select a ward or select all');
	    return false;
	}
	else {
		if (Alloy.Globals.servicesList.length <= 0) {
			alert('Data was not loaded.  Please wait or try again later.');
			return false;
		}
		else {
			if (OS_ANDROID) {
				//$.index.getView(childWin).open();
				//showIndicator();
				var serviceListWin=Alloy.createController('services', selections).getView();
				serviceListWin.open();
				$.wardWin.close();
			}
			else {
				var serviceListWin=Alloy.createController('services', selections).getView();
				Alloy.CFG.navgroup.openWindow(serviceListWin);
			}
		}
		
		
	}
});


