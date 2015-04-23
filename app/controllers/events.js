var args = arguments[0] || {};
var data;
var rowData = [];
var rows = [];
var sectionArr = [];


var eventsUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fdcoa.dc.gov%2Fsystem-use%2Fevents-api%2F%22%20AND%20xpath%3D%22%2F%2F*%5B%40class%3D%27list-item%27%5D%22&diagnostics=true';



var xhr = Ti.Network.createHTTPClient({  
 timeout : 300000,  
});  
    
  
xhr.onerror = function(e){  
  Ti.API.debug(e.error);  
  alert(e.error);  
  return false;
 };  
 


// Function to be called upon a successful response   
xhr.onload = function(e) {  
 	//this is the XML document object
	var doc = Ti.XML.parseString(this.responseText).documentElement;
	//Ti.API.info(doc);
	var elements = doc.getElementsByTagName("div");
	var spans = doc.getElementsByTagName("span");
	//Ti.API.info(elements.item(0).getElementsByTagName('div').item(0).text);
	//Ti.API.info(elements.childNodes.item(0).nodeValue); 
	for (var i=0;i<elements.length;i++) {
		//Ti.API.info(elements.item(i).getElementsByTagName('div').item(0).text);
		var title, date, startDate, endDate, building, location, details, cost, website, contact, phone, email, ward;
		
		//startDate = spans.item(i).getAttributes.item(0).getAttribute("content");
		//endDate = spans.item(i).getAttributes.item(0).getAttribute("content");
		Ti.API.info(startDate+'-'+endDate);
			
		
		if (elements.item(i).getElementsByTagName('div').length > 0) {
			if (elements.item(i).getElementsByTagName('div').item(0) != null) {
				title = elements.item(i).getElementsByTagName('div').item(0).text;
			}
			else {
				title = '';
			}
			if (elements.item(i).getElementsByTagName('div').item(1) != null) {
				date = elements.item(i).getElementsByTagName('div').item(1).text;
				startDate = elements.item(i).getElementsByTagName('span').item(1).getAttribute("content");
				endDate = elements.item(i).getElementsByTagName('span').item(2).getAttribute("content");
				//alert(startDate);
				//alert(endDate);
				
			}
			else {
				date = '';
				endDate = '';
			}
			
			if (elements.item(i).getElementsByTagName('div').item(2) != null) {
				building = elements.item(i).getElementsByTagName('div').item(2).text;
			}
			else {
				building = '';
			}
			
			if (elements.item(i).getElementsByTagName('div').item(3) != null) {
				location = elements.item(i).getElementsByTagName('div').item(3).text;
			}
			else {
				location = '';
			}
			
			if (elements.item(i).getElementsByTagName('div').item(4) != null) {
				details = elements.item(i).getElementsByTagName('div').item(4).text;
			}
			else {
				details = '';
			}
			if (elements.item(i).getElementsByTagName('div').item(5) != null) {
				cost = elements.item(i).getElementsByTagName('div').item(5).text;
			}
			else {
				cost = '';
			}
			
			if (elements.item(i).getElementsByTagName('div').item(6) != null) {
				contact = elements.item(i).getElementsByTagName('div').item(6).text;
			}
			else {
				contact = '';
			}
			
			if (elements.item(i).getElementsByTagName('div').item(7) != null) {
				phone = elements.item(i).getElementsByTagName('div').item(7).text;
			}
			else {
				phone = '';
			}
			if (elements.item(i).getElementsByTagName('div').item(8) != null) {
				email = elements.item(i).getElementsByTagName('div').item(8).text;
			}
			else {
				email = '';
			}
			if (elements.item(i).getElementsByTagName('div').item(9) != null) {
				ward = elements.item(i).getElementsByTagName('div').item(9).text;
			}
			else {
				ward = '';
			}
			
			if (OS_IOS) {
			data =elements.getChildNodes.getNodeValue.item(i).text;
			}
			else{
				data =elements.item(i).text;
			}
			
			Ti.API.info(data);
			var rowData = {
					title:title,
					date:date,
					startDate:startDate,
					endDate:endDate,
					building:building,
					location:location,
					details:details,
					cost:cost,
					website:website,
					contact:contact,
					phone:phone,
					email:email,
					ward:ward,
					data:data
				};
				
				$.table.setData(sectionArr);
				rows.push(Alloy.createController('row', rowData).getView());	
		}
	}
	$.table.setData(rows);
    
    
	
};

  
xhr.open('GET', eventsUrl);  

xhr.send(); 
	
	



// Refresh table data from remote directory



if (OS_ANDROID) {
	
	
} else {
	//Search functionality
	$.search.addEventListener('change', function(e)
	{
	    $.table.setFilterAttribute(rowData.title);
	    $.table.setFilterAttribute(rowData.description);
	    
	});
}
	

