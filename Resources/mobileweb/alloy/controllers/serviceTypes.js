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
    this.__controllerPath = "serviceTypes";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.serviceoptions = Ti.UI.createWindow({
        id: "serviceoptions",
        title: "Select Services"
    });
    $.__views.serviceoptions && $.addTopLevelView($.__views.serviceoptions);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#fff",
        id: "__alloyId19"
    });
    $.__views.serviceoptions.add($.__views.__alloyId19);
    var __alloyId20 = [];
    $.__views.__alloyId21 = Ti.UI.createTableViewSection({
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        headerTitle: "Please tap services to select",
        id: "__alloyId21"
    });
    __alloyId20.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Long-Term Care Providers",
        hasCheck: "false",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Adult Day Care Services",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Day Care Program for Older Adults",
        id: "__alloyId24"
    });
    $.__views.__alloyId21.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Caregiver Services and Associations ",
        id: "__alloyId25"
    });
    $.__views.__alloyId21.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Hearing Impairment ",
        id: "__alloyId26"
    });
    $.__views.__alloyId21.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Visual Impairment ",
        id: "__alloyId27"
    });
    $.__views.__alloyId21.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Veterans",
        id: "__alloyId28"
    });
    $.__views.__alloyId21.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Nutrition Services ",
        id: "__alloyId29"
    });
    $.__views.__alloyId21.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Emergency Food ",
        id: "__alloyId30"
    });
    $.__views.__alloyId21.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Aging and Disability Resource Center",
        id: "__alloyId31"
    });
    $.__views.__alloyId21.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Office on Aging Based Programs",
        id: "__alloyId32"
    });
    $.__views.__alloyId21.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Outreach and Publications",
        id: "__alloyId33"
    });
    $.__views.__alloyId21.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "D.C. Office on Aging Nursing Facility",
        id: "__alloyId34"
    });
    $.__views.__alloyId21.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Senior Wellness Centers",
        id: "__alloyId35"
    });
    $.__views.__alloyId21.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Advocacy and Ombudsman Service",
        id: "__alloyId36"
    });
    $.__views.__alloyId21.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Emergency and Group Housing",
        id: "__alloyId37"
    });
    $.__views.__alloyId21.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Employment & Job Training ",
        id: "__alloyId38"
    });
    $.__views.__alloyId21.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Congregate Meal Sites",
        id: "__alloyId39"
    });
    $.__views.__alloyId21.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Distribution Sites for Homebound Meals",
        id: "__alloyId40"
    });
    $.__views.__alloyId21.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Health Care/ In-Home Support",
        id: "__alloyId41"
    });
    $.__views.__alloyId21.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Recreation/Socialization ",
        id: "__alloyId42"
    });
    $.__views.__alloyId21.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        color: "#333",
        backgroundColor: "#ffffff",
        selectedColor: "#efefef",
        height: 50,
        title: "Transportation Services ",
        id: "__alloyId43"
    });
    $.__views.__alloyId21.add($.__views.__alloyId43);
    $.__views.serviceTypes = Ti.UI.createTableView({
        data: __alloyId20,
        id: "serviceTypes",
        layout: "vertical",
        backgroundColor: "#fff",
        color: "#333333"
    });
    $.__views.__alloyId19.add($.__views.serviceTypes);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var selected = [];
    Alloy.Globals.selectedTypes = "";
    $.serviceTypes.addEventListener("click", function(e) {
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
    $.submitVals.addEventListener("click", function() {
        var rows = $.serviceTypes.data[0].rows;
        for (var x in rows) true === rows[x].hasCheck && -1 == selected.indexOf(rows[x].title) && selected.push(rows[x].title);
        Alloy.Globals.selectedTypes = selected;
        var wardWin = Alloy.createController("wardSelect", selected).getView();
        Alloy.CFG.navgroup.openWindow(wardWin);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;