/**
* returns a maximal XOR value for two numbers between A and B
* @private
* @method solution2
* @param {Number} A
* @param {Number} B
* @return {Number} maximal value
*/
function solution2Naive(A, B){
    var max;
    var temp;
    max = A^B;
    for(var i = B; i>A; i--){
        for(var j = A; j < i; j++){
            temp = i^j;
            if(temp > max){
                max = temp;
            }
        }
    }
    return max;

}
