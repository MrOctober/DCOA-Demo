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
    this.__controllerPath = "wardSelect";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.wardWin = Ti.UI.createWindow({
        id: "wardWin",
        title: "Select Ward",
        backgroundColor: "#fff"
    });
    $.__views.wardWin && $.addTopLevelView($.__views.wardWin);
    var __alloyId47 = [];
    $.__views.__alloyId48 = Ti.UI.createTableViewSection({
        headerTitle: "Please tap wards to select ",
        id: "__alloyId48"
    });
    __alloyId47.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 1",
        hasCheck: "false",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 2",
        hasCheck: "false",
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 3",
        hasCheck: "false",
        id: "__alloyId51"
    });
    $.__views.__alloyId48.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 4",
        hasCheck: "false",
        id: "__alloyId52"
    });
    $.__views.__alloyId48.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 5",
        hasCheck: "false",
        id: "__alloyId53"
    });
    $.__views.__alloyId48.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 6",
        hasCheck: "false",
        id: "__alloyId54"
    });
    $.__views.__alloyId48.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 7",
        hasCheck: "false",
        id: "__alloyId55"
    });
    $.__views.__alloyId48.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Ward 8",
        hasCheck: "false",
        id: "__alloyId56"
    });
    $.__views.__alloyId48.add($.__views.__alloyId56);
    $.__views.wardSelect = Ti.UI.createTableView({
        data: __alloyId47,
        id: "wardSelect",
        layout: "vertical",
        backgroundColor: "#fff"
    });
    $.__views.wardWin.add($.__views.wardSelect);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var selections = [];
    Alloy.Globals.selectedWards = "";
    $.wardSelect.addEventListener("click", function(e) {
        if (e.row.selected) {
            Titanium.API.info("not selected clicked");
            e.row.color = "#333";
            e.row.hasCheck = false;
        } else {
            Titanium.API.info("selected clicked");
            e.row.color = "#2b4888";
            e.row.backgroundColor = "#dde8ff";
            e.row.hasCheck = true;
        }
        e.row.selected = !e.row.selected;
    });
    $.submitWards.addEventListener("click", function() {
        var rows = $.wardSelect.data[0].rows;
        for (var x in rows) true === rows[x].hasCheck && -1 == selections.indexOf(rows[x].title) && selections.push(rows[x].title);
        Alloy.Globals.selectedWards = selections;
        var serviceListWin = Alloy.createController("services", selections).getView();
        Alloy.CFG.navgroup.openWindow(serviceListWin);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;