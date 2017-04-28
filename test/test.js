describe('checkCashRegister', function () {

    it('Should return true', function () {
        expect(checkCashRegister()).toEqual(true);
    });
    it('Should create an array to combine the name, value, and amount of the money in the till.', function () {
        expect(createArrayOfMoneyAndValues([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).toEqual([ [ 'PENNY', 1.01, '.01' ], [ 'NICKEL', 2.05, '.05' ], [ 'DIME', 3.1, '.1' ], [ 'QUARTER', 4.25, '.25' ], [ 'ONE', 90, '1' ], [ 'FIVE', 55, '5' ], [ 'TEN', 20, '10' ], [ 'TWENTY', 60, '20' ], [ 'ONE HUNDRED', 100, '100' ] ]);
    });
    it('', function () {
        expect(checkCashRegister(200, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])).toEqual(true);
     });


});

