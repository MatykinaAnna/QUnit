function isEven(num){
    // Returns True if **num** is even or False if it is odd.
    return Boolean(num % 2);
}

QUnit.test( "TestSquare", function( assert ) {
    for (i=-5; i<5; i++){
        var result = isEven(i);
        assert.equal( result, true, i+" % 2 == "+Number(i % 2) );
    }
});
