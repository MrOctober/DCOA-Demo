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
    this.__controllerPath = "services";
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
    $.__views.services = Ti.UI.createWindow({
        id: "services",
        title: "Services & Resources",
        backgroundColor: "white"
    });
    $.__views.services && $.addTopLevelView($.__views.services);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId44"
    });
    $.__views.services.add($.__views.__alloyId44);
    var __alloyId45 = [];
    $.__views.mapview = require("ti.map").createView({
        mapType: Alloy.Globals.Map.NORMAL_TYPE,
        annotations: __alloyId45,
        id: "mapview",
        height: "150",
        top: "0",
        regionFit: "true",
        userLocation: "true"
    });
    $.__views.__alloyId44.add($.__views.mapview);
    $.__views.serviceList = Ti.UI.createTableView({
        id: "serviceList",
        filterAttribute: "filter"
    });
    $.__views.__alloyId44.add($.__views.serviceList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var Map = require("ti.map");
    var data = [];
    var rowData = [];
    var rows = [];
    var sectionArr = [];
    var i;
    var serviceProviders = Alloy.Globals.servicesList;
    var selectedTypes = Alloy.Globals.selectedTypes;
    var selectedWards = Alloy.Globals.selectedWards;
    $.services.addEventListener("android:back", function() {
        var wardsWin = Alloy.createController("wardSelect").getView();
        wardsWin.open();
        $.services.close();
    });
    !function() {
        function compareStrings(a, b) {
            return b > a ? -1 : a > b ? 1 : 0;
        }
        for (i = 0; i < serviceProviders.length; i++) {
            serviceProviders.sort(function(a, b) {
                return compareStrings(a.NAME, b.NAME);
            });
            for (var x in selectedTypes) if (selectedTypes[x] === serviceProviders[i].SERVICES) for (x in selectedWards) if (selectedWards[x] === serviceProviders[i].wardLocation) {
                Ti.API.info(serviceProviders[i]);
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
                data.push({
                    name: serviceProviders[i].NAME,
                    services: serviceProviders[i].SERVICES,
                    webAddress: serviceProviders[i].webAddress,
                    fax: serviceProviders[i].faxNumber,
                    officeNumber: serviceProviders[i].officeNumber,
                    address: serviceProviders[i].Address,
                    ward: serviceProviders[i].wardLocation,
                    email: serviceProviders[i].EMAIL
                });
                rows.push(Alloy.createController("servicerow", rowData).getView());
            }
        }
    }();
    if (0 === rows.length) {
        var rowData = {
            name: "There were no results for your search.  Please try again",
            services: "",
            address: ""
        };
        $.serviceList.setData(sectionArr);
        rows.push(Alloy.createController("servicerow", rowData).getView());
        $.serviceList.setData(rows);
    } else $.serviceList.setData(rows);
    $.services.addEventListener("open", function() {
        for (x in data) {
            var googleRequest = Titanium.Network.createHTTPClient({
                timeout: 1e4
            });
            var name = data[x].name;
            var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + data[x].address;
            !function(_name) {
                googleRequest.onload = function() {
                    var response = JSON.parse(this.responseText);
                    if ("OK" == response.status) {
                        var pointOfInterest = Map.createAnnotation({
                            latitude: response.results[0].geometry.location.lat,
                            longitude: response.results[0].geometry.location.lng,
                            title: _name,
                            pincolor: Map.ANNOTATION_RED,
                            animate: true,
                            myid: x
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
            }(name);
            googleRequest.onerror = function(e) {
                Ti.API.error(e.error + "Please close app and try again later");
                alert(e.error + " Please close app and try again later");
            };
            googleRequest.open("GET", addrUrl);
            googleRequest.send();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;