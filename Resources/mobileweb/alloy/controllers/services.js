function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function compareStrings(a, b) {
        return b > a ? -1 : a > b ? 1 : 0;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "services";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.services = Ti.UI.createWindow({
        id: "services",
        title: "Services & Resources",
        backgroundColor: "white"
    });
    $.__views.services && $.addTopLevelView($.__views.services);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId45"
    });
    $.__views.services.add($.__views.__alloyId45);
    var __alloyId46 = [];
    $.__views.mapview = require("ti.map").createView({
        annotations: __alloyId46,
        id: "mapview",
        height: "150",
        top: "0",
        regionFit: "true",
        userLocation: "true"
    });
    $.__views.__alloyId45.add($.__views.mapview);
    $.__views.serviceList = Ti.UI.createTableView({
        id: "serviceList",
        filterAttribute: "filter"
    });
    $.__views.__alloyId45.add($.__views.serviceList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Globals.Map = require("ti.map");
    Ti.API.info(Alloy.Globals.servicesList);
    var rowData = [];
    var rows = [];
    var sectionArr = [];
    var Map = require("ti.map");
    var poiLat, poiLong, i;
    var serviceProviders = Alloy.Globals.servicesList;
    for (i = 0; serviceProviders.length > i; i++) {
        serviceProviders.sort(function(a, b) {
            return compareStrings(a.NAME, b.NAME);
        });
        for (var j = 0; Alloy.Globals.selectedTypes.length > j; j++) if (serviceProviders[i].SERVICES === Alloy.Globals.selectedTypes[j]) for (var k = 0; Alloy.Globals.selectedWards.length > k; k++) if (serviceProviders[i].wardLocation === Alloy.Globals.selectedWards[k]) {
            var rowData = {
                name: serviceProviders[i].NAME,
                services: serviceProviders[i].SERVICES,
                webAddress: serviceProviders[i].webAddress,
                fax: serviceProviders[i].faxNumber,
                officeNumber: serviceProviders[i].officeNumber,
                address: serviceProviders[i].Address,
                ward: serviceProviders[i].wardLocation,
                email: serviceProviders[i].EMAIL
            };
            $.serviceList.setData(sectionArr);
            rows.push(Alloy.createController("servicerow", rowData).getView());
        }
        $.serviceList.setData(rows);
    }
    var rowCount = $.serviceList.sections[0].rows.length;
    var b = 0;
    for (b; rowCount > b; b++) {
        var address;
        var name;
        address = $.serviceList.sections[0].rows[b].children[1].text;
        name = $.serviceList.sections[0].rows[b].children[0].text;
        var googleRequest = Titanium.Network.createHTTPClient();
        var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + address;
        googleRequest.onload = function() {
            var response = JSON.parse(this.responseText);
            if ("OK" == response.status) {
                var pointOfInterest = Map.createAnnotation({
                    latitude: response.results[0].geometry.location.lat,
                    longitude: response.results[0].geometry.location.lng,
                    title: name,
                    pincolor: Map.ANNOTATION_RED,
                    animate: true,
                    myid: b
                });
                $.mapview.addAnnotation(pointOfInterest);
                poiLat = pointOfInterest.latitude;
                poiLong = pointOfInterest.longitude;
                var region = {
                    latitude: poiLat,
                    longitude: poiLong,
                    latitudeDelta: .03,
                    longitudeDelta: .03
                };
                $.mapview.setRegion(region);
            }
        };
        googleRequest.onerror = function(e) {
            Ti.API.error(e.error);
            alert(e.error);
        };
        googleRequest.open("GET", addrUrl);
        googleRequest.send();
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;