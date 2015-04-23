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
    this.__controllerPath = "servicerow";
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
    $.__views.serviceRow = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        left: 0,
        id: "serviceRow",
        layout: "vertical",
        height: Ti.UI.SIZE,
        hasChild: "true"
    });
    $.__views.serviceRow && $.addTopLevelView($.__views.serviceRow);
    $.__views.name = Ti.UI.createLabel({
        color: "#2B4888",
        left: 10,
        right: 10,
        top: 10,
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        id: "name"
    });
    $.__views.serviceRow.add($.__views.name);
    $.__views.address = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontFamily: "Arial",
            fontSize: 14,
            fontWeight: "normal"
        },
        left: 10,
        right: 10,
        id: "address"
    });
    $.__views.serviceRow.add($.__views.address);
    $.__views.services = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "bold"
        },
        left: 10,
        right: 10,
        top: 2,
        id: "services"
    });
    $.__views.serviceRow.add($.__views.services);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        color: "#333",
        height: "10",
        id: "__alloyId50"
    });
    $.__views.serviceRow.add($.__views.__alloyId50);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.name;
    $.address.text = args.address;
    $.services.text = args.services;
    $.serviceRow.filter = $.name.text + $.address.text + $.services.text;
    $.serviceRow.addEventListener("click", function() {
        var details = {
            name: args.name,
            services: args.services,
            webAddress: args.webAddress,
            fax: args.fax,
            officeNumber: args.officeNumber,
            address: args.address,
            ward: args.ward,
            email: args.email
        };
        var detailWin = Alloy.createController("serviceDetail", details).getView();
        detailWin.title = args.title;
        Alloy.CFG.navgroup.openWindow(detailWin);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;