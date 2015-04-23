function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function clearSelectedWards() {
        selections = [];
        Alloy.Globals.selectedWards = "";
        var rows = $.wardSelect.data[0].rows;
        for (var i = 0; i < rows.length; ++i) {
            rows[i].hasCheck = false;
            rows[i].selected = false;
            rows[i].color = "#333";
            rows[i].backgroundColor = "#ffffff";
        }
        return Alloy.Globals.selectedWards;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "wardSelect";
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
    $.__views.wardWin = Ti.UI.createWindow({
        id: "wardWin",
        title: "Select Ward",
        backgroundColor: "#fff"
    });
    $.__views.wardWin && $.addTopLevelView($.__views.wardWin);
    var __alloyId46 = [];
    $.__views.__alloyId47 = Ti.UI.createTableViewSection({
        headerTitle: "Please tap wards to select ",
        id: "__alloyId47"
    });
    __alloyId46.push($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 1",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 2",
        id: "__alloyId49"
    });
    $.__views.__alloyId47.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 3",
        id: "__alloyId50"
    });
    $.__views.__alloyId47.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 4",
        id: "__alloyId51"
    });
    $.__views.__alloyId47.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 5",
        id: "__alloyId52"
    });
    $.__views.__alloyId47.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 6",
        id: "__alloyId53"
    });
    $.__views.__alloyId47.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 7",
        id: "__alloyId54"
    });
    $.__views.__alloyId47.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 8",
        id: "__alloyId55"
    });
    $.__views.__alloyId47.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        id: "__alloyId56"
    });
    $.__views.__alloyId47.add($.__views.__alloyId56);
    $.__views.wardSelect = Ti.UI.createTableView({
        data: __alloyId46,
        id: "wardSelect",
        layout: "vertical",
        backgroundColor: "#fff"
    });
    $.__views.wardWin.add($.__views.wardSelect);
    $.__views.__alloyId57 = Ti.UI.createView({
        bottom: "0",
        height: "50",
        backgroundColor: "#f5f5f5",
        layout: "horizontal",
        id: "__alloyId57"
    });
    $.__views.wardWin.add($.__views.__alloyId57);
    $.__views.checkAll = Ti.UI.createButton({
        color: "#2B4888",
        height: "40",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "Check All",
        id: "checkAll",
        left: "10",
        top: "5"
    });
    $.__views.__alloyId57.add($.__views.checkAll);
    $.__views.uncheckAll = Ti.UI.createButton({
        color: "#2B4888",
        height: "40",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "Uncheck All",
        id: "uncheckAll",
        left: "10",
        top: "5"
    });
    $.__views.__alloyId57.add($.__views.uncheckAll);
    $.__views.submitWards = Ti.UI.createButton({
        color: "#2B4888",
        height: "40",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "Apply >",
        id: "submitWards",
        left: "10",
        top: "5"
    });
    $.__views.__alloyId57.add($.__views.submitWards);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var selections = [];
    Alloy.Globals.selectedWards = "";
    Alloy.Globals.backServices = "";
    Ti.API.info(Alloy.Globals.selectedTypes);
    $.wardWin.addEventListener("android:back", function() {
        var serviceTypesWin = Alloy.createController("serviceTypes").getView();
        serviceTypesWin.open();
        $.wardWin.close();
    });
    $.wardWin.addEventListener("close", function() {
        Alloy.Globals.backWard = "true";
    });
    $.uncheckAll.addEventListener("click", function() {
        selections = [];
        Alloy.Globals.selectedWards = "";
        var rows = $.wardSelect.data[0].rows;
        for (var i = 0; i < rows.length; ++i) {
            rows[i].hasCheck = false;
            rows[i].selected = false;
            rows[i].color = "#333";
            rows[i].backgroundColor = "#ffffff";
        }
        return Alloy.Globals.selectedWards;
    });
    $.checkAll.addEventListener("click", function() {
        var rows = $.wardSelect.data[0].rows;
        for (var i = 0; i < rows.length; ++i) {
            rows[i].hasCheck = true;
            rows[i].selected = true;
            rows[i].color = "#2b4888";
            rows[i].backgroundColor = "#dde8ff";
        }
        return Alloy.Globals.selectedWards;
    });
    $.wardWin.addEventListener("focus", function() {
        "true" == Alloy.Globals.backServices && clearSelectedWards();
    });
    $.wardSelect.addEventListener("click", function(e) {
        if (e.row.selected) {
            Titanium.API.info("not selected clicked");
            e.row.color = "#333";
            e.row.backgroundColor = "#ffffff";
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
        if (0 == selections.length) {
            alert("Please select a ward or select all");
            return false;
        }
        if (Alloy.Globals.servicesList.length <= 0) {
            alert("Data was not loaded.  Please wait or try again later.");
            return false;
        }
        var serviceListWin;
        var serviceListWin = Alloy.createController("services", selections).getView();
        serviceListWin.open();
        $.wardWin.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;