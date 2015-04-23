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
    this.__controllerPath = "about";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.about = Ti.UI.createWindow({
        id: "about",
        title: "DCOA-About Us",
        backgroundColor: "white"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    $.__views.webview = Ti.UI.createWebView({
        touchEnabled: true,
        id: "webview",
        scalesPageToFit: "false",
        url: "/html/about.html"
    });
    $.__views.about.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;