function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function performCalendarWriteFunctions() {
        var calendar = Ti.Calendar.defaultCalendar;
        var eventBegins = new Date(myDate);
        var eventEnds = new Date(endDate);
        var details = {
            id: args.name,
            title: args.name,
            notes: args.details,
            location: args.location,
            begin: eventBegins,
            end: eventEnds,
            availability: Ti.Calendar.AVAILABILITY_FREE,
            allDay: false
        };
        var event = calendar.createEvent(details);
        var alert1 = event.createAlert({
            absoluteDate: new Date(new Date().getTime() - 12e5)
        });
        var alert2 = event.createAlert({
            relativeOffset: -900
        });
        var allAlerts = new Array(alert1, alert2);
        event.alerts = allAlerts;
        Ti.API.info("Going to save event now");
        event.save(Ti.Calendar.SPAN_THISEVENT);
        Ti.API.info("Done with saving event,\n Now trying to retreive it.");
        alert("Event was created!" + args.name + " is now added to your calendar.");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
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
    $.__views.detail = Ti.UI.createWindow({
        id: "detail",
        title: "Event Detail",
        backgroundColor: "white",
        calendarReference: "calendar"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        layout: "vertical",
        scrollType: "vertical",
        showVerticalScrollIndicator: "true",
        id: "__alloyId0"
    });
    $.__views.detail.add($.__views.__alloyId0);
    $.__views.dateView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.Fill,
        backgroundColor: "#efefef",
        id: "dateView"
    });
    $.__views.__alloyId0.add($.__views.dateView);
    $.__views.date = Ti.UI.createLabel({
        color: "#444444",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 21,
            fontWeight: "bold"
        },
        top: 5,
        left: 20,
        right: 20,
        textAlign: "center",
        width: Ti.UI.Fill,
        id: "date"
    });
    $.__views.dateView.add($.__views.date);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#444444",
        height: "5",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "__alloyId1"
    });
    $.__views.dateView.add($.__views.__alloyId1);
    $.__views.data = Ti.UI.createLabel({
        color: "#444444",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 18,
            fontWeight: "normal"
        },
        id: "data",
        left: "10",
        top: "-30"
    });
    $.__views.__alloyId0.add($.__views.data);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#444444",
        height: "50",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    var __alloyId5 = [];
    $.__views.__alloyId6 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId5.push($.__views.__alloyId6);
    $.__views.addToCal = Ti.UI.createButton({
        color: "#2B4888",
        height: "50dp",
        backgroundColor: "#f5f5f5",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        title: "+ Add Event to Calendar",
        id: "addToCal",
        top: "25"
    });
    __alloyId5.push($.__views.addToCal);
    $.__views.__alloyId7 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId5.push($.__views.__alloyId7);
    $.__views.__alloyId3 = Ti.UI.iOS.createToolbar({
        items: __alloyId5,
        bottom: "0",
        id: "__alloyId3"
    });
    $.__views.detail.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.date.text = args.date;
    var data = args.data;
    data = data.replace(/\n\s*\n/g, "\n\n");
    $.data.text = data;
    Ti.Platform.osname;
    var myDate = new Date(args.startDate);
    var endDate = new Date(args.endDate);
    $.addToCal.addEventListener("click", function() {
        Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED ? performCalendarWriteFunctions() : Ti.Calendar.requestEventsAuthorization(function(e) {
            e.success ? performCalendarWriteFunctions() : alert("Access to calendar is not allowed");
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;