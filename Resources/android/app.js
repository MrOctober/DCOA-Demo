function loadData() {
    xhr.onload = function() {
        var tries = tries || 0;
        Ti.API.debug(this.responseText);
        var json = JSON.parse(this.responseText);
        if (null === json) {
            if (3 > tries) {
                tries++;
                loadData();
                return;
            }
            loadData();
            alert("Error reading the events. Make sure you have a network connection restarting app.");
            o.error && o.error();
            return;
        }
        Alloy.Globals.servicesList = json.results;
        Ti.API.info(Alloy.Globals.servicesList.length);
    };
    xhr.open("GET", urlParse);
    xhr.send();
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.parseURL = "https://api.parse.com/1";

Alloy.Globals.parseId = "6ZLWfep4E66CKPF6dGb7jvvFaTSrXYfWa0A5LvHN";

Alloy.Globals.parseKey = "WA5bqKrBcoEcpIZesrO0dYvIsVihcID07a0VGa7o";

Alloy.Globals.parseClient = "pkzxTa3558fUxZnJAtTJReWBMUigJchUrbgSW3ue";

Alloy.Globals.servicesList = "";

var urlParse = "https://dbUBeketcWj9aWl7zAvqqtZrZXTCvnu1P8oAb6Rr:javascript-key=6ZLWfep4E66CKPF6dGb7jvvFaTSrXYfWa0A5LvHN@api.parse.com/1/classes/Services?limit=1000";

var xhr = Ti.Network.createHTTPClient({
    timeout: 1e4
});

xhr.onerror = function(e) {
    Ti.API.debug(e.error);
    alert(e.error + " Could not load data at this time. Please check your connection or try again later.");
    return false;
};

loadData();

var parseDC = require("com.dcgov.parsedc");

parseDC;

Alloy.createController("index");