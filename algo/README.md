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
