function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function clearSelectedTypes() {
        selected = [];
        Alloy.Globals.selectedTypes = "";
        var rows = $.serviceTypes.data[0].rows;
        for (var i = 0; i < rows.length; ++i) {
            rows[i].hasCheck = false;
            rows[i].selected = false;
            rows[i].color = "#333";
            rows[i].backgroundColor = "#ffffff";
        }
        return Alloy.Globals.selectedTypes;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "serviceTypes";
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
    $.__views.serviceoptions = Ti.UI.createWindow({
        id: "serviceoptions",
        title: "Services & Resources"
    });
    $.__views.serviceoptions && $.addTopLevelView($.__views.serviceoptions);
    var __alloyId17 = [];
    $.__views.__alloyId18 = Ti.UI.createTableViewSection({
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        headerTitle: "Please tap services to select",
        id: "__alloyId18"
    });
    __alloyId17.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Adult Day Care Services",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Advocacy and Ombudsman Service",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Aging and Disability Resource Center",
        id: "__alloyId21"
    });
    $.__views.__alloyId18.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Caregiver Services and Associations ",
        id: "__alloyId22"
    });
    $.__views.__alloyId18.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Congregate Meal Sites",
        id: "__alloyId23"
    });
    $.__views.__alloyId18.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "D.C. Office on Aging Nursing Facility ",
        id: "__alloyId24"
    });
    $.__views.__alloyId18.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Day Care Program for Older Adults",
        id: "__alloyId25"
    });
    $.__views.__alloyId18.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Distribution Sites for Homebound Meals",
        id: "__alloyId26"
    });
    $.__views.__alloyId18.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Emergency Food ",
        id: "__alloyId27"
    });
    $.__views.__alloyId18.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Emergency and Group Housing",
        id: "__alloyId28"
    });
    $.__views.__alloyId18.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Employment & Job Training ",
        id: "__alloyId29"
    });
    $.__views.__alloyId18.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Health Care/ In-Home Support",
        id: "__alloyId30"
    });
    $.__views.__alloyId18.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Hearing Impairment ",
        id: "__alloyId31"
    });
    $.__views.__alloyId18.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Long-Term Care Providers",
        id: "__alloyId32"
    });
    $.__views.__alloyId18.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Nutrition Services ",
        id: "__alloyId33"
    });
    $.__views.__alloyId18.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Office on Aging Based Programs",
        id: "__alloyId34"
    });
    $.__views.__alloyId18.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Outreach and Publications",
        id: "__alloyId35"
    });
    $.__views.__alloyId18.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Recreation/Socialization ",
        id: "__alloyId36"
    });
    $.__views.__alloyId18.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Senior Wellness Centers",
        id: "__alloyId37"
    });
    $.__views.__alloyId18.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Transportation Services ",
        id: "__alloyId38"
    });
    $.__views.__alloyId18.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Veterans",
        id: "__alloyId39"
    });
    $.__views.__alloyId18.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: false,
        title: "Visual Impairment ",
        id: "__alloyId40"
    });
    $.__views.__alloyId18.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        hasCheck: "false",
        id: "__alloyId41"
    });
    $.__views.__alloyId18.add($.__views.__alloyId41);
    $.__views.serviceTypes = Ti.UI.createTableView({
        data: __alloyId17,
        id: "serviceTypes",
        layout: "vertical",
        backgroundColor: "#fff",
        color: "#333333"
    });
    $.__views.serviceoptions.add($.__views.serviceTypes);
    $.__views.__alloyId42 = Ti.UI.createView({
        bottom: "0",
        height: "50",
        backgroundColor: "#f5f5f5",
        layout: "horizontal",
        id: "__alloyId42"
    });
    $.__views.serviceoptions.add($.__views.__alloyId42);
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
    $.__views.__alloyId42.add($.__views.checkAll);
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
    $.__views.__alloyId42.add($.__views.uncheckAll);
    $.__views.submitVals = Ti.UI.createButton({
        color: "#2B4888",
        height: "40",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "Apply >",
        id: "submitVals",
        left: "10",
        top: "5"
    });
    $.__views.__alloyId42.add($.__views.submitVals);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var selected = [];
    Alloy.Globals.selectedTypes = "";
    Alloy.Globals.backWard = "";
    $.uncheckAll.addEventListener("click", function() {
        selected = [];
        Alloy.Globals.selectedTypes = "";
        var rows = $.serviceTypes.data[0].rows;
        for (var i = 0; i < rows.length; ++i) {
            rows[i].hasCheck = false;
            rows[i].selected = false;
            rows[i].color = "#333";
            rows[i].backgroundColor = "#ffffff";
        }
        return Alloy.Globals.selectedTypes;
    });
    $.checkAll.addEventListener("click", function() {
        var rows = $.serviceTypes.data[0].rows;
        for (var i = 0; i < rows.length; ++i) {
            rows[i].hasCheck = true;
            rows[i].selected = true;
            rows[i].color = "#2b4888";
            rows[i].backgroundColor = "#dde8ff";
        }
        return Alloy.Globals.selectedTypes;
    });
    $.serviceoptions.addEventListener("focus", function() {
        "true" == Alloy.Globals.backWard && clearSelectedTypes();
    });
    $.serviceTypes.addEventListener("click", function(e) {
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
    $.submitVals.addEventListener("click", function() {
        var rows = $.serviceTypes.data[0].rows;
        for (var x in rows) true === rows[x].hasCheck && -1 == selected.indexOf(rows[x].title) && selected.push(rows[x].title);
        Alloy.Globals.selectedTypes = selected;
        var wardWin = Alloy.createController("wardSelect", selected).getView();
        if (0 == selected.length) {
            alert("Please select a service or resource type");
            return false;
        }
        wardWin.open();
        $.serviceoptions.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;