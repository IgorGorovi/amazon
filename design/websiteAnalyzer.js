/*


*/

var rankingArray = {};
var urls = {};

module.exports = {
    reportPageAccess: function(url) {
        var currentRank = urls[url];
        if (currentRank === undefined) {
            urls[url] = 1;
            /*
                also means there is no entry in our rankingArray
            */
        } else {

            /*
                if this url already has a rank delete that key
            */
            if (rankingArray[currentRank] == url) {
                delete rankingArray[currentRank];
            }
            urls[url]++;
        }
        rankingArray[urls[url]] = url;
    },
    getTopNPages: function(n) {
        var results = [];
        /*
            heavy sort included: need to think of some optimization
        */
        Object.keys(rankingArray).sort(function(prev, next) {
            return next - prev;
        }).forEach(function(key, index) {
            if (index < n) {
                results.push(rankingArray[key]);
            }
        });
        return results;
    }

}
