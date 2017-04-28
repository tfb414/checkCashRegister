function checkCashRegister(priceOfItem, cashGiven, cashInTill){
    var moneyToBeReturn = cashGiven - priceOfItem;

    createArrayOfMoneyAndValues(cashInTill);

 


}

function createArrayOfMoneyAndValues(cashInTill){
    var currencyValue = [".01", ".05", ".1", ".25", "1", "5", "10", "20", "100"];
    var arrayOfMoneyAndValues = [];
    for (var i in cashInTill) {
        arrayOfMoneyAndValues[i] = [cashInTill[i][0], cashInTill[i][1], currencyValue[i]];
    }
    return arrayOfMoneyAndValues;
}

checkCashRegister(200, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);