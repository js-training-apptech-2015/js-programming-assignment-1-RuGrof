QUnit.test("Solution1 test", function ( assert ) {

    assert.ok(solution1(9, 10, 1) === 1, "Passed!" );
    assert.ok(solution1(9, 10, 9) === 1, "Passed!" );
    assert.ok(solution1(3, 10, 1) === 7, "Passed!" );
    assert.ok(solution1(3.5, 10, 1) === 7, "Passed!" );
    assert.ok(solution1(3.5, 10.5, 1) === 7, "Passed!" );
});
