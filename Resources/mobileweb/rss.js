function sortData(data) {
    data.sort(function(a, b) {
        return data[a].title < data[b].title ? -1 : 1;
    });
    return data;
}

var url = "http://dcoa.dc.gov/node/all/events";

var RSS_URL = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=" + encodeURIComponent(url);

var json, responseData, i, dcoaEvent;

var data = [];

exports.loadEvents = function(o, tries) {
    var xhr = Titanium.Network.createHTTPClient();
    var tries = tries || 0;
    xhr.open("GET", RSS_URL);
    xhr.onload = function() {
        Ti.API.debug(this.responseText);
        json = JSON.parse(this.responseText);
        if (null === json) {
            if (3 > tries) {
                tries++;
                exports.loadRssFeed(o, tries);
                return;
            }
            alert("Error reading the events. Make sure you have a network connection and try refreshing.");
            o.error && o.error();
            return;
        }
        var events = json.responseData.feed.entries;
        for (i = 0; events.length > i; i++) {
            dcoaEvent = events[i];
            data.push({
                title: dcoaEvent.title,
                link: dcoaEvent.link,
                description: dcoaEvent.content,
                briefDescription: dcoaEvent.contentSnippet
            });
        }
        o.success && o.success(data);
    };
    xhr.onerror = function() {
        o.error && o.error();
    };
    o.start && o.start();
    xhr.send();
};