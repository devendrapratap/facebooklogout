// ==UserScript==
// @name           Facebook Logout Shortcut Just Press Alt+L
// @namespace  
// @version        3.1
// @description    Press Alt+L to logout
// @include        http*://facebook.com/*
// @include        http*://*.facebook.com/*
// @include        http*://*.facebook.tld/*
// @include        http*://facebook.tld/*
// @grant          none
// @copyright      Devendra Pratap Singh
// ==/UserScript==

window.onload = function(){
    document.getElementById('pageLoginAnchor').click();
}

var eventUtility = {
    addEvent : function(el, type, fn) {
        if (typeof addEventListener !== "undefined") {
            el.addEventListener(type, fn, false);
        } else if (typeof attachEvent !== "undefined") {
            el.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }
    }
};

(function() {
	eventUtility.addEvent(document, "keydown",
		function(evt) {
			var code = evt.keyCode,
			altKey = evt.altKey;
            
			if (altKey && code === 76) {
                console.log("logging out!");
				document.forms[document.forms.length-1].submit();
			}
		});
}());