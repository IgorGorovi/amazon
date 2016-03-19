var utils = require('./utils');
var configuration = require('./config');
var subsets = [];

function main(configuration) {

    Object.keys(configuration).forEach(function(key) {
        var a = configuration[key],
            rep;
        // = [1, 2, 3, 4],
        var len = a.length;
        var N = Math.pow(2, len);
        for (var i = 0; i < N; i++) {
            rep = utils.getBinaryRepresentation(i, len);
            if (utils.filterRepresentation(rep)) {
                subsets.push(rep);
            }
        }
        subsets.sort(function(prev, next) {
            var prevSubset = utils.getSubset(prev, a);
            var nextSubset = utils.getSubset(next, a);
            //sort it descending
            return nextSubset.sum - prevSubset.sum;
        });
        console.log(key, ':', utils.getSubset(subsets[0], a));
    })

}

main(configuration);
