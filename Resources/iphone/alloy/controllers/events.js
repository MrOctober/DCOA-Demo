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
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.events = Ti.UI.createWindow({
        id: "events",
        title: "DCOA-Events",
        backgroundColor: "white"
    });
    $.__views.events && $.addTopLevelView($.__views.events);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        showCancel: "true",
        height: "50",
        top: "0"
    });
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "#efefef",
        allowsSelection: true,
        touchEnabled: true,
        scrollable: true,
        showVerticalScrollIndicator: true,
        separatorStyle: 1,
        separatorColor: "#cccccc",
        width: Ti.UI.FILL,
        search: $.__views.search,
        id: "table",
        filterAttribute: "filter"
    });
    $.__views.events.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var data;
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
        var doc = Ti.XML.parseString(this.responseText).documentElement;
        var elements = doc.getElementsByTagName("div");
        doc.getElementsByTagName("span");
        for (var i = 0; i < elements.length; i++) {
            var title, date, startDate, endDate, building, location, details, cost, website, contact, phone, email, ward;
            Ti.API.info(startDate + "-" + endDate);
            if (elements.item(i).getElementsByTagName("div").length > 0) {
                title = null != elements.item(i).getElementsByTagName("div").item(0) ? elements.item(i).getElementsByTagName("div").item(0).text : "";
                if (null != elements.item(i).getElementsByTagName("div").item(1)) {
                    date = elements.item(i).getElementsByTagName("div").item(1).text;
                    startDate = elements.item(i).getElementsByTagName("span").item(1).getAttribute("content");
                    endDate = elements.item(i).getElementsByTagName("span").item(2).getAttribute("content");
                } else {
                    date = "";
                    endDate = "";
                }
                building = null != elements.item(i).getElementsByTagName("div").item(2) ? elements.item(i).getElementsByTagName("div").item(2).text : "";
                location = null != elements.item(i).getElementsByTagName("div").item(3) ? elements.item(i).getElementsByTagName("div").item(3).text : "";
                details = null != elements.item(i).getElementsByTagName("div").item(4) ? elements.item(i).getElementsByTagName("div").item(4).text : "";
                cost = null != elements.item(i).getElementsByTagName("div").item(5) ? elements.item(i).getElementsByTagName("div").item(5).text : "";
                contact = null != elements.item(i).getElementsByTagName("div").item(6) ? elements.item(i).getElementsByTagName("div").item(6).text : "";
                phone = null != elements.item(i).getElementsByTagName("div").item(7) ? elements.item(i).getElementsByTagName("div").item(7).text : "";
                email = null != elements.item(i).getElementsByTagName("div").item(8) ? elements.item(i).getElementsByTagName("div").item(8).text : "";
                ward = null != elements.item(i).getElementsByTagName("div").item(9) ? elements.item(i).getElementsByTagName("div").item(9).text : "";
                data = elements.getChildNodes.getNodeValue.item(i).text;
                Ti.API.info(data);
                var rowData = {
                    title: title,
                    date: date,
                    startDate: startDate,
                    endDate: endDate,
                    building: building,
                    location: location,
                    details: details,
                    cost: cost,
                    website: website,
                    contact: contact,
                    phone: phone,
                    email: email,
                    ward: ward,
                    data: data
                };
                $.table.setData(sectionArr);
                rows.push(Alloy.createController("row", rowData).getView());
            }
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