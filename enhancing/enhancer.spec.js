const enhancer = require('./enhancer.js');

// added items
const items = require('../items');


describe('the enhancer', () => {

    //Repair Method Returns a New Item with Durability = 100

    describe('Repair function', () => {

        it('should accept an object and return a new object', () => {
            const testItem = enhancer.repair(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should return a new object with durability at 100', () => {
            const testItem1 = enhancer.repair(items[0]);
            const testItem2 = enhancer.repair(items[1]);

            expect(testItem1.durability).toBe(100);
            expect(testItem2.durability).toBe(100);
        });

        it('should not alter values other than durability', () => {
            const testItem1 = enhancer.repair(items[0]);
            const testItem2 = enhancer.repair(items[1]);

            expect(testItem1.name).toBe("Long Sword I");
            expect(testItem1.enhancement).toBe(0);

            expect(testItem2.name).toBe("Long Sword II");
            expect(testItem2.enhancement).toBe(10);
        });
    });

    describe("Succeed function", () => {

        //Succeed should increase enhancement by 1, cap enhancement at 20, and return a new item

        it('should accept an object and return a new object', () => {
            const testItem = enhancer.succeed(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should increase enhancement by 1', () => {
            const testItem1 = enhancer.succeed(items[0]);
            const testItem2 = enhancer.succeed(items[1]);
            const testItem3 = enhancer.succeed(items[2]);

            expect(testItem1.enhancement).toBe(1);
            expect(testItem2.enhancement).toBe(11);
            expect(testItem3.enhancement).toBe(1);
        });

        it('should not increase enhancement if enhancement = 20', () => {
            const testItem = enhancer.succeed(items[3]);

            expect(testItem.enhancement).toBe(20);
        });

        it('should not alter values other than enhancement', () => {
            const testItem1 = enhancer.succeed(items[1]);
            const testItem2 = enhancer.succeed(items[2]);
            const testItem3 = enhancer.succeed(items[3]);

            expect(testItem1.name).toBe('Long Sword II');
            expect(testItem1.durability).toBe(100);

            expect(testItem2.name).toBe('Long Sword III');
            expect(testItem2.durability).toBe(50);

            expect(testItem3.name).toBe('Long Sword IV');
            expect(testItem3.durability).toBe(100);
        });
    });

});