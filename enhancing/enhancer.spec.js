const enhancer = require('./enhancer.js');
// test away!


describe('the enhancer', () => {

    describe('the repair function', () => {
        it('should restore durability', () => {
            //arrange
            const longsword ={health: 100};

            //act
            const result = enhancer.repair(longsword);

            //assert
            expect(result).toBe(100);
        });
    })


});