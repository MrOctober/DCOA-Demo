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
        childWin.open();
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
        backgroundColor: "#ffffff"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    var __alloyId5 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundImage: "/slideshow/dcoa-slide1.jpg"
    });
    __alloyId5.push($.__views.view1);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundImage: "/slideshow/dcoa-slide2.jpg"
    });
    __alloyId5.push($.__views.view2);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundImage: "/slideshow/dcoa-slide3.jpg"
    });
    __alloyId5.push($.__views.view3);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundImage: "/slideshow/dcoa-slide3.jpg"
    });
    __alloyId5.push($.__views.view3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        pagingControlColor: "#dddddd",
        borderColor: "#2B4888",
        borderWidth: 1,
        views: __alloyId5,
        id: "scrollableView",
        showPagingControl: "true",
        height: "170",
        backgroundColor: "#ffffff"
    });
    $.__views.__alloyId4.add($.__views.scrollableView);
    $.__views.__alloyId6 = Ti.UI.createScrollView({
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.serviceTypes = Ti.UI.createView({
        width: "95%",
        height: "60",
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        id: "serviceTypes",
        layout: "horizontal"
    });
    $.__views.__alloyId6.add($.__views.serviceTypes);
    goToPage ? $.__views.serviceTypes.addEventListener("click", goToPage) : __defers["$.__views.serviceTypes!click!goToPage"] = true;
    $.__views.servicesIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.location.round.png",
        touchEnabled: false,
        id: "servicesIcon",
        bubbleParent: "true"
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
        touchEnabled: false,
        id: "servicesLabel"
    });
    $.__views.serviceTypes.add($.__views.servicesLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "15",
        touchEnabled: false,
        id: "arrow"
    });
    $.__views.serviceTypes.add($.__views.arrow);
    $.__views.events = Ti.UI.createView({
        width: "95%",
        height: "60",
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        id: "events",
        layout: "horizontal"
    });
    $.__views.__alloyId6.add($.__views.events);
    goToPage ? $.__views.events.addEventListener("click", goToPage) : __defers["$.__views.events!click!goToPage"] = true;
    $.__views.eventsIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.calendar.month.png",
        touchEnabled: false,
        id: "eventsIcon",
        bubbleParent: "true"
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
        touchEnabled: false,
        id: "eventsLabel"
    });
    $.__views.events.add($.__views.eventsLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "49",
        touchEnabled: false,
        id: "arrow"
    });
    $.__views.events.add($.__views.arrow);
    $.__views.about = Ti.UI.createView({
        width: "95%",
        height: "60",
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        id: "about",
        layout: "horizontal"
    });
    $.__views.__alloyId6.add($.__views.about);
    goToPage ? $.__views.about.addEventListener("click", goToPage) : __defers["$.__views.about!click!goToPage"] = true;
    $.__views.aboutIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.people.multiple.png",
        touchEnabled: false,
        id: "aboutIcon",
        bubbleParent: "true"
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
        touchEnabled: false,
        id: "aboutLabel"
    });
    $.__views.about.add($.__views.aboutLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "119",
        touchEnabled: false,
        id: "arrow"
    });
    $.__views.about.add($.__views.arrow);
    $.__views.contact = Ti.UI.createView({
        width: "95%",
        height: "60",
        backgroundColor: "#ebecee",
        color: "#999999",
        borderColor: "#cccccc",
        borderWidth: 2,
        top: 20,
        touchEnabled: "true",
        id: "contact",
        layout: "horizontal"
    });
    $.__views.__alloyId6.add($.__views.contact);
    goToPage ? $.__views.contact.addEventListener("click", goToPage) : __defers["$.__views.contact!click!goToPage"] = true;
    $.__views.contactIcon = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        left: 5,
        backgroundImage: "/appbar.phone.png",
        touchEnabled: false,
        id: "contactIcon",
        bubbleParent: "true"
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
        touchEnabled: false,
        id: "contactLabel"
    });
    $.__views.contact.add($.__views.contactLabel);
    $.__views.arrow = Ti.UI.createLabel({
        width: 40,
        height: 40,
        color: "#000",
        top: 10,
        backgroundImage: "/arrow.png",
        left: "103",
        touchEnabled: false,
        id: "arrow"
    });
    $.__views.contact.add($.__views.arrow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    new Array();
    Alloy.Globals.Map = require("ti.map");
    $.index.open();
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