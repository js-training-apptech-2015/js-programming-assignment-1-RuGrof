QUnit.test("solution2Naive test", function ( assert ) {
    for(var i = -35; i<-2; i++){
        for(var j = -33; j < 0 ; j++){
            assert.strictEqual(solution2Naive(i, j), solution2Naive(-j, -i), "Passed!" );
        }
    }

});
