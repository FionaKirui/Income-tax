
var grossIncome;
var taxableIncome;
var netPay;
var effectiveRate;
var paye;
var nhif;

var oldNssf = 200;
var personalRelief = 1162;

var payeF = function (taxableIncome) {
    var paye = 0;
    
    if (taxableIncome <= 10164) {
        return paye = 0.1*taxableIncome-personalRelief;
    }   
        else if (taxableIncome >= 10165 && taxableIncome <= 19740) {
        return paye = (taxableIncome-10165)*0.15 + 1016.4-personalRelief ;
    }   
        else if (taxableIncome >= 19741 && taxableIncome <= 29316) {
        return paye = (taxableIncome-19741)*0.20 + 2452.65-personalRelief ;
    }   
        else if (taxableIncome >= 29317 && taxableIncome <= 38892) {
        return paye = (taxableIncome-29317)*0.25 + 4367.65 - personalRelief;
    }   
        else if (taxableIncome >= 38892) {
        return paye = (taxableIncome-38892)*0.3 + 6761.4-personalRelief;
    }   
        else return(0);
};


var nhifF = function (grossIncome){
    var nhif =0

    if (grossIncome<=5999){
        return nhif=150;
    }   else if (grossIncome >= 6000 && grossIncome <= 7999){
        return nhif=300;
    }   else if (grossIncome >= 8000 && grossIncome <=11999) {
        return nhif=400;
    }   else if (grossIncome >= 12000 && grossIncome <=14999) {
        return nhif=500;
    }   else if (grossIncome >= 15000 && grossIncome <=19999) {
        return nhif=600;
    }   else if (grossIncome >= 20000 && grossIncome<= 24999) {
        return nhif=750;
    }   else if (grossIncome >= 25000 && grossIncome <= 29999) { 
        return nhif=850;
    }   else if (grossIncome >= 30000 && grossIncome <= 34999) {
        return nhif=900;
    }   else if (grossIncome >= 35000 && grossIncome <= 39999) {
        return nhif=950;
    }   else if (grossIncome >= 40000 && grossIncome <= 44999) {
        return nhif=1000;
    }   else if (grossIncome >= 45000 && grossIncome <= 49999) {
        return nhif=1100;
    }   else if (grossIncome >= 50000 && grossIncome <= 59999) {
        return nhif=1200;
    }   else if (grossIncome >= 60000 && grossIncome <= 69999) {
        return nhif=1300;
    }   else if (grossIncome >= 70000 && grossIncome <= 79999) {
        return nhif=1400;
    }   else if (grossIncome >= 80000 && grossIncome <= 89999) {
        return nhif=1500;
    }   else if (grossIncome >= 90000 && grossIncome <= 99999) {
        return nhif=1600;
    }   else if (grossIncome >= 100000) {
        return nhif=1700;
    }   else return(0);
};

var nssfF = function () {
    var nssf = 0;
    if ( grossIncome <= 6000){
        return nssf = 0.6 * grossIncome;
    }   else if (grossIncome >= 6001 && grossIncome <= 18000){
        return nssf = 0.6* grossIncome;
    }   else return(1080);
};



$(document).ready(function() {
  $("#incomeTax").submit(function(event){
        var grossIncome = parseInt($("input#income").val());
        var taxableIncome = grossIncome - nssfF();
        var netPay = grossIncome - nssfF() - payeF() - nhifF();
        var effectiveRate = payeF(taxableIncome) / grossIncome * 100;

        event.preventDefault();
        

        alert(grossIncome);
        alert(nssfF());
        alert(taxableIncome);
        alert(personalRelief);
        alert(payeF(taxableIncome));
        alert(nhifF(grossIncome));
        alert(netPay);
        alert(effectiveRate);
      
  });

});
