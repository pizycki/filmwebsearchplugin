var self = require("sdk/self");
var tabs = require("sdk/tabs");
var contextMenu = require("sdk/context-menu");

var menuItem = contextMenu.Item({
	label: "Szukaj w Filmweb",
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function () {' +
				 '  var text = window.getSelection().toString();' +
				 '  self.postMessage(text);' +
				 '});',	
	image: self.data.url("icon-16.png"),
	onMessage: function(selectionText) {
		tabs.open("http://www.filmweb.pl/search?q=" + selectionText)
	}
});