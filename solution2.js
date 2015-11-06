/**
 * returns a maximal XOR value for two numbers between A and B
 * @private
 * @method solution2
 * @param {Number} A
 * @param {Number} B
 * @return {Number} maximal value
 */
function solution2Naive(A, B) {
    var max;
    var temp;
    max = A ^ B;
    for (var i = B; i > A; i--) {
        for (var j = A; j < i; j++) {
            temp = i ^ j;
            if (temp > max) {
                max = temp;
            }
        }
    }
    return max;

}

/**
 * returns a maximal XOR value for two numbers between A and B
 * @private
 * @method solution2
 * @param {Number} A
 * @param {Number} B
 * @return {Number} maximal value
 */
function solution2(A, B) {
    var max;
    var min;
    var resault;
    var trulyA;
    var trulyB;
    var i, j;

    /**
     * Return Number in directCode
     * @private
     * @method directCode
     * @param {Number} Number in Two's complement
     * @return {Number} return N
     */
    function directCode(num) {
        var resault;

        resault = (~num);

        return resault;
    }

    if (A === 0 || B === 0) {

        resault = Math.max(A, B);
        console
    } else {

        //Create truly Nubmer
        if (A < 0) {

            trulyA = directCode(A);
        } else {

            trulyA = A;
        }
        if (B < 0) {

            trulyB = directCode(B);
        } else {

            trulyB = B;
        }


        max = Math.max(trulyA, trulyB);
        min = Math.min(trulyA, trulyB);
        max = max.toString(2);
        min = min.toString(2);

        if (max.length != min.length) {
            //different elder Byte
            resault = Math.pow(2, max.length) - 1;

        } else {
            console.log(min.length, max.length);
            for (i = 0; i < min.length; i++) {
                if (max[i] == "0" && min[i] == "1" || max[i] == "1" && min[i] == "0") {
                    resault = Math.pow(2, min.length - i) - 1;
                    break;
                }
            }
        }

    }
    return resault;
}
