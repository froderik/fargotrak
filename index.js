var self = require("sdk/self");

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var panel = require("sdk/panel").Panel({
    contentURL: self.data.url("form.html")
});

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
    panel.show();
}
