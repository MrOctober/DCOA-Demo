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
    this.__controllerPath = "noResults";
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
    $.__views.noResults = Ti.UI.createWindow({
        id: "noResults"
    });
    $.__views.noResults && $.addTopLevelView($.__views.noResults);
    $.__views.__alloyId7 = Ti.UI.createView({
        id: "__alloyId7"
    });
    $.__views.noResults.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        text: "There are no results, please try your search again.",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;