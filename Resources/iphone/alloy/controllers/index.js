function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function successCallback(e) {
        var request = Titanium.Network.createHTTPClient({
            onload: function(e) {
                if (200 != request.status && 201 != request.status) {
                    request.onerror(e);
                    return;
                }
            },
            onerror: function(e) {
                Ti.API.info("Push Notifications registration with Parse failed. Error: " + e.error);
            }
        });
        var params = {
            deviceType: "ios",
            deviceToken: e.deviceToken,
            channels: [ "" ],
            badge: "Increment"
        };
        request.open("POST", "https://api.parse.com/1/installations", true);
        request.setRequestHeader("X-Parse-Application-Id", Alloy.Globals.parseId);
        request.setRequestHeader("X-Parse-REST-API-Key", Alloy.Globals.parseKey);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(params));
    }
    function errorCallback(e) {
        Ti.API.info("Error during registration: " + e.error);
    }
    function messageCallback(e) {
        var message;
        message = void 0 != e["aps"] && void 0 != e["aps"]["alert"] ? void 0 != e["aps"]["alert"]["body"] ? e["aps"]["alert"]["body"] : e["aps"]["alert"] : e.data.aps.alert;
        var my_alert = Ti.UI.createAlertDialog({
            title: "DCOA",
            message: message
        });
        my_alert.show();
    }
    function goToPage(e) {
        var childWin = Alloy.createController(e.source.id).getView();
        Alloy.CFG.navgroup.openWindow(childWin);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index",
        title: "DC Office on Aging",
        backgroundColor: "white",
        layout: "vertical"
    });
    var __alloyId8 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundImage: "/slideshow/dcoa-slide1.jpg"
    });
    __alloyId8.push($.__views.view1);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundImage: "/slideshow/dcoa-slide2.jpg"
    });
    __alloyId8.push($.__views.view2);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundImage: "/slideshow/dcoa-slide3.jpg"
    });
    __alloyId8.push($.__views.view3);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        backgroundImage: "/slideshow/dcoa-slide4.jpg"
    });
    __alloyId8.push($.__views.view4);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        pagingControlColor: "#dddddd",
        borderColor: "#2B4888",
        borderWidth: 1,
        views: __alloyId8,
        id: "scrollableView",
        showPagingControl: "true",
        height: "170",
        backgroundColor: "#ffffff"
    });
    $.__views.index.add($.__views.scrollableView);
    $.__views.__alloyId9 = Ti.UI.createScrollView({
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "__alloyId9"
    });
    $.__views.index.add($.__views.__alloyId9);
    $.__views.serviceTypes = Ti.UI.createButton({
        width: "95%",
        height: 60,
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        title: "",
        id: "serviceTypes",
        layout: "horizontal"
    });
    $.__views.__alloyId9.add($.__views.serviceTypes);
    goToPage ? $.__views.serviceTypes.addEventListener("click", goToPage) : __defers["$.__views.serviceTypes!click!goToPage"] = true;
    $.__views.servicesIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.location.round.png",
        id: "servicesIcon"
    });
    $.__views.serviceTypes.add($.__views.servicesIcon);
    $.__views.servicesLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2B4888",
        top: 18,
        left: 10,
        font: {
            fontSize: 19
        },
        text: "Services & Resources",
        id: "servicesLabel"
    });
    $.__views.serviceTypes.add($.__views.servicesLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "25",
        id: "arrow"
    });
    $.__views.serviceTypes.add($.__views.arrow);
    $.__views.events = Ti.UI.createButton({
        width: "95%",
        height: 60,
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        title: "",
        id: "events",
        layout: "horizontal"
    });
    $.__views.__alloyId9.add($.__views.events);
    goToPage ? $.__views.events.addEventListener("click", goToPage) : __defers["$.__views.events!click!goToPage"] = true;
    $.__views.eventsIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.calendar.month.png",
        id: "eventsIcon"
    });
    $.__views.events.add($.__views.eventsIcon);
    $.__views.eventsLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2B4888",
        top: 18,
        left: 10,
        font: {
            fontSize: 19
        },
        text: "Upcoming Events",
        id: "eventsLabel"
    });
    $.__views.events.add($.__views.eventsLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "59",
        id: "arrow"
    });
    $.__views.events.add($.__views.arrow);
    $.__views.about = Ti.UI.createButton({
        width: "95%",
        height: 60,
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        title: "",
        id: "about",
        layout: "horizontal"
    });
    $.__views.__alloyId9.add($.__views.about);
    goToPage ? $.__views.about.addEventListener("click", goToPage) : __defers["$.__views.about!click!goToPage"] = true;
    $.__views.aboutIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.people.multiple.png",
        id: "aboutIcon"
    });
    $.__views.about.add($.__views.aboutIcon);
    $.__views.aboutLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2B4888",
        top: 18,
        left: 10,
        font: {
            fontSize: 19
        },
        text: "About Us",
        id: "aboutLabel"
    });
    $.__views.about.add($.__views.aboutLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "129",
        id: "arrow"
    });
    $.__views.about.add($.__views.arrow);
    $.__views.contact = Ti.UI.createButton({
        width: "95%",
        height: 60,
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        title: "",
        id: "contact",
        layout: "horizontal"
    });
    $.__views.__alloyId9.add($.__views.contact);
    goToPage ? $.__views.contact.addEventListener("click", goToPage) : __defers["$.__views.contact!click!goToPage"] = true;
    $.__views.contactIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.phone.png",
        id: "contactIcon"
    });
    $.__views.contact.add($.__views.contactIcon);
    $.__views.contactLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#2B4888",
        top: 18,
        left: 10,
        font: {
            fontSize: 19
        },
        text: "Contact Us",
        id: "contactLabel"
    });
    $.__views.contact.add($.__views.contactLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "113",
        id: "arrow"
    });
    $.__views.contact.add($.__views.arrow);
    $.__views.navgroup = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.index,
        id: "navgroup"
    });
    $.__views.navgroup && $.addTopLevelView($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    new Array();
    Alloy.Globals.Map = require("ti.map");
    Alloy.CFG.navgroup = $.navgroup;
    Alloy.CFG.navgroup.open();
    Ti.UI.iPhone.appBadge = 0;
    Titanium.Network.registerForPushNotifications({
        types: [ Titanium.Network.NOTIFICATION_TYPE_BADGE, Titanium.Network.NOTIFICATION_TYPE_ALERT, Titanium.Network.NOTIFICATION_TYPE_SOUND ],
        success: successCallback,
        error: errorCallback,
        callback: messageCallback
    });
    Alloy.Globals.parent = $.index;
    $.index.open();
    __defers["$.__views.serviceTypes!click!goToPage"] && $.__views.serviceTypes.addEventListener("click", goToPage);
    __defers["$.__views.events!click!goToPage"] && $.__views.events.addEventListener("click", goToPage);
    __defers["$.__views.about!click!goToPage"] && $.__views.about.addEventListener("click", goToPage);
    __defers["$.__views.contact!click!goToPage"] && $.__views.contact.addEventListener("click", goToPage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;