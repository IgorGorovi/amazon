module.exports = {
    getBinaryRepresentation: function(number, length) {
        var n = new Number(number);
        var string = n.toString(2);
        var difference = length - string.length;
        while (difference > 0) {
            string = '0' + string;
            difference--;
        }
        return string.split('');
    },

    filterRepresentation: function(subset) {
        var prev = 0;
        var flag = true;
        subset.some(function(current) {
            if (prev == 1 && current == 1) {
                flag = false;
            }
            prev = current;
        });
        return flag;
    },
    getSubset: function(binaryArray, inputArray) {
        var subset = [];
        var sum;
        binaryArray.forEach(function(val, index) {
            if (val == 1) {
                subset.push(inputArray[index]);
                if (sum === undefined) {
                    sum = inputArray[index];
                } else {
                    sum += inputArray[index];
                }
            }
        });
        return {set: subset , sum: sum || 0};
    }

}
