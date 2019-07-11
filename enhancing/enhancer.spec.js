const enhancer = require('./enhancer.js');

// added items
const items = require('../items');


describe('the enhancer', () => {

    describe('Repair function', () => {

        //Repair Method Returns a New Item with Durability = 100

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

    describe('Succeed function', () => {

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

    describe('Fail function', () => {

        //Fail should decrease durability by 5 if enhancement is less than 15, and by 10 if greater than 15
        //Fail should decrease durability by 1 if enhancement is greater than 16

        it('should accept an object and return a new object', () => {
            const testItem = enhancer.fail(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should decrease durability by 5 if enhancement is less than 15', () => {
            const testItem = enhancer.fail(items[2]);

            expect(testItem.durability).toBe(45);
        });

        it('should decrease durability by 10 if enhancement is equal or greater than 15', () => {
            const testItem1 = enhancer.fail(items[4]);
            const testItem2 = enhancer.fail(items[5]);

            expect(testItem1.durability).toBe(30);
            expect(testItem2.durability).toBe(50);
        });

        it('should decrease enhancement by 1 if enhancement is greater than 15', () => {
            const testItem = enhancer.fail(items[3]);

            expect(testItem.enhancement).toBe(19);
        });

        it('should not alter values other than durability', () => {
            const testItem1 = enhancer.repair(items[0]);
            const testItem2 = enhancer.repair(items[2]);

            expect(testItem1.name).toBe("Long Sword I");
            expect(testItem1.enhancement).toBe(0);

            expect(testItem2.name).toBe("Long Sword III");
            expect(testItem2.enhancement).toBe(0);
        });
    });

    describe('Get function', () => {

        //Get should not modify the name property if enhancement = 0
        //Get should modify the name property to be " [+{enhancement value}] Name Of Item "

        it('should accept an object and return a new object', () => {
            const testItem = enhancer.fail(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should modify the name property if enhancement > 0', () => {
            const testItem1 = enhancer.get(items[1]);
            const testItem2 = enhancer.get(items[3]);
            const testItem3 = enhancer.get(items[5]);

            expect(testItem1.name).toBe("[+10] Long Sword II");
            expect(testItem2.name).toBe("[+20] Long Sword IV");
            expect(testItem3.name).toBe("[+16] Long Sword VI");
        });

        it('should not modify the name if enhancement = 0', () => {
            const testItem = enhancer.get(items[0]);

            expect(testItem.name).toBe("Long Sword I");
        });

        it('should not alter values other than name', () => {
            const testItem1 = enhancer.get(items[1]);
            const testItem2 = enhancer.get(items[2]);
            const testItem3 = enhancer.get(items[3]);

            expect(testItem1.enhancement).toBe(10);
            expect(testItem1.durability).toBe(100);

            expect(testItem2.enhancement).toBe(0);
            expect(testItem2.durability).toBe(50);

            expect(testItem3.enhancement).toBe(20);
            expect(testItem3.durability).toBe(100);
        });
    });
});