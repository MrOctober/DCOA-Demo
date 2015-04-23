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
    this.__controllerPath = "serviceDetail";
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
    $.__views.serviceDetail = Ti.UI.createWindow({
        id: "serviceDetail",
        backgroundColor: "white"
    });
    $.__views.serviceDetail && $.addTopLevelView($.__views.serviceDetail);
    var __alloyId13 = [];
    $.__views.mapview = require("ti.map").createView({
        annotations: __alloyId13,
        id: "mapview",
        height: "200",
        top: "0",
        regionFit: "true",
        userLocation: "true"
    });
    $.__views.serviceDetail.add($.__views.mapview);
    $.__views.__alloyId14 = Ti.UI.createScrollView({
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        top: "200",
        id: "__alloyId14"
    });
    $.__views.serviceDetail.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#fff",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.name = Ti.UI.createLabel({
        color: "#2B4888",
        font: {
            fontSize: 21,
            fontWeight: "bold"
        },
        top: 10,
        left: 10,
        right: 10,
        id: "name"
    });
    $.__views.__alloyId15.add($.__views.name);
    $.__views.address = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        id: "address"
    });
    $.__views.__alloyId15.add($.__views.address);
    $.__views.ward = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 16,
            fontWeight: "normal"
        },
        left: 10,
        right: 10,
        id: "ward"
    });
    $.__views.__alloyId15.add($.__views.ward);
    $.__views.phoneView = Ti.UI.createView({
        id: "phoneView",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: "10"
    });
    $.__views.__alloyId15.add($.__views.phoneView);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        text: "Phone: ",
        id: "__alloyId16"
    });
    $.__views.phoneView.add($.__views.__alloyId16);
    $.__views.officeNumber = Ti.UI.createLabel({
        color: "#20399d",
        font: {
            fontSize: 16,
            fontWeight: "normal"
        },
        left: 10,
        right: 10,
        id: "officeNumber"
    });
    $.__views.phoneView.add($.__views.officeNumber);
    $.__views.faxView = Ti.UI.createView({
        id: "faxView",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: "10"
    });
    $.__views.__alloyId15.add($.__views.faxView);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        text: "Fax: ",
        id: "__alloyId17"
    });
    $.__views.faxView.add($.__views.__alloyId17);
    $.__views.fax = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 16,
            fontWeight: "normal"
        },
        left: 10,
        right: 10,
        id: "fax"
    });
    $.__views.faxView.add($.__views.fax);
    $.__views.websiteView = Ti.UI.createView({
        id: "websiteView",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: "10"
    });
    $.__views.__alloyId15.add($.__views.websiteView);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        text: "Website: ",
        id: "__alloyId18"
    });
    $.__views.websiteView.add($.__views.__alloyId18);
    $.__views.webAddress = Ti.UI.createLabel({
        color: "#20399d",
        font: {
            fontSize: 16,
            fontWeight: "normal"
        },
        left: 10,
        id: "webAddress"
    });
    $.__views.websiteView.add($.__views.webAddress);
    $.__views.servicesView = Ti.UI.createView({
        top: 15,
        id: "servicesView",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        left: "10"
    });
    $.__views.__alloyId15.add($.__views.servicesView);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        text: "Services and Resources:",
        id: "__alloyId19"
    });
    $.__views.servicesView.add($.__views.__alloyId19);
    $.__views.services = Ti.UI.createLabel({
        color: "#444444",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        id: "services"
    });
    $.__views.__alloyId15.add($.__views.services);
    $.__views.website = Ti.UI.createWindow({
        id: "website"
    });
    $.__views.website && $.addTopLevelView($.__views.website);
    $.__views.webView = Ti.UI.createWebView({
        id: "webView"
    });
    $.__views.website.add($.__views.webView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var Map = require("ti.map");
    var poiLat, poiLong;
    Ti.Geolocation.purpose = "Get Current Location";
    $.name.text = args.name;
    $.services.text = args.services;
    $.address.text = args.address;
    if ("<Null>" !== args.webAddress) $.webAddress.text = args.webAddress; else {
        $.websiteView.height = "0";
        $.websiteView.hide();
    }
    if ("<Null>" !== args.fax) $.fax.text = args.fax; else {
        $.faxView.height = "0";
        $.faxView.hide();
    }
    if ("<Null>" !== args.officeNumber) $.officeNumber.text = args.officeNumber; else {
        $.phoneView.height = "0";
        $.phoneView.hide();
    }
    if ("<Null>" !== args.ward) $.ward.text = args.ward; else {
        $.ward.height = "0";
        $.ward.hide();
    }
    args.address;
    var xhr = Titanium.Network.createHTTPClient();
    var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + args.address;
    xhr.open("GET", addrUrl);
    xhr.onload = function() {
        var json = JSON.parse(this.responseText);
        if ("OK" != json.status) return;
        var pointOfInterest = Map.createAnnotation({
            latitude: json.results[0].geometry.location.lat,
            longitude: json.results[0].geometry.location.lng,
            title: $.name.text,
            pincolor: Map.ANNOTATION_RED,
            animate: true,
            zoom: 13
        });
        Ti.API.info(json.results[0].geometry.location);
        poiLat = pointOfInterest.latitude;
        poiLong = pointOfInterest.longitude;
        var region = {
            latitude: poiLat,
            longitude: poiLong,
            userLocation: true,
            latitudeDelta: .003,
            longitudeDelta: .003
        };
        $.mapview.setRegion(region);
        var annotations = [ pointOfInterest ];
        $.mapview.annotations = annotations;
    };
    xhr.onerror = function(e) {
        Ti.API.error(e.error);
        alert(e.error + " - Please check your connection and try again.");
    };
    xhr.send();
    $.officeNumber.addEventListener("click", function() {
        var phoneNumber = $.officeNumber.text;
        phoneNumber = phoneNumber.replace("(0)", "").replace("-", "").replace("/", "").split(" ").join("");
        Titanium.Platform.openURL("telprompt://" + phoneNumber);
    });
    $.webAddress.addEventListener("click", function() {
        var webAddress = args.webAddress;
        var websiteUrl = "http://" + webAddress;
        Alloy.CFG.navgroup.openWindow($.website);
        $.webView.url = websiteUrl;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;