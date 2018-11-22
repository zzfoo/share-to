var utils = require('./utils.js');

var baseUrl = 'https://www.facebook.com/dialog/share';
module.exports = function(options) {
    var url = utils.assembleUrl(baseUrl, options);
    utils.goto(url);
}