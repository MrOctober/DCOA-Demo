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
    this.__controllerPath = "detail";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        id: "detail",
        backgroundColor: "white"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "__alloyId0"
    });
    $.__views.detail.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        top: 15,
        width: Ti.UI.FILL,
        textAlign: "left",
        color: "#444444",
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.title = Ti.UI.createLabel({
        color: "#2B4888",
        top: -15,
        left: 10,
        right: 10,
        font: {
            fontSize: 21,
            fontWeight: "bold"
        },
        id: "title"
    });
    $.__views.__alloyId1.add($.__views.title);
    $.__views.date = Ti.UI.createLabel({
        color: "#444444",
        top: 0,
        left: 10,
        right: 10,
        font: {
            fontSize: 21,
            fontWeight: "bold"
        },
        id: "date"
    });
    $.__views.__alloyId1.add($.__views.date);
    $.__views.building = Ti.UI.createLabel({
        color: "#444444",
        left: 10,
        right: 10,
        id: "building"
    });
    $.__views.__alloyId1.add($.__views.building);
    $.__views.location = Ti.UI.createLabel({
        color: "#444444",
        left: 10,
        right: 10,
        id: "location"
    });
    $.__views.__alloyId1.add($.__views.location);
    $.__views.details = Ti.UI.createLabel({
        color: "#444444",
        left: 10,
        id: "details"
    });
    $.__views.__alloyId1.add($.__views.details);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "+ Add Event to Calendar",
        top: "25",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.name;
    $.date.text = args.date;
    $.building.text = args.building;
    $.location.text = args.location;
    $.details.text = args.detais;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;