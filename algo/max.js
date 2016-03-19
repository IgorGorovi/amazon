/*
    DISLCAIMER:

    Implements a naive implementation for running sum problem:

    1. calculates subsets
    2. gets their binary representation (utils.getBinaryRepresentation)
    2. filters subsets that are NOT eligible (utils.filterRepresentation)
    3. sorts subsets with a custom compare function (descending order)
    4. returns top candidate

    OUTPUT looks as follows for the default input file config.js:

    Input 1 : { set: [ 2, 4 ], sum: 6 }
    Input 2 : { set: [ 4, 2 ], sum: 6 }
    Input 3 : { set: [ 15 ], sum: 15 }
    Input 4 : { set: [ 0, 10 ], sum: 10 }
    Input 5 : { set: [ 45, 32 ], sum: 77 }

    NOTE:
    run by 'node max.js'

    REQUIREMENTS:
    need nodejs installed

*/

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
