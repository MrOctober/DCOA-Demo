function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "events";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rowData = [];
    var rows = [];
    var sectionArr = [];
    var eventsUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fdcoa.dc.gov%2Fsystem-use%2Fevents-api%2F%22%20AND%20xpath%3D%22%2F%2F*%5B%40class%3D%27list-item%27%5D%22&diagnostics=true";
    var xhr = Ti.Network.createHTTPClient({
        timeout: 3e5
    });
    xhr.onerror = function(e) {
        Ti.API.debug(e.error);
        alert(e.error);
        return false;
    };
    xhr.onload = function() {
        var doc = this.responseXML;
        var elements = doc.documentElement.getElementsByTagName("div");
        for (var i = 0; elements.length > i; i++) if (elements.item(i).getElementsByTagName("div").length > 0) {
            var rowData = {
                title: elements.item(i).getElementsByTagName("div").item(0).text,
                date: elements.item(i).getElementsByTagName("div").item(1).text,
                building: elements.item(i).getElementsByTagName("div").item(2).text,
                location: elements.item(i).getElementsByTagName("div").item(3).text,
                details: elements.item(i).getElementsByTagName("div").item(4).text
            };
            $.table.setData(sectionArr);
            rows.push(Alloy.createController("row", rowData).getView());
        }
        $.table.setData(rows);
    };
    xhr.open("GET", eventsUrl);
    xhr.send();
    $.search.addEventListener("change", function() {
        $.table.setFilterAttribute(rowData.title);
        $.table.setFilterAttribute(rowData.description);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;