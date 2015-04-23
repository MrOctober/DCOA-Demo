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
    this.__controllerPath = "header";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.logoArea = Ti.UI.createView({
        id: "logoArea",
        layout: "horizontal"
    });
    $.__views.logoArea && $.addTopLevelView($.__views.logoArea);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo"
    });
    $.__views.logoArea.add($.__views.logo);
    $.__views.title = Ti.UI.createLabel({
        text: "DCOA Mobile",
        id: "title"
    });
    $.__views.logoArea.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;