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
    $.__views.submitWards = Ti.UI.createButton({
        color: "#2B4888",
        height: "50dp",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "Apply",
        id: "submitWards"
    });
    $.__views.wardWin.rightNavButton = $.__views.submitWards;
    var __alloyId54 = [];
    $.__views.__alloyId55 = Ti.UI.createTableViewSection({
        headerTitle: "Please tap wards to select ",
        id: "__alloyId55"
    });
    __alloyId54.push($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 1",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 2",
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 3",
        id: "__alloyId58"
    });
    $.__views.__alloyId55.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 4",
        id: "__alloyId59"
    });
    $.__views.__alloyId55.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 5",
        id: "__alloyId60"
    });
    $.__views.__alloyId55.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 6",
        id: "__alloyId61"
    });
    $.__views.__alloyId55.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 7",
        id: "__alloyId62"
    });
    $.__views.__alloyId55.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        title: "Ward 8",
        id: "__alloyId63"
    });
    $.__views.__alloyId55.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        id: "__alloyId64"
    });
    $.__views.__alloyId55.add($.__views.__alloyId64);
    $.__views.wardSelect = Ti.UI.createTableView({
        data: __alloyId54,
        id: "wardSelect",
        layout: "vertical",
        backgroundColor: "#fff"
    });
    $.__views.wardWin.add($.__views.wardSelect);
    var __alloyId67 = [];
    $.__views.checkAll = Ti.UI.createButton({
        color: "#2B4888",
        height: "25",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "Check All",
        id: "checkAll",
        width: "100%"
    });
    __alloyId67.push($.__views.checkAll);
    $.__views.__alloyId68 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId67.push($.__views.__alloyId68);
    $.__views.uncheckAll = Ti.UI.createButton({
        color: "#2B4888",
        height: "25",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "Uncheck All",
        id: "uncheckAll",
        width: "100%"
    });
    __alloyId67.push($.__views.uncheckAll);
    $.__views.__alloyId65 = Ti.UI.iOS.createToolbar({
        items: __alloyId67,
        bottom: "0",
        id: "__alloyId65"
    });
    $.__views.wardWin.add($.__views.__alloyId65);
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
        Alloy.CFG.navgroup.openWindow(serviceListWin);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;