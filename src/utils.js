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