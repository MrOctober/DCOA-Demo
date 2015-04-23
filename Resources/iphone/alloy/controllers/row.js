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
    this.__controllerPath = "row";
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
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        hasChild: "true",
        width: Ti.UI.FILL,
        left: 0,
        id: "row",
        layout: "vertical"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.title = Ti.UI.createLabel({
        top: -10,
        left: 10,
        right: 10,
        color: "#2B4888",
        font: {
            fontWeight: "bold",
            fontSize: 19
        },
        id: "title"
    });
    $.__views.row.add($.__views.title);
    $.__views.date = Ti.UI.createLabel({
        top: 5,
        left: 10,
        right: 10,
        color: "#444444",
        font: {
            fontWeight: "bold",
            fontSize: 16
        },
        id: "date"
    });
    $.__views.row.add($.__views.date);
    $.__views.location = Ti.UI.createLabel({
        top: -10,
        left: 10,
        right: 10,
        color: "#444444",
        font: {
            fontSize: 15
        },
        id: "location"
    });
    $.__views.row.add($.__views.location);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: " ",
        id: "__alloyId12"
    });
    $.__views.row.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title;
    $.date.text = args.date;
    $.location.text = args.location;
    $.row.filter = $.title.text;
    $.row.addEventListener("click", function() {
        var details = {
            name: args.title,
            date: args.date,
            startDate: args.startDate,
            endDate: args.endDate,
            building: args.building,
            location: args.location,
            details: args.details,
            cost: args.cost,
            website: args.website,
            contact: args.contact,
            phone: args.phone,
            email: args.email,
            ward: args.ward,
            data: args.data
        };
        var detailWin = Alloy.createController("detail", details).getView();
        detailWin.title = args.title;
        Alloy.CFG.navgroup.openWindow(detailWin);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;