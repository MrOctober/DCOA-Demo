var args = arguments[0] || {};

Ti.App.addEventListener('ynOpenURL', function(e) {
        Ti.Platform.openURL(e.url);
    });