var appId = "6ZLWfep4E66CKPF6dGb7jvvFaTSrXYfWa0A5LvHN";

var apiKey = "WA5bqKrBcoEcpIZesrO0dYvIsVihcID07a0VGa7o";

var registerDevice = function(registrationId, channels, cb) {
    var request = Titanium.Network.createHTTPClient({
        enableKeepAlive: false,
        onload: function() {
            try {
                var statusCode = request.status;
                var response = JSON.parse(request.responseText);
                200 == statusCode || 201 == statusCode ? cb(false, response) : cb(true, response);
            } catch (ex) {
                cb(true, response);
            }
        },
        onerror: function(e) {
            cb(true, e.error);
        }
    });
    channels = channels || [];
    var installationId = Ti.App.Properties.getString("Parse:installationId", "");
    if ("" == installationId) {
        installationId = Titanium.Platform.createUUID();
        Ti.App.Properties.setString("Parse:installationId", installationId);
    }
    var params = {
        deviceType: "android",
        deviceToken: registrationId,
        installationId: installationId,
        channels: channels
    };
    params["pushType"] = "gcm";
    Ti.API.info("parseRequest:" + JSON.stringify(params));
    request.open("POST", Alloy.CFG.ParseRESTApiBaseUri + "installations", true);
    request.setRequestHeader("X-Parse-Application-Id", Alloy.CFG.ParseApplicationId);
    request.setRequestHeader("X-Parse-REST-API-Key", Alloy.CFG.ParseRESTApiKey);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(params));
};

exports.registerDevice = registerDevice;