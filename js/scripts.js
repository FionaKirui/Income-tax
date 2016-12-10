// global variables
var paye = 0;
var nhif = 0;

function calcPaye(grossIncome) {
    taxablePay = (grossIncome - 200);
    var taxRelief=1162;

    // 200 is the personal Nssf deductioni


    if ((taxablePay) <= 10164) {
        paye = (taxablePay) * .1;
    } else if ((taxablePay) >= 10165 && (taxablePay) <= 19740) {
        paye = ((taxablePay) - 10164) * .15 + 1016.40;
    } else if ((taxablePay) >= 19741 && (taxablePay) <= 29316) {
        paye = ((taxablePay) - 19740) * .20 + 1016.40 + 1436.40;
    } else if ((taxablePay) >= 29317 && (taxablePay) <= 38892) {
        paye = ((taxablePay) - 29316) * .25 + 1016.40 + 1436.40 + 1915.20;

    } else if ((taxablePay) >= 38893) {
        paye = ((taxablePay) - 38892) * .30 + 1016.40 + 1436.40 + 1915.20 + 2394.00;

    }

    return paye-taxRelief;
}
console.log(calcPaye([50000]));
// paye ends here
function calcNhif(grossIncome) {
    if (grossIncome <= 5999) {
        return nhif = 150;
    } else if (grossIncome >= 6000 && grossIncome <= 7999) {
        return nhif = 300;
    } else if (grossIncome >= 8000 && grossIncome <= 11999) {
        return nhif = 400;
    } else if (grossIncome >= 12000 && grossIncome <= 14999) {
        return nhif = 500;
    } else if (grossIncome >= 15000 && grossIncome <= 19999) {
        return nhif = 600;
    } else if (grossIncome >= 20000 && grossIncome <= 24999) {
        return nhif = 750;
    } else if (grossIncome >= 25000 && grossIncome <= 29999) {
        return nhif = 850;
    } else if (grossIncome >= 30000 && grossIncome <= 34999) {
        return nhif = 900;
    } else if (grossIncome >= 35000 && grossIncome <= 39999) {
        return nhif = 950;
    } else if (grossIncome >= 40000 && grossIncome <= 44999) {
        return nhif = 1000;
    } else if (grossIncome >= 45000 && grossIncome <= 49999) {
        return nhif = 1100;
    } else if (grossIncome >= 50000 && grossIncome <= 59999) {
        return nhif = 1200;
    } else if (grossIncome >= 60000 && grossIncome <= 69999) {
        return nhif = 1300;
    } else if (grossIncome >= 70000 && grossIncome <= 79999) {
        return nhif = 1400;
    } else if (grossIncome >= 80000 && grossIncome <= 89999) {
        return nhif = 1500;
    } else if (grossIncome >= 90000 && grossIncome <= 99999) {
        return nhif = 1600;
    } else if (grossIncome >= 100000) {
        return nhif = 1700;
    }
      return nhif;
}
console.log(calcNhif([50000]));
// Nhif ends here

function calcNetpay(grossIncome) {

    var netpay=0;
    var netpay=(grossIncome-paye-nhif-200);
// nssf Tier 1()
// paye after relief
    return netpay;

  }
console.log(calcNetpay([50000]));
// netpay=grossIncome-paye-personalrelie -nhif-nssf(200)
