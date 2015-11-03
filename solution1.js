/**
* John is travelling from one city to another. So far he has travelled A kilometers and the total distance to his destination is B kilometers. He can only travel C kilometers per day.
* @private
* @method solution1
* @param {Number} A - travelled kilometers
* @param {Number} B - total distance
* @param {Number} C - kilometers per day
* @return {Number} total day count
*/
function solution1(A, B, C) {
    var resault;
    resault = Math.ceil((B - A) / C);
    return resault;
}
