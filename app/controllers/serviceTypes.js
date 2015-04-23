var args = arguments[0] || {};

var data = [];  
var selected = [];
Alloy.Globals.selectedTypes = '';
Alloy.Globals.backWard = '';


function clearSelectedTypes(e) {
	selected = [];
	Alloy.Globals.selectedTypes = '';
	var rows = $.serviceTypes.data[0].rows;
	for (var i = 0; i < rows.length; ++i) {
	    rows[i].hasCheck = false;
	    rows[i].selected = false;
	    rows[i].color = '#333';
	    rows[i].backgroundColor= '#ffffff';
	}
	return Alloy.Globals.selectedTypes;
}


$.uncheckAll.addEventListener("click",function(e){
	selected = [];
	Alloy.Globals.selectedTypes = '';
	var rows = $.serviceTypes.data[0].rows;
	for (var i = 0; i < rows.length; ++i) {
	    rows[i].hasCheck = false;
	    rows[i].selected = false;
	    rows[i].color = '#333';
	    rows[i].backgroundColor= '#ffffff';
	}
	return Alloy.Globals.selectedTypes;
});	


$.checkAll.addEventListener("click",function(e){
	var rows = $.serviceTypes.data[0].rows;
	for (var i = 0; i < rows.length; ++i) {
	    rows[i].hasCheck = true;
	    rows[i].selected = true;
	    rows[i].color = '#2b4888';
	    rows[i].backgroundColor= '#dde8ff';
	}
	return Alloy.Globals.selectedTypes;
});


$.serviceoptions.addEventListener("focus",function(){
	if (Alloy.Globals.backWard == 'true') {
		clearSelectedTypes();
		
	}
});

 


// create table view event listener
 $.serviceTypes.addEventListener('click', function(e) {
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



$.submitVals.addEventListener('click',function(e){
	var rows = $.serviceTypes.data[0].rows;
    // iterate through the rows to find out which ones are selected,
    // add the index to an array
    for(var x in rows) {
        if(rows[x].hasCheck === true) {
        	
        	if(selected.indexOf(rows[x].title) == -1){
        		selected.push(rows[x].title);
        	}	
           
        }

     
    }
    Alloy.Globals.selectedTypes = selected;
	var wardWin=Alloy.createController('wardSelect',selected).getView();
	
	if(selected.length == 0) {
	    // no selection made
	    alert('Please select a service or resource type');;
	    return false;
	}
	else {
	    // does exist
	    if (OS_ANDROID) {
			//$.index.getView(childWin).open();
			
			wardWin.open();
			$.serviceoptions.close();
		}
		else {
			Alloy.CFG.navgroup.openWindow(wardWin);
		}
	}
	
	
	
});


/*

$.checkAllButton.addEventListener('click', function(e) {
	var rows = $.serviceTypes.data[0].rows;
	alert('All checked');
	for(var x in rows) {
	    x.selected = true;
    }
	
});	

$.uncheckAllButton.addEventListener('click', function(e) {
	var rows = $.serviceTypes.data[0].rows;
	alert('All unchecked');
	for(var x in rows) {
        x.selected = false;
    }
	
});	

*/