QUnit.test("solution2Naive Negative test", function ( assert ) {
    for(var i = -8; i<-1; i++){
        for(var j = i+1; j < 0 ; j++){
            console.log(i,j);
            assert.strictEqual(solution2Naive(i, j), solution2(i,j), "Passed!" );
        }
    }

});
QUnit.test("solution2Naive Positive test", function ( assert ) {
    for(var i = 1; i<17; i++){
        for(var j = i+1; j < 19 ; j++){
            console.log(i,j);
            assert.strictEqual(solution2Naive(i, j), solution2(i,j), "Passed!" );
        }
    }

});

