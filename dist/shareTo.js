(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.shareTo = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var facebook = require('./src/facebook.js');
module.exports = {
    facebook: facebook
};
},{"./src/facebook.js":2}],2:[function(require,module,exports){
var utils = require('./utils.js');

var baseUrl = 'https://www.facebook.com/dialog/share';
module.exports = function(options) {
    var url = utils.assembleUrl(baseUrl, options);
    utils.goto(url);
}
},{"./utils.js":3}],3:[function(require,module,exports){
module.exports = {
    goto: function(url, currentWindow) {
        currentWindow = !!currentWindow;
        if (currentWindow) {
            window.open(url);
        } else {
            window.open(url, '_blank');
        }
    },
    assembleUrl: function(baseUrl, query) {
        var url = baseUrl;
        var params = [];
        for (var p in query) {
            params.push(p + '=' + query[p]);
        }
        params = params.join('&');
        if (params.length > 0) {
            url += '?';
            url += params;
        }
        return url;
    }
}
},{}]},{},[1])(1)
});
