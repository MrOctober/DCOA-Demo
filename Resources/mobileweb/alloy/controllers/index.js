function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToPage(e) {
        var childWin = Alloy.createController(e.source.id).getView();
        Alloy.CFG.navgroup.openWindow(childWin);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
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
    var __alloyId3 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundImage: "/slideshow/dcoa-slide1.jpg"
    });
    __alloyId3.push($.__views.view1);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: "100%",
        height: 50,
        color: "#ffffff",
        top: 80,
        left: 0,
        opacity: .7,
        backgroundColor: "#2B4888",
        textAlign: "center",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        text: "The Age-Friendly DC Initiative",
        id: "__alloyId4"
    });
    $.__views.view1.add($.__views.__alloyId4);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundImage: "/slideshow/dcoa-slide2.png"
    });
    __alloyId3.push($.__views.view2);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: "100%",
        height: 50,
        color: "#ffffff",
        top: 80,
        left: 0,
        opacity: .7,
        backgroundColor: "#2B4888",
        textAlign: "center",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        text: "Hospital and Nursing Home Transition...",
        id: "__alloyId5"
    });
    $.__views.view2.add($.__views.__alloyId5);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundImage: "/slideshow/dcoa-slide3.png"
    });
    __alloyId3.push($.__views.view3);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: "100%",
        height: 50,
        color: "#ffffff",
        top: 80,
        left: 0,
        opacity: .7,
        backgroundColor: "#2B4888",
        textAlign: "center",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        text: "Intergenerational Programs",
        id: "__alloyId6"
    });
    $.__views.view3.add($.__views.__alloyId6);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId3,
        id: "scrollableView",
        showPagingControl: "true",
        height: "150"
    });
    $.__views.index.add($.__views.scrollableView);
    $.__views.__alloyId7 = Ti.UI.createScrollView({
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "__alloyId7"
    });
    $.__views.index.add($.__views.__alloyId7);
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
    $.__views.__alloyId7.add($.__views.serviceTypes);
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
    $.__views.__alloyId7.add($.__views.events);
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
    $.__views.__alloyId7.add($.__views.about);
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
    $.__views.__alloyId7.add($.__views.contact);
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
    Alloy.CFG.navgroup = $.navgroup;
    Alloy.CFG.navgroup.open();
    var urlParse = "https://dbUBeketcWj9aWl7zAvqqtZrZXTCvnu1P8oAb6Rr:javascript-key=6ZLWfep4E66CKPF6dGb7jvvFaTSrXYfWa0A5LvHN@api.parse.com/1/classes/Services";
    var xhr = Ti.Network.createHTTPClient({
        timeout: 3e5
    });
    xhr.onerror = function(e) {
        Ti.API.debug(e.error);
        alert(e.error);
        return false;
    };
    xhr.onload = function() {
        Ti.API.debug(this.responseText);
        var json = JSON.parse(this.responseText);
        Alloy.Globals.servicesList = json.results;
        Ti.API.info(Alloy.Globals.servicesList);
    };
    xhr.open("GET", urlParse);
    xhr.send({});
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