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
    this.__controllerPath = "contact";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.contact = Ti.UI.createWindow({
        id: "contact",
        title: "DCOA-Contact Us",
        backgroundColor: "white"
    });
    $.__views.contact && $.addTopLevelView($.__views.contact);
    $.__views.webview = Ti.UI.createWebView({
        touchEnabled: true,
        id: "webview",
        scalesPageToFit: "false",
        url: "/html/contact.html",
        willHandleTouches: "true"
    });
    $.__views.contact.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.App.addEventListener("ynOpenURL", function(e) {
        Ti.Platform.openURL(e.url);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;